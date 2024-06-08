"use client";

import { useAuthContext } from "@/hooks/useAuthContext";
import Link from "next/link";

const DashboardButton = () => {
  const { auth, setAuth } = useAuthContext();

  if (auth.isAuthenticated) {
    return (
      <Link
        href="/dashboard/admin"
        className="px-3 py-1 border-2 border-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition-colors text-center"
      >
        Dashboard
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className="px-3 py-1 border-2 border-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition-colors text-center"
    >
      Login / Register
    </Link>
  );
};
export default DashboardButton;
