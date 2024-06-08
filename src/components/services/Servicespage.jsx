import Image from "next/image";
import React from "react";

const Servicespage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teal-800 mb-4 md:mb-8">
          Here to Help Your Business Need
        </h1>
        <p className="text-black mb-4 md:mb-8">
          Stop worrying about any shipping problems. Focus on your business. Let
          us provide the support you deserve.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/accomplishments/tons-of-goods.png"
            alt="Tons of goods"
            className="w-32 md:w-40 h-32 md:h-40 rounded mb-2"
          />
          <div className="text-lg md:text-3xl font-bold text-teal-800">
            Full Truck Loads
          </div>
          <p className="text-teal-800 text-center">
            Benefit from economies of scale and productivity when shipments are
            large enough to require the use of the entire truck.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/accomplishments/delivered-packages.png"
            alt="Delivered packages"
            className="w-32 md:w-40 h-32 md:h-40 rounded mb-2"
          />
          <div className="text-lg md:text-3xl font-bold text-teal-800">
            Less than Truck Loads
          </div>
          <p className="text-teal-800 text-center">
            Take advantage from the transportation of relatively small freight
            at a fraction of the cost of hiring an entire truck for an exclusive
            shipment.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <Image
            src="/accomplishments/courier-service.png"
            alt="Countries covered"
            className="w-32 md:w-40 h-32 md:h-40 rounded mb-2"
          />
          <div className="text-lg md:text-3xl font-bold text-teal-800">
            Courier service
          </div>
          <p className="text-teal-800 text-center">
            When speed, individualization and specialization of express delivery
            services matters, parcel delivery becomes optimal transportation
            mode.
          </p>
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

export default Servicespage;
