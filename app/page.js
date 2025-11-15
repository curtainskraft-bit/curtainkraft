import Navbar from "./Componenets/Navbar";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import CallButton from "./Componenets/CallButton";
import HeroSection from "./Componenets/HeroSection";
import AboutSection from "./Componenets/AboutSection";
import Services from "./Componenets/Services";
import GetInTouch from "./Componenets/GetinTouch";
import Portfolio from "./Componenets/Portfolio";
import Blogs from "./Componenets/Blogs";
import Testimonials from "./Componenets/Testimonials";
import LocationMap from "./Componenets/LocationMap";
import Footer from "./Componenets/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar className="absolute top-0 z-10 w-screen" />
        <WhatsAppButton />
        <CallButton />
        <HeroSection />
        <AboutSection />
        <Services />
        <GetInTouch />
        <Portfolio />
        <Blogs />
        <Testimonials />
         <div className="bg-[#f5ede5]">
          <LocationMap />
          <Footer />

         </div>

    </main>

    </>
  );
}