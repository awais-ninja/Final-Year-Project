import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        Here to Help Your Every Business Need
      </h2>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6">
        Stop worrying about any shipping problems. Focus on your business. Let
        us provide the support you deserve.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors"
      >
        Get Free Quote
      </Link>
    </div>
  );
};

export default index;
