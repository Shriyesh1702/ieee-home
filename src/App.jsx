import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initLenis } from "./lib/lenis";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import { useEffect } from "react";
import MembershipSocieties from "./components/MembershipSocieties/MembershipSocities";
import Collaborators from "./components/Collaboratos/Collaborators";
import Footer from "./components/Footer/Footer";

function Landing() {
  return (
    <>
      <Home />
      <About />
      <MembershipSocieties />
      <Collaborators />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    initLenis();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
