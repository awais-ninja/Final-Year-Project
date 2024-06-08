"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <button
      onClick={onClick}
      className="group font-bold absolute top-8 left-8 text-xl block px-4 py-1.5 bg-teal-600 rounded-md border-2 border-teal-600 text-white hover:bg-transparent hover:text-teal-600 transition-all"
    >
      <span className="me-4">&#x2B05;</span>
      Go Back
    </button>
  );
};

export default BackButton;
