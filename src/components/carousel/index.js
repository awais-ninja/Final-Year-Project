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

const Index = () => {
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
    >
      <SwiperSlide className="h-full">
        <div className="h-full w-full sm:w-4/5 md:w-3/5 flex items-center overflow-hidden px-4 sm:px-12 md:px-24">
          <Image
            src={Image1}
            className="absolute top-0 left-0 object-cover -z-10"
            layout="fill"
            objectFit="cover"
          />
          <div className="space-y-4 bg-slate-600 p-4 sm:p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold hidden sm:block">
              Optimize Your Supply Chain.
            </h1>
            <p className="text-sm sm:text-base md:text-lg hidden sm:block">
              Next Level of Transportation.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-full sm:w-4/5 md:w-3/5 flex items-center overflow-hidden px-4 sm:px-12 md:px-24">
          <Image
            src={Image2}
            className="absolute top-0 left-0 object-cover -z-10"
            layout="fill"
            objectFit="cover"
          />
          <div className="space-y-4 bg-slate-600 p-4 sm:p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold hidden sm:block">
              All your Freight Problems Answered
            </h1>
            <p className="text-sm sm:text-base md:text-lg hidden sm:block">
              Moving things from point A to point B.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-full sm:w-4/5 md:w-3/5 flex items-center overflow-hidden px-4 sm:px-12 md:px-24">
          <Image
            src={Image1}
            className="absolute top-0 left-0 object-cover -z-10"
            layout="fill"
            objectFit="cover"
          />
          <div className="space-y-4 bg-slate-600 p-4 sm:p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold hidden sm:block">
              Control Of Your Moving
            </h1>
            <p className="text-sm sm:text-base md:text-lg hidden sm:block">
              Optimize Processes and Maximize Customer Satisfaction.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full w-full sm:w-4/5 md:w-3/5 flex items-center overflow-hidden px-4 sm:px-12 md:px-24">
          <Image
            src={Image2}
            className="absolute top-0 left-0 object-cover -z-10"
            layout="fill"
            objectFit="cover"
          />
          <div className="space-y-4 bg-slate-600 p-4 sm:p-8 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 saturate-150 border border-gray-100">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold hidden sm:block">
              Moving & Logistics to Another Level
            </h1>
            <p className="text-sm sm:text-base md:text-lg hidden sm:block">
              Proven Methodology for Engaging Customers.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Index;
