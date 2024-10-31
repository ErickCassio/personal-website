import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    // Main container with scroll effect and app styling
    <div class="scroll-container app">
      {/* Navbar component for navigation links */}
      <Navbar />

      {/* Home section, occupying full screen height on small screens */}
      <section className="page-block sm:h-screen" id="home">
        <Home />
      </section>

      {/* About section, occupying full screen height on small screens */}
      <section className="page-block sm:h-screen" id="about">
        <About />
      </section>

      {/* Projects section, occupying full screen height on small screens */}
      <section className="page-block sm:h-screen" id="projects">
        <Projects />
      </section>

      {/* Contacts section, occupying full screen height on small screens */}
      <section className="page-block sm:h-screen" id="contact">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
