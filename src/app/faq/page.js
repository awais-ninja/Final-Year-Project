"use client";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "What types of service does SwiftLink provide?",
      answer:
        "SwuftLink provides a number of transport services to customers around the world. Please refer to our Services page for more information.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    },
    {
      question: "Do you service my industry?",
      answer:
        "Yes. Our professional logistics team is proud to work with companies both large and small. We can provide you with scheduled service or a one-off shipment. Some of the companies we service include mechanical, industrial, trade show transportation, produce, food and beverage, aerospace and defense industry, plastic, automotive, pharmaceutical, sensitive deliveries, white-glove transportation. ",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Payment terms/options are available upon approval for your freight shipping account with us.  We also do accept, Visa, MasterCard, Discover and AMEX.",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-teal-800 sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {questions.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-400 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleQuestion(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {item.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${
                    openQuestion === index ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                style={{ display: openQuestion === index ? "block" : "none" }}
                className="px-4 pb-5 sm:px-6 sm:pb-6"
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 textbase mt-9">
          Still have questions?
          <Link href="./contact"> Contact our support</Link>
        </p>
      </div>
    </section>
  );
};

export default page;
