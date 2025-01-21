import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Routes>
          {/* Route for the landing page with all components */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <AboutUs />
                <Events />
                <Memories />
                <Leaders />
                <Team />
                <CommentSection />
                <Sponsors />
                <Footer />
              </>
            }
          />

          {/* Route for the single event page */}
          <Route path="/event" element={<>
            <Navbar />
            <Single_Event />
            </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
