import Link from "next/link";
import React from "react";
import Servicespage from "@/components/services/Servicespage";
import Pricing from "@/components/pricing";
import Calltoaction from "@/components/calltoaction";
import Image from "next/image";

import PIC5 from "@/static/images/placeholders/pic-5.jpg";
import PIC6 from "@/static/images/placeholders/pic-6.jpg";

const Content = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-teal-800 text-center mt-20">
        Our Services
      </div>
      <section className="w-full mx-auto py-10 bg-white">
        {[
          {
            imageSrc: PIC6,
            title: "Furniture Moving Services",
            description:
              "Swift Link provides efficient furniture moving services, streamlining the process of relocating bulky items like sofas, beds, and tables. Our comprehensive services cover packing, loading, transporting, and unloading furniture, ensuring a smooth transition. With professional assistance, you can avoid the hassle of lifting heavy objects, minimize the risk of damage, and expedite the moving process.",
            reverse: false,
          },
          {
            imageSrc: PIC5,
            title: "Office Moving Services",
            description:
              "Swift Link offers reliable office moving services tailored to meet the unique needs of businesses. Whether you are relocating within the same building or moving to a new location, we handle every aspect of the office move efficiently. From packing office furniture and equipment to transporting and setting up at the new site, our experienced team ensures a seamless transition. With minimal disruption to your operations, you can trust Swift Link for a stress-free office move.",
            reverse: true,
          },
          {
            imageSrc: PIC6,
            title: "House Moving Services",
            description:
              "Swift Link provides comprehensive house moving services designed to make your relocation smooth and hassle-free. Whether you are moving locally or long-distance, our experienced team takes care of every aspect of the move. From packing your belongings securely to transporting them safely to your new home, we handle it all. With Swift Link, you can trust that your household items are in good hands, allowing you to focus on settling into your new space.",
            reverse: false,
          },
          {
            imageSrc: PIC5,
            title: "Transportation Services",
            description:
              "Swift Link offers reliable transportation services to meet your diverse needs. Whether you require transportation for personal or business purposes, we have got you covered. Our fleet of vehicles is well-maintained and operated by experienced drivers, ensuring safe and timely delivery of your goods. From small packages to large shipments, we handle transportation with precision and efficiency. With Swift Link, you can trust that your items will reach their destination securely and on schedule.",
            reverse: true,
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-wrap md:flex-wrap lg:flex-nowrap lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4 ${
              service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="lg:w-[50%] md:w-full xs:w-full ">
              <Link href="./services">
                <Image
                  className="rounded-lg"
                  src={service.imageSrc}
                  alt={`${service.title} image`}
                />
              </Link>
            </div>
            <div className="lg:w-[50%] md:w-full xs:w-full bg-gray-100 p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-teal-800">
                {service.title}
              </h2>
              <p className="text-md mt-4 text-justify">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Content />
      <Pricing />
      <Servicespage />
      <Calltoaction />
    </>
  );
};
export default Page;
