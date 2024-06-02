import React from "react";
import ServiceCard from "./ServiceCard";

const mockData = [
  {
    id: 1,
    title: "Transit Control",
    icon: "truck",
    description:
      "SwiftLink provides efficient transit control by optimizing vehicle, goods, and passenger movements. We coordinate schedules, monitor traffic, and deliver real-time updates to reduce congestion and enhance travel experiences.",
  },
  {
    id: 2,
    title: "Moving Services",
    icon: "train-freight-front",
    description:
      "SwiftLink provides efficient moving services by optimizing vehicle, goods, and passenger movements. We coordinate schedules, monitor traffic, and deliver real-time updates to ensure smooth and timely relocations",
  },
  {
    id: 3,
    title: "Secure Payments",
    icon: "currency-dollar",
    description:
      "SwiftLink provides secure payment services, ensuring safe, reliable, and efficient transactions. We prioritize your financial security with advanced encryption and real-time fraud monitoring.",
  },
  {
    id: 4,
    title: "Labour Services",
    icon: "person-fill",
    description:
      "SwiftLink provides efficient labor services by optimizing workforce deployment and scheduling. We ensure timely, reliable, and skilled labor solutions to meet your needs effectively.",
  },
  {
    id: 5,
    title: "Logistics Solutions",
    icon: "graph-up-arrow",
    description:
      "Providing an independent advice and identifying the right fit for you. Services are sourced and procured based on solution specifications provided by our Supply Chain Solution.",
  },
  {
    id: 6,
    title: "Shipping Protocols",
    icon: "airplane-engines",
    description:
      "SwiftLink provides robust shipping protocols, ensuring secure, efficient, and timely delivery of goods. We manage schedules, monitor shipments, and provide real-time tracking to guarantee reliable and smooth logistics operations.",
  },
];

const Index = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {mockData.map((service) => (
        <ServiceCard key={service.id} title={service.title} icon={service.icon}>
          {service.description}
        </ServiceCard>
      ))}
    </div>
  );
};

export default Index;
