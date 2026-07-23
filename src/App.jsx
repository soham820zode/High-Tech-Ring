import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProductExplorer } from './components/ProductExplorer';
import { SpecificationsGrid } from './components/SpecificationsGrid';
import { Configurator } from './components/Configurator';
import { Footer } from './components/Footer';

function App() {
  const navItems = [
    { name: "The Ring", link: "#hero" },
    { name: "Biometric Intelligence", link: "#explorer" },
    { name: "Quantum Sync", link: "#specs" },
    { name: "Portal", link: "#configurator" },
  ];

  return (
    <div className="min-h-screen bg-brand-deep text-white font-sans selection:bg-brand-cyan selection:text-black">
      <Navigation navItems={navItems} />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="explorer">
          <ProductExplorer />
        </div>
        
        <div id="specs">
          <SpecificationsGrid />
        </div>
        
        <div id="configurator">
          <Configurator />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
