"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`px-2.5 py-1 hover:bg-white transition-colors rounded-md border-b-2  hover:border-teal-400 selection:bg-slate-200 select-none cursor-pointer ${
        pathname === href ? "border-teal-400 bg-white" : "border-transparent"
      }`}
    >
      {children}
    </Link>
  );
};
export default NavigationLink;
