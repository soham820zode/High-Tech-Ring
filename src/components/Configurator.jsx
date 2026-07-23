import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Bitcoin, CreditCard, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const sizes = [6, 7, 8, 9, 10, 11, 12, 13];
const spectrums = [
  { id: 'magenta', name: 'Aura Magenta', color: '#FF007A' },
  { id: 'cyan', name: 'Deep Cyan', color: '#00E5FF' },
  { id: 'orange', name: 'Solar Orange', color: '#FF8A00' },
  { id: 'white', name: 'Pure White', color: '#FFFFFF' },
];

export const Configurator = () => {
  const [selectedSize, setSelectedSize] = useState(9);
  const [selectedSpectrum, setSelectedSpectrum] = useState(spectrums[1]);
  const stock = 42;

  return (
    <section className="py-24 px-6 bg-brand-deep relative z-20 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left: Product Visuals & Selectors */}
          <div className="flex-1 space-y-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-4">Forge Yours</h2>
              <p className="text-neutral-400">Configure your AURORA ONE and claim your position in the quantum loop.</p>
            </div>

            {/* Dynamic Ring Visualizer Placeholder */}
            <div className="w-full h-64 md:h-80 glass-panel rounded-3xl flex items-center justify-center relative overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-20 blur-3xl transition-colors duration-500"
                style={{ backgroundColor: selectedSpectrum.color }}
              />
              <div 
                className="w-48 h-48 rounded-full border-[15px] border-neutral-900 shadow-2xl relative transition-all duration-500 transform group-hover:scale-105"
                style={{ boxShadow: `0 0 40px ${selectedSpectrum.color}40, inset 0 0 20px rgba(0,0,0,0.8)` }}
              >
                <div 
                  className="absolute inset-[-15px] rounded-full border-2 transition-colors duration-500"
                  style={{ borderColor: selectedSpectrum.color, filter: 'blur(2px)' }}
                />
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium uppercase tracking-widest text-sm">Select Size</h3>
                <button className="text-brand-cyan text-xs underline underline-offset-4">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "h-12 rounded-xl border flex items-center justify-center font-mono transition-all",
                      selectedSize === size 
                        ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110 z-10 relative" 
                        : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Spectrum Selector */}
            <div className="space-y-4">
              <h3 className="text-white font-medium uppercase tracking-widest text-sm">Light Spectrum</h3>
              <div className="flex flex-wrap gap-4">
                {spectrums.map(spectrum => (
                  <button
                    key={spectrum.id}
                    onClick={() => setSelectedSpectrum(spectrum)}
                    className={cn(
                      "flex items-center gap-3 py-3 px-5 rounded-xl border transition-all",
                      selectedSpectrum.id === spectrum.id 
                        ? "bg-white/10 border-white/30 shadow-lg" 
                        : "bg-transparent border-white/5 hover:border-white/20"
                    )}
                  >
                    <span 
                      className="w-4 h-4 rounded-full shadow-inner block"
                      style={{ 
                        backgroundColor: spectrum.color,
                        boxShadow: `0 0 10px ${spectrum.color}80` 
                      }} 
                    />
                    <span className={selectedSpectrum.id === spectrum.id ? "text-white" : "text-neutral-400"}>
                      {spectrum.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Checkout Card */}
          <div className="lg:w-[400px]">
            <div className="sticky top-24 glass-panel rounded-3xl p-8 border border-brand-cyan/20 shadow-[0_0_50px_rgba(0,229,255,0.05)]">
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-syne font-bold text-white">AURORA ONE</h3>
                  <p className="text-neutral-400 text-sm mt-1">The Chronos Ring</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-mono text-white">$499</p>
                  <p className="text-xs text-brand-cyan mt-1 font-mono">0.0074 BTC</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Size</span>
                  <span className="text-white font-mono">{selectedSize}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Spectrum</span>
                  <span className="text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedSpectrum.color }} />
                    {selectedSpectrum.name}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-400">Shipping</span>
                  <span className="text-white">Expedited (Free)</span>
                </div>
              </div>

              <div className="bg-brand-magenta/10 border border-brand-magenta/20 rounded-lg p-3 mb-8 flex items-center justify-between">
                <span className="text-xs text-brand-magenta flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-magenta rounded-full animate-pulse" />
                  Live Stock
                </span>
                <span className="text-sm font-mono text-white">{stock} units remaining for Batch 01</span>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors group">
                  <ShoppingBag size={18} />
                  <span>Apple Pay</span>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white/5 border border-white/10 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <CreditCard size={18} />
                    <span>Card</span>
                  </button>
                  <button className="flex-1 bg-white/5 border border-white/10 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                    <Bitcoin size={18} />
                    <span>Crypto</span>
                  </button>
                </div>
              </div>
              
              <p className="text-center text-xs text-neutral-500 mt-6 mt-4">
                Secure checkout. 30-day return policy.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
