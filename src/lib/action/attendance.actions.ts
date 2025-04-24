// src/lib/action/attendance.actions.ts
"use server";

import { connectToDatabase } from "../mongoose";
import AttendanceModel from "@/database/models/Attendance.model";
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

// --- Get Student Attendance ---
export async function getStudentAttendance(
  studentId: string,
  startDate?: string,
  endDate?: string
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

    // Build query
    const query: any = { student: studentId };

    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    } else if (startDate) {
      query.date = { $gte: new Date(startDate) };
    } else if (endDate) {
      query.date = { $lte: new Date(endDate) };
    } else {
      // Default to last 30 days if no date range provided
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      query.date = { $gte: thirtyDaysAgo };
    }

    // Fetch attendance records
    const attendanceRecords = await AttendanceModel.find(query)
      .populate("class", "name")
      .populate("course", "name courseCode")
      .populate("markedBy", "name")
      .sort({ date: -1 })
      .lean();

    // Calculate attendance statistics
    const totalRecords = attendanceRecords.length;
    const presentCount = attendanceRecords.filter(
      (record) => record.status === "present"
    ).length;
    const absentCount = attendanceRecords.filter(
      (record) => record.status === "absent"
    ).length;
    const lateCount = attendanceRecords.filter(
      (record) => record.status === "late"
    ).length;
    const excusedCount = attendanceRecords.filter(
      (record) => record.status === "excused"
    ).length;

    const attendanceRate =
      totalRecords > 0 ? ((presentCount + lateCount) / totalRecords) * 100 : 0;

    // Group attendance by date
    const groupedByDate: Record<string, any[]> = {};

    attendanceRecords.forEach((record) => {
      const dateStr = new Date(record.date).toISOString().split("T")[0];

      if (!groupedByDate[dateStr]) {
        groupedByDate[dateStr] = [];
      }

      groupedByDate[dateStr].push(record);
    });

    return {
      success: true,
      message: "Student attendance retrieved successfully",
      data: {
        records: attendanceRecords,
        groupedByDate,
        stats: {
          total: totalRecords,
          present: presentCount,
          absent: absentCount,
          late: lateCount,
          excused: excusedCount,
          attendanceRate: Math.round(attendanceRate * 10) / 10, // Round to 1 decimal place
        },
      },
    };
  } catch (error) {
    console.error("Get Student Attendance Error:", error);
    return {
      success: false,
      message: "Failed to retrieve student attendance",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// --- Get Student Attendance Summary ---
export async function getStudentAttendanceSummary(
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

    // Get current month attendance
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const currentMonthRecords = await AttendanceModel.find({
      student: studentId,
      date: { $gte: startOfMonth },
    }).lean();

    const totalCurrentMonth = currentMonthRecords.length;
    const presentCurrentMonth = currentMonthRecords.filter(
      (record) => record.status === "present"
    ).length;
    const absentCurrentMonth = currentMonthRecords.filter(
      (record) => record.status === "absent"
    ).length;
    const lateCurrentMonth = currentMonthRecords.filter(
      (record) => record.status === "late"
    ).length;

    const currentMonthRate =
      totalCurrentMonth > 0
        ? ((presentCurrentMonth + lateCurrentMonth) / totalCurrentMonth) * 100
        : 0;

    // Get previous month attendance
    const startOfPrevMonth = new Date(startOfMonth);
    startOfPrevMonth.setMonth(startOfPrevMonth.getMonth() - 1);

    const endOfPrevMonth = new Date(startOfMonth);
    endOfPrevMonth.setDate(0);
    endOfPrevMonth.setHours(23, 59, 59, 999);

    const prevMonthRecords = await AttendanceModel.find({
      student: studentId,
      date: {
        $gte: startOfPrevMonth,
        $lte: endOfPrevMonth,
      },
    }).lean();

    const totalPrevMonth = prevMonthRecords.length;
    const presentPrevMonth = prevMonthRecords.filter(
      (record) => record.status === "present"
    ).length;
    const latePrevMonth = prevMonthRecords.filter(
      (record) => record.status === "late"
    ).length;

    const prevMonthRate =
      totalPrevMonth > 0
        ? ((presentPrevMonth + latePrevMonth) / totalPrevMonth) * 100
        : 0;

    // Determine trend
    let trend = "stable";
    if (currentMonthRate > prevMonthRate + 5) {
      trend = "improving";
    } else if (currentMonthRate < prevMonthRate - 5) {
      trend = "declining";
    }

    // Get recent absences (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentAbsences = await AttendanceModel.find({
      student: studentId,
      date: { $gte: sevenDaysAgo },
      status: "absent",
    })
      .populate("class", "name")
      .sort({ date: -1 })
      .lean();

    return {
      success: true,
      message: "Student attendance summary retrieved successfully",
      data: {
        currentMonth: {
          rate: Math.round(currentMonthRate * 10) / 10,
          total: totalCurrentMonth,
          present: presentCurrentMonth,
          absent: absentCurrentMonth,
          late: lateCurrentMonth,
        },
        previousMonth: {
          rate: Math.round(prevMonthRate * 10) / 10,
          total: totalPrevMonth,
        },
        trend,
        recentAbsences,
      },
    };
  } catch (error) {
    console.error("Get Student Attendance Summary Error:", error);
    return {
      success: false,
      message: "Failed to retrieve student attendance summary",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
