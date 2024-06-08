import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AuthProvider } from "../contexts/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swift Link",
  description:
    "SwiftLink is a comprehensive freight transportation system designed by Awais Ahmad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
