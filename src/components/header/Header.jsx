import Carousel from "@/components/carousel";
import QuotationForm from "./QuotationForm";

const index = () => {
  return (
    <section className="mt-4">
      <div className="px-0 md:px-14">
        <div className="grid grid-cols-12 md:space-x-4 space-y-14 md:space-y-0">
          <div className="col-span-12 md:col-span-6 rounded-md bg-slate-200 overflow-hidden">
            <Carousel />
          </div>
          <div className="col-span-12 md:col-span-6 bg-slate-200 rounded-md p-8 m-8 overflow-hidden">
            <QuotationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
