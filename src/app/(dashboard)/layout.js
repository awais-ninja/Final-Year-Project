import React from "react";
import Header from "@/components/dashboard/admin/DashboardHeader";
import Sidebar from "@/components/dashboard/admin/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 py-6">
            {/* Children (page content) */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
