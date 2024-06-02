"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image1 from "@/static/images/login.jpg";
import Image2 from "@/static/images/register.jpg";

const index = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      slidesPerView={1}
      navigation={true}
      draggable={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      effect="coverflow"
      coverflowEffect={{ depth: 250, rotate: 50, slideShadows: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="h-full"
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="h-full">
        <div className="h-full w-3/5 flex items-center overflow-hidden px-24">
          <Image
            src={Image1}
            className="absolute top-0 left-0 object-cover -z-10"
          />
          <div className="space-y-4 bg-slate-600 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-6xl font-bold">Optimize Your Supply Chain.</h1>
            <p className="text-lg">Next Level of Transportation.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-3/5 flex items-center overflow-hidden px-24">
          <Image
            src={Image2}
            className="absolute top-0 left-0 object-cover -z-10"
          />
          <div className="space-y-4 bg-slate-600 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-7xl font-bold">
              All your Freight Problems Answered
            </h1>
            <p className="text-lg">Moving things from point A to point B.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-3/5 flex items-center overflow-hidden px-24">
          <Image
            src={Image1}
            className="absolute top-0 left-0 object-cover -z-10"
          />
          <div className="space-y-4 bg-slate-600 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-7xl font-bold">Control Of Your Moving</h1>
            <p className="text-lg">
              Optimize Processes and Maximize Customer Statisfication.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-3/5 flex items-center overflow-hidden px-24">
          <Image
            src={Image2}
            className="absolute top-0 left-0 object-cover -z-10"
          />
          <div className="space-y-4 bg-slate-600 p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-7xl font-bold">
              Moving & Logistics to Another Level
            </h1>
            <p className="text-lg">
              Proven Methodology for Engaging Customers.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default index;
