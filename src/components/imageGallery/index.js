import React from "react";
import Image from "next/image";
import PIC1 from "@/static/images/placeholders/pic-1.jpg";
import PIC2 from "@/static/images/placeholders/pic-2.jpg";
import PIC3 from "@/static/images/placeholders/pic-3.jpg";
import PIC4 from "@/static/images/placeholders/pic-4.jpg";
const index = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <Image
          src={PIC1}
          alt="Image 1"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
        <Image
          src={PIC2}
          alt="Image 2"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
        <Image
          src={PIC3}
          alt="Image 3"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
        <Image
          src={PIC4}
          alt="Image 4"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
      </div>
    </>
  );
};

export default index;
