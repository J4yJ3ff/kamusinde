// src/app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth"; // Use our helper
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Reuse footer for now

export default async function DashboardPage() {
  const session = await getServerSession();

  // If no session, redirect to login
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard"); // Redirect back to dashboard after login
  }

  // User is logged in, display dashboard content
  return (
    <div className="flex min-h-screen flex-col">
      {/* You might want a different Header/Sidebar for the dashboard */}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome back, {session.user.name || "User"}!</p>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          <p>
            <strong>Email:</strong> {session.user.email}
          </p>
          <p>
            <strong>Role:</strong> {session.user.role}
          </p>
          <p>
            <strong>User ID:</strong> {session.user.id}
          </p>
          {/* Add more dashboard widgets and components here */}
        </div>
      </main>
      {/* You might want a different Footer or none */}
      <Footer />
    </div>
  );
}
