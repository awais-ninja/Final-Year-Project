"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DP from "@/static/images/placeholders/dp.png";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const { auth, setAuth } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200); // Adjust the delay as needed
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="bg-teal-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={DP} // Replace this with the path to your profile picture
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        {(isDropdownOpen || isHovered) && (
          <div
            className="absolute right-0 mt-2 w-48 bg-teal-500 rounded-md shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul>
              <li className="py-2 px-4 hover:text-black">
                <button
                  onClick={() => {
                    setAuth({
                      isAuthenticated: false,
                      user: null,
                    });
                    setTimeout(() => {
                      router.replace("/");
                    }, 2000);
                  }}
                >
                  <span>Logout</span>
                </button>
              </li>
              <li className="py-2 px-4 hover:text-black">
                <Link href="/dashboard/admin/settings">
                  <span>See Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
