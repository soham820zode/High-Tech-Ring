import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../lib/utils";

export const Navigation = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto glass-panel rounded-full z-[5000] pr-2 pl-6 py-2 items-center justify-center space-x-6",
          className
        )}
      >
        <div className="flex items-center gap-2 pr-4 border-r border-white/10">
          <span className="font-syne font-bold text-xl tracking-wider text-white">AURORA</span>
          <span className="text-[10px] uppercase tracking-widest bg-brand-magenta/20 text-brand-magenta px-2 py-0.5 rounded-full border border-brand-magenta/30 shadow-[0_0_10px_rgba(255,0,122,0.3)]">21.dev Ed</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-300 items-center flex space-x-1 hover:text-white transition-colors text-sm font-medium tracking-wide hover:text-glow-cyan"
              )}
            >
              <span>{navItem.name}</span>
            </a>
          ))}
        </div>
        
        <button className="relative group overflow-hidden bg-white text-black font-semibold text-sm px-6 py-2 rounded-full transition-transform hover:scale-105 active:scale-95">
          <span className="relative z-10">Reserve $499</span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 hidden group-hover:block absolute top-2 left-6">Reserve $499</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
