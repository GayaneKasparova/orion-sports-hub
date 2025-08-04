import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import Shop from "@/components/Shop";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Trainers />
      <Shop />
      <Packages />
      <Footer />
    </div>
  );
};

export default Index;
