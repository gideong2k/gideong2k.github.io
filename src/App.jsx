import { useState } from "react";
import MenuButton from "./components/MenuButton";
import MobileMenu from "./components/MobileMenu";
import Sidebar from "./components/Sidebar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import './components/NeonEffects.css';
import Footer from "./components/Footer";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP-RIGHT MOBILE MENU BUTTON */}
      <MenuButton open={open} setOpen={setOpen} />

      {/* LEFT SLIDE-IN MOBILE MENU */}
      <MobileMenu open={open} setOpen={setOpen} />

      {/* DESKTOP FLOATING SIDEBAR */}
      <Sidebar />

      <main className="relative">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />      

        <Footer />
      </main>
    </>
  );
}

//export default App;
