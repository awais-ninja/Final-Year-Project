import Price from "@/components/pricing";
import Header from "@/components/header/Header";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Accomplishments from "@/components/accomplishments";
import Graph from "@/components/graph";
export default function Home() {
  return (
    <>
      <Header />
      <section className="px-14 mt-24">
        <Services />
        <Price />
        <Testimonials />
        <Accomplishments />
        <Graph />
      </section>
    </>
  );
}
