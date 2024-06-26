import Image from "next/image";
import Link from "next/link";
import React from "react";
import GraphImage from "@/static/images/placeholders/graph.jpg";

const index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <Image
            src={GraphImage}
            alt="graph showing business analytics"
            className="object-cover md:rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-teal-800">
            How We Help Businesses Across the World
          </h1>
          <p className="text-gray-500">
            We empower businesses worldwide with tailored solutions, fostering
            global prosperity and driving success in todays dynamic landscape.
          </p>
          <div className="mt-8">
            <Link href="/">
              <div className="text-teal-600 text-lg font-medium ">
                Get a Quote for Your Business
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
