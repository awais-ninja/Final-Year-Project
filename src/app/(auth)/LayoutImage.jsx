"use client";

import Image from "next/image";
import LoginImage from "@/static/images/login.jpg";
import RegisterImage from "@/static/images/register.jpg";
import { usePathname } from "next/navigation";

const LayoutImage = () => {
  const pathname = usePathname();

  return (
    <Image
      src={pathname === "/register" ? RegisterImage : LoginImage}
      alt={pathname === "/register" ? "Register" : "Login"}
      placeholder="blur"
      className="object-cover w-full h-full -z-10 absolute"
      priority={true}
    />
  );
};
export default LayoutImage;
