import React from "react";
const index = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        <img
          src="/images/pic-1.jpg"
          alt="Image 1"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
        <img
          src="/images/pic-2.jpg"
          alt="Image 2"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
        <img
          src="/images/pic-3.jpg"
          alt="Image 3"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
        <img
          src="/images/pic-4.jpg"
          alt="Image 4"
          className="w-full sm:w-1/2 lg:w-1/4 object-cover hidden sm:block"
        />
      </div>
    </>
  );
};

export default index;
