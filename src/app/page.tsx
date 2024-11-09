import Aboutsec from "@/components/About";
import Hero from "../components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Services/>
      <Contact/>
      <Aboutsec/>
      <Footer/>
    </div>
  );
}
