// Navigation.js
import Link from "next/link";
import NavigationLink from "./NavigationLink";

const NavigationList = ({ data }) => {
  return (
    <ul className="flex flex-col md:flex-row md:items-center justify-center space-y-1 md:space-y-0 md:space-x-1">
      {data.map((item, index) => (
        <li key={index}>
          <NavigationLink href={item.path}>{item.content}</NavigationLink>
        </li>
      ))}
    </ul>
  );
};

const navigationListData = [
  { path: "/", content: "Home" },
  { path: "/about", content: "About Us" },
  { path: "/services", content: "Services" },
  { path: "/contact", content: "Contact Us" },
];

const Navigation = () => {
  return (
    <div className="px-4 md:px-14 shadow-lg bg-slate-50 py-2">
      <div className="flex flex-col md:flex-row md:items-center">
        <Link href="/">
          <img
            src="/images/logo/logo.png"
            alt="Logo"
            className="h-12 md:h-auto"
          />
        </Link>
        <div className="flex flex-col md:flex-row md:ml-auto md:items-center md:space-x-4">
          <NavigationList data={navigationListData} />
          <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <Link
              href="/login"
              className="px-3 py-1 border-2 border-cyan-600 rounded-md hover:bg-cyan-600 hover:text-white transition-colors text-center"
            >
              Login / Register
            </Link>
            <Link
              href="/"
              className="px-3 py-1 bg-cyan-600 border-2 border-transparent rounded-md text-white hover:bg-cyan-600 transition-colors text-center"
            >
              Get Quotation
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
