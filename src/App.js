import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import { Memories } from "./components/Memories";
import { Leaders } from "./components/Leaders";
import { Team } from "./components/Team";
import { CommentSection } from "./components/CommentSection";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";
import Single_Event from "./components/Single_Event";

// Scroll to section if hash is present
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection />
      <div className="App overflow-x-hidden">
        <Routes>
          {/* Route for the landing page with all components */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div id="hero"><Hero /></div>
                <div id="about"><AboutUs /></div>
                <div id="events"><Events /></div>
                <div id="memories"><Memories /></div>
                <div id="leaders"><Leaders /></div>
                <div id="team"><Team /></div>
                <div id="comments"><CommentSection /></div>
                <div id="sponsors"><Sponsors /></div>
                <Footer />
              </>
            }
          />

          {/* Route for the single event page */}
          <Route path="/event/:id" element={<>
            <Navbar />
            <Single_Event />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;