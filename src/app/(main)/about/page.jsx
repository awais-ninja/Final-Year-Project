import React from "react";
import Accomplishments from "@/components/accomplishments";
import Shipments from "@/components/aboutPage";
import ImageGallery from "@/components/imageGallery";
import Calltoaction from "@/components/calltoaction";
import Testimonials from "@/components/testimonials";

import PIC6 from "@/static/images/placeholders/pic-6.jpg";
import PIC5 from "@/static/images/placeholders/pic-5.jpg";
import BG1 from "@/static/images/placeholders/bg-1.jpg";

import Image from "next/image";

const InlineServices = () => {
  const ServiceSection = ({ imageSrc, heading, description }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Image
          src={imageSrc}
          alt="Service"
          className="w-90 h-auto mb-4 rounded-lg border-2 border-teal-500"
        />
        <h3 className="text-xl font-bold text-teal-800 mb-2">{heading}</h3>
        <p className="text-black text-center">{description}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <ServiceSection
          imageSrc={PIC5}
          heading="What We Do"
          description="From warehousing and handling to packaging and transport and distribution, our expert knowledge of each field of the logistics chain makes our offering unique."
        />
        <ServiceSection
          imageSrc={PIC6}
          heading="Our Expert Team"
          description="Our team consists of logistics experts who are dedicated to providing the best solutions for your business. We ensure that your goods are handled with care and delivered on time."
        />
        <ServiceSection
          imageSrc={PIC6}
          heading="Customer Satisfaction"
          description="We prioritize customer satisfaction above all else. Our goal is to exceed your expectations by providing reliable and efficient logistics services tailored to your specific needs."
        />
      </div>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <div>
        <main
          className="min-h-screen bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: `url('${BG1.src}')` }}
        >
          <div className="text-center bg-black bg-opacity-25 p-8 rounded-lg">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mx-auto max-w-prose">
              We have been pioneering the industry in Pakistan for 5+ years, and
              delivering value products within given timeframe, every single
              time.
            </p>
          </div>
        </main>
      </div>
      <Shipments />
      <InlineServices />
      <Accomplishments />
      <ImageGallery />
      <Testimonials />
      <Calltoaction />
    </>
  );
};

export default AboutUsPage;
