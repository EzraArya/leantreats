import AboutUs from "./components/sections/aboutus";
import FAQ from "./components/sections/faq";
import Header from "./components/sections/header";
import Landing from "./components/sections/Landing";
import Menu from "./components/sections/menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <AboutUs />
      <Menu />
      <FAQ />
    </div>    
  );
}
