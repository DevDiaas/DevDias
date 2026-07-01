import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { AudioProvider } from "./context/AudioContext";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <AudioProvider>
      <LanguageProvider>
        {/* Immersive Dark Cosmic Container */}
        <div className="relative min-h-screen text-white bg-transparent font-sans antialiased selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
          
          {/* Real-time 3D Particle Wave Field */}
          <ParticleBackground />

          {/* Global Premium Blur Header Navbar */}
          <Navbar />

          {/* Layout Sections */}
          <main className="relative z-10 w-full">
            
            {/* Hero Section containing 3D Interactive Tech Sphere */}
            <Hero />

            {/* About Section featuring glass-framed Portrait & Narrative */}
            <About />

            {/* Featured Projects with Dynamic Tech filters */}
            <Projects />

            {/* Core Technical Expertise Cards with custom visual glowing level bars */}
            <Skills />

            {/* In-depth Experience highlights with Tag indicators */}
            <Experience />

            {/* Interactive Form Contact Area */}
            <Contact />

          </main>

          {/* Brand footer details */}
          <Footer />
          
        </div>
      </LanguageProvider>
    </AudioProvider>
  );
}
