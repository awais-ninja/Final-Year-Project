import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-teal-800 text-white lg:w-64">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Sidebar</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/dashboard/admin">
              <div className="cursor-pointer text-gray-300 hover:text-white">
                Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/settings">
              <div className="cursor-pointer text-gray-300 hover:text-white">
                Settings
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/manageorders">
              <div className="cursor-pointer text-gray-300 hover:text-white">
                Manage Orders
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin/users">
              <div className="cursor-pointer text-gray-300 hover:text-white">
                Manage Users
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
