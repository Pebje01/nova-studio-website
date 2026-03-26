import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import InstructorsCTA from "@/components/InstructorsCTA";
import FullWidthImage from "@/components/FullWidthImage";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Memberships from "@/components/Memberships";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sessions />
        <InstructorsCTA />
        <FullWidthImage />
        <Reviews />
        <Gallery />
        <Memberships />
        <Classes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
