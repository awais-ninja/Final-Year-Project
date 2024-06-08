import Image from "next/image";
import React from "react";

const Accomplishments = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teal-800 mb-4 md:mb-8">
          Accomplishments
        </h1>
        <p className="text-black mb-4 md:mb-8">
          Let the numbers speak for themselves.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/accomplishments/tons-of-goods.png"
            alt="Tons of goods"
            className="w-32 md:w-40 h-32 md:h-40 rounded mb-2"
          />
          <div className="text-lg md:text-3xl font-bold text-teal-800">573</div>
          <p className="text-teal-800 text-center">Tons of goods</p>
        </div>
        <div className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/accomplishments/delivered-packages.png"
            alt="Delivered packages"
            className="w-32 md:w-40 h-32 md:h-40 rounded mb-2"
          />
          <div className="text-lg md:text-3xl font-bold text-teal-800">
            100+
          </div>
          <p className="text-teal-800 text-center">Delivered packages</p>
        </div>
        <div className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/accomplishments/countries-covered.png"
            alt="Countries covered"
            className="w-32 md:w-40 h-32 md:h-40 rounded mb-2"
          />
          <div className="text-lg md:text-3xl font-bold text-teal-800">5+</div>
          <p className="text-teal-800 text-center">Countries covered</p>
        </div>
      </div>

      <div className="mt-8 prose text-black text-center">
        <p>
          We strongly support best practice sharing across our operations around
          the world and across various industrial sectors.
        </p>
        <p>
          As one of the worlds leading supply chain management companies, we
          design and implement industry-leading solutions.
        </p>
        <p>
          Our commitment to sustainability helps us reduce waste and share the
          benefits with our customers.
        </p>
      </div>
    </div>
  );
};

export default Accomplishments;
