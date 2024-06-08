import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
