import Panels from "@/components/Panels";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Bmi from "@/components/Bmi";
const LandingPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-16">
        <Panels />
        <Bmi/>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
