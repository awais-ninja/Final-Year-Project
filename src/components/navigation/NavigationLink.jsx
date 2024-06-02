"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`px-2.5 py-1 hover:bg-slate-200 transition-colors rounded-md border-b-2  hover:border-slate-400 selection:bg-slate-200 select-none cursor-pointer ${
        pathname === href
          ? "border-slate-400 bg-slate-200"
          : "border-transparent"
      }`}
    >
      {children}
    </Link>
  );
};
export default NavigationLink;
