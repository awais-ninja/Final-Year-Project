import LayoutImage from "./LayoutImage";
import BackButton from "@/components/BackButton";

const layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 h-full">
        <div className="col-span-5 h-full relative flex items-center justify-center overflow-hidden">
          <LayoutImage />
          <div className="h-full w-full -z-0 bg-gradient-to-l from-black via-transparent to-transparent to-15% opacity-35"></div>
        </div>
        <div className="col-span-3 h-full pattern-bg relative">
          <BackButton />
          <div className="p-8 h-full flex items-center">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default layout;
