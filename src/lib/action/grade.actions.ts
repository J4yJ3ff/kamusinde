// src/lib/action/grade.actions.ts
"use server";

import { connectToDatabase } from "../mongoose";
import GradeModel from "@/database/models/Grade.model";
import { getServerSession } from "../auth";
import { UserRole } from "@/types";
import mongoose from "mongoose";

// --- Types for Action Results ---
interface ActionResult {
  success: boolean;
  message: string;
  data?: any;
  error?: string | null;
}

// --- Check Authorization ---
async function checkAuthorization(
  allowedRoles: UserRole[] = [UserRole.ADMIN, UserRole.STAFF, UserRole.TEACHER]
) {
  const session = await getServerSession();

  if (!session?.user) {
    return { authorized: false, message: "Not authenticated" };
  }

  if (!allowedRoles.includes(session.user.role as UserRole)) {
    return {
      authorized: false,
      message: "Not authorized to perform this action",
    };
  }

  return { authorized: true, userId: session.user.id };
}

// --- Get Student Grades ---
export async function getStudentGrades(
  studentId: string
): Promise<ActionResult> {
  // Check authorization
  const auth = await checkAuthorization();
  if (!auth.authorized) {
    return {
      success: false,
      message: auth.message ?? "Authorization failed",
    };
  }

  try {
    await connectToDatabase();

    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return {
        success: false,
        message: "Invalid student ID",
      };
    }

    // Fetch grades for the student, sorted by term and course
    const grades = await GradeModel.find({ student: studentId })
      .populate("course", "name courseCode")
      .populate("class", "name")
      .sort({ academicYear: -1, term: -1 })
      .lean();

    // Group grades by academic year and term
    const groupedGrades: Record<string, Record<string, any[]>> = {};

    grades.forEach((grade) => {
      if (!groupedGrades[grade.academicYear]) {
        groupedGrades[grade.academicYear] = {};
      }

      if (!groupedGrades[grade.academicYear][grade.term]) {
        groupedGrades[grade.academicYear][grade.term] = [];
      }

      groupedGrades[grade.academicYear][grade.term].push(grade);
    });

    return {
      success: true,
      message: "Student grades retrieved successfully",
      data: {
        grades,
        groupedGrades,
      },
    };
  } catch (error) {
    console.error("Get Student Grades Error:", error);
    return {
      success: false,
      message: "Failed to retrieve student grades",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// --- Get Student Academic Summary ---
export async function getStudentAcademicSummary(
  studentId: string
): Promise<ActionResult> {
  // Check authorization
  const auth = await checkAuthorization();
  if (!auth.authorized) {
    return {
      success: false,
      message: auth.message ?? "Authorization failed",
    };
  }

  try {
    await connectToDatabase();

    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return {
        success: false,
        message: "Invalid student ID",
      };
    }

    // Get the latest academic year and term
    const latestGrade = await GradeModel.findOne({ student: studentId })
      .sort({ academicYear: -1, term: -1 })
      .lean();

    if (!latestGrade) {
      return {
        success: true,
        message: "No academic records found for student",
        data: {
          currentAcademicYear: null,
          currentTerm: null,
          averageScore: 0,
          totalCourses: 0,
          performanceTrend: "stable",
        },
      };
    }

    const { academicYear, term } = latestGrade;

    // Calculate average score for the current term
    const currentTermGrades = await GradeModel.find({
      student: studentId,
      academicYear,
      term,
    }).lean();

    let totalScore = 0;
    currentTermGrades.forEach((grade) => {
      totalScore += (grade.score / grade.maxScore) * 100;
    });

    const averageScore =
      currentTermGrades.length > 0 ? totalScore / currentTermGrades.length : 0;

    // Get total number of courses
    const totalCourses = await GradeModel.distinct("course", {
      student: studentId,
      academicYear,
      term,
    }).countDocuments();

    // Determine performance trend by comparing with previous term
    let performanceTrend = "stable";

    // Find the previous term
    let previousTerm: string | null = null;
    let previousAcademicYear = academicYear;

    if (term === "Term 3") {
      previousTerm = "Term 2";
    } else if (term === "Term 2") {
      previousTerm = "Term 1";
    } else if (term === "Term 1") {
      // Previous term would be Term 3 of the previous academic year
      // This assumes academic years are formatted like "2022-2023"
      const yearParts = academicYear.split("-");
      if (yearParts.length === 2) {
        const prevYear1 = Number.parseInt(yearParts[0]) - 1;
        const prevYear2 = Number.parseInt(yearParts[1]) - 1;
        previousAcademicYear = `${prevYear1}-${prevYear2}`;
        previousTerm = "Term 3";
      }
    }

    if (previousTerm) {
      const previousTermGrades = await GradeModel.find({
        student: studentId,
        academicYear: previousAcademicYear,
        term: previousTerm,
      }).lean();

      if (previousTermGrades.length > 0) {
        let prevTotalScore = 0;
        previousTermGrades.forEach((grade) => {
          prevTotalScore += (grade.score / grade.maxScore) * 100;
        });
        const prevAverageScore = prevTotalScore / previousTermGrades.length;

        // Determine trend based on 5% threshold
        if (averageScore > prevAverageScore * 1.05) {
          performanceTrend = "improving";
        } else if (averageScore < prevAverageScore * 0.95) {
          performanceTrend = "declining";
        }
      }
    }

    return {
      success: true,
      message: "Student academic summary retrieved successfully",
      data: {
        currentAcademicYear: academicYear,
        currentTerm: term,
        averageScore: Math.round(averageScore * 10) / 10, // Round to 1 decimal place
        totalCourses,
        performanceTrend,
      },
    };
  } catch (error) {
    console.error("Get Student Academic Summary Error:", error);
    return {
      success: false,
      message: "Failed to retrieve student academic summary",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
