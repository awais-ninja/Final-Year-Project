import Link from "next/link";
import React from "react";
import Servicespage from "@/components/services/Servicespage";
import Pricing from "@/components/pricing";
import Calltoaction from "@/components/calltoaction";
import Image from "next/image";
const Content = () => {
  return (
    <div>
      <div className="  text-5xl font-bold text-teal-800 text-center mt-20">
        Our Services
      </div>
      <section className="w-full mx-auto py-10 bg-white">
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full ">
            <Link href="./services">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/images/pic-5.jpg"
                alt="billboard image"
              />
            </Link>
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-teal-800 ">
              Furniture Moving Services
            </h2>
            <p className="text-md mt-4 text-justify">
              Swift Link provides efficient furniture moving services,
              streamlining the process of relocating bulky items like sofas,
              beds, and tables. Our comprehensive services cover packing,
              loading, transporting, and unloading furniture, ensuring a smooth
              transition. With professional assistance, you can avoid the hassle
              of lifting heavy objects, minimize the risk of damage, and
              expedite the moving process.
            </p>
          </div>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="md:hidden sm:block xs:block xs:w-full">
            <Link href="./services">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/images/pic-5.jpg"
                alt="billboard image"
              />
            </Link>
          </div>

          <div className="lg:w-[50%] xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold  text-teal-800">
              Office Moving Services
            </h2>

            <p className="text-md mt-4 text-justify">
              Swift Link offers reliable office moving services tailored to meet
              the unique needs of businesses. Whether you are relocating within
              the same building or moving to a new location, we handle every
              aspect of the office move efficiently. From packing office
              furniture and equipment to transporting and setting up at the new
              site, our experienced team ensures a seamless transition. With
              minimal disruption to your operations, you can trust Swift Link
              for a stress-free office move.
            </p>
          </div>

          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
            <Link href="./services">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/images/pic-5.jpg"
                alt="billboard image"
              />
            </Link>
          </div>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
          <div className="lg:w-[50%] xs:w-full ">
            <Link href="./services">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/images/pic-5.jpg"
                alt="billboard image"
              />
            </Link>
          </div>
          <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold text-teal-800 ">
              House Moving Services
            </h2>
            <p className="text-md mt-4 text-justify">
              Swift Link provides comprehensive house moving services designed
              to make your relocation smooth and hassle-free. Whether you are
              moving locally or long-distance, our experienced team takes care
              of every aspect of the move. From packing your belongings securely
              to transporting them safely to your new home, we handle it all.
              With Swift Link, you can trust that your household items are in
              good hands, allowing you to focus on settling into your new space.
            </p>
          </div>
        </div>

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
          <div className="md:hidden sm:block xs:block xs:w-full">
            <Link href="./services">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/images/pic-5.jpg"
                alt="billboard image"
              />
            </Link>
          </div>

          <div className="lg:w-[50%] xs:w-full bg-gray-100  md:p-4 xs:p-0 rounded-md">
            <h2 className="text-3xl font-semibold  text-teal-800">
              Transportation Services
            </h2>

            <p className="text-md mt-4 text-justify">
              Swift Link offers reliable transportation services to meet your
              diverse needs. Whether you require transportation for personal or
              business purposes, we have got you covered. Our fleet of vehicles is
              well-maintained and operated by experienced drivers, ensuring safe
              and timely delivery of your goods. From small packages to large
              shipments, we handle transportation with precision and efficiency.
              With Swift Link, you can trust that your items will reach their
              destination securely and on schedule.
            </p>
          </div>

          <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
            <Link href="./services">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/images/pic-5.jpg"
                alt="billboard image"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const page = () => {
  return (
    <>
      <Content />
      <Pricing />
      <Servicespage />
      <Calltoaction />
    </>
  );
};
export default page;
