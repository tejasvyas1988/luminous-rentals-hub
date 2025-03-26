
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import EquipmentCategories from '../components/home/EquipmentCategories';
import FeaturedEquipment from '../components/home/FeaturedEquipment';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EquipmentCategories />
      <FeaturedEquipment />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
