import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeadPopup from "./components/LeadPopup";
import ThankYou from "./pages/ThankYou";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      <Footer />

      {/* Lead Popup */}
      {showPopup && (
        <LeadPopup
          onClose={() => setShowPopup(false)}
        />
      )}
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;