import AboutUs from "./components/sections/aboutus";
import ContactMe from "./components/sections/contactme";
import FAQ from "./components/sections/faq";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import Landing from "./components/sections/Landing";
import Menu from "./components/sections/menu";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pt-12">
        <Landing />
        <AboutUs />
        <Menu />
        <FAQ />
        <ContactMe />
        <Footer />
      </div>
    </div>    
  );
}
