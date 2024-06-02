import React from "react";
const index = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 max-w-3xl flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
            We give you control of your shipments
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="text-lg text-gray-700 text-center md:text-left">
            Moovit invests time and expertise to fully understand your business
            before designing plans to improve your supply chain. We take
            responsibility for the performance of all our suppliers and for
            ensuring the availability of resources and equipment needed to
            control the flow of goods under our charge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
