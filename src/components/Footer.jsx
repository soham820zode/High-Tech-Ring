import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-brand-deep/80 backdrop-blur-xl mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <span className="font-syne font-bold text-xl tracking-wider text-white">AURORA</span>
            <span className="text-neutral-500 text-sm">© 2026. All rights reserved.</span>
          </div>
          
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Security Protocols</a>
            <a href="#" className="hover:text-white transition-colors">API Docs</a>
            <a href="#" className="hover:text-white transition-colors">Developer Portal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.05)]">
            <span className="text-xs text-neutral-300">Quantum Mesh Status:</span>
            <span className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
              Operational
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e] animate-pulse" />
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};
