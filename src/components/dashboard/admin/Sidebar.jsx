import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/static/images/placeholders/logo/logo-bg-white.png";

const Sidebar = () => {
  return (
    <aside className="bg-teal-800 text-white lg:w-64">
      <div className="p-4">
        <Link href="/">
          <Image className="width-auto" src={Logo} alt="Logo image" />
        </Link>
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
