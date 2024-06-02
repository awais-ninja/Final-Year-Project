import Carousel from "@/components/carousel";
import QuotationForm from "./QuotationForm";

const index = () => {
  return (
    <section className="mt-4">
      <div className="px-14">
        <div className="grid grid-cols-12 space-x-4 ">
          <div className="col-span-8 rounded-md bg-slate-200 overflow-hidden">
            <Carousel />
          </div>
          <div className="col-span-4 bg-slate-200 rounded-md p-8 overflow-hidden">
            <QuotationForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default index;
