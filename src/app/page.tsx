"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import Marquee from "../components/Marquee";
import Passes from "../components/Passes";
import Ritual from "../components/Ritual";
import Editorial from "../components/Editorial";
import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/Footer";

export default function Home() {
  const [selectedPass, setSelectedPass] = useState<string>("Essential");

  const handleSelectPass = (passTitle: string) => {
    setSelectedPass(passTitle);
  };

  return (
    <>
      {/* Luxury Global Header Navigation */}
      <Navbar />

      <main id="app-main-content">
        {/* Modernist Radial Glow Hero Intro Section */}
        <Hero />

        {/* Brand Core Ethics manifesto Section */}
        <Manifesto />

        {/* Endless Kinetic Running Marquee Track */}
        <Marquee />

        {/* Club Tiers & Passes Selection Cards */}
        <Passes onSelectPass={handleSelectPass} />

        {/* Interactive Dynamic Training Spaces Grid */}
        <Ritual />

        {/* Floating Poster Transformation Editorial Gallery */}
        <Editorial />

        {/* Lead Application Registration & Ticketing Form Console */}
        <ApplicationForm selectedPass={selectedPass} />

        {/* Brand Premium Footer */}
        <Footer />
      </main>
    </>
  );
}
