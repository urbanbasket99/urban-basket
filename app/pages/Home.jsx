import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import BestSelling from "../components/BestSelling";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import OffersBanner from "../components/OffersBanner";
import Categories from "../components/Categories";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import axios from "axios";

export default function Home() {
  return (
    <div>
      <Navbar />
           <Hero />
       <OffersBanner />
       <Categories />
      <CategoryCards />
            <BestSelling />
            <Reviews />
            <WhyChooseUs />
      <Footer />
      <WhatsAppButton />
      
    </div>
  );
}
