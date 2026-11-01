/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#0e0f11] text-[#e0e0e0] flex flex-col font-sans selection:bg-[#c8f31d] selection:text-black relative">
      {/* Sticky Geekfolio Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Animated Web-Development Artwork */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onWorkTogether={() => scrollToSection('contact')}
        />

        {/* Geekfolio Star Marquee Banner */}
        <MarqueeStrip />

        {/* About Me Section */}
        <About onContactClick={() => scrollToSection('contact')} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Works / Featured Projects */}
        <Projects />

        {/* Resume & Experience Timeline */}
        <Resume />

        {/* Technical Skills Grid */}
        <Skills />

        {/* Development Approach / Process */}
        <Process />

        {/* Why Work With Me? */}
        <WhyWorkWithMe />

        {/* Contact Section */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Instant WhatsApp Button */}
      <a
        href="https://wa.me/919717679664?text=Hi%20Vivek,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp Chat with Vivek Sharma"
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#c8f31d] hover:bg-white text-black rounded-full shadow-2xl shadow-[#c8f31d]/30 hover:scale-110 transition-all duration-300 focus-visible:outline-none group"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="sr-only">Chat on WhatsApp (+91 9717679664)</span>
      </a>

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
