import React from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Wifi, Brain, Diamond } from 'lucide-react';
import { cn } from '../lib/utils';

const BentoCard = ({ className, title, description, icon: Icon, delay, glowColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between hover:border-white/20 transition-colors",
        className
      )}
    >
      <div 
        className="absolute -inset-10 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" 
        style={{ backgroundColor: glowColor }}
      />
      
      <div className="relative z-10 flex items-start justify-between mb-8">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
          <Icon className="text-white" size={24} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-syne font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const SpecificationsGrid = () => {
  return (
    <section className="py-32 px-6 bg-brand-deep relative z-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-4">Uncompromising Specs</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">Engineered without compromises, combining power and intelligence in a minimal form factor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1 (Large, spans 2 columns) */}
          <BentoCard 
            className="md:col-span-2"
            title="7 Days Continuous Power"
            description="High-density micro-battery ensures you never miss a beat. Recharges fully in 45 minutes via the included Wireless Magnetic Dock."
            icon={BatteryCharging}
            delay={0.1}
            glowColor="#00E5FF"
          />
          
          {/* Card 2 */}
          <BentoCard 
            className="md:col-span-1"
            title="Seamless Connectivity"
            description="Bluetooth 5.4 Ultra-Low Energy & built-in NFC Payment capabilities."
            icon={Wifi}
            delay={0.2}
            glowColor="#FF007A"
          />

          {/* Card 3 */}
          <BentoCard 
            className="md:col-span-1"
            title="Neural AI Engine"
            description="Adaptive sleep & recovery forecasting model that learns your unique physiology."
            icon={Brain}
            delay={0.3}
            glowColor="#FF8A00"
          />

          {/* Card 4 (Spans 2 columns) */}
          <BentoCard 
            className="md:col-span-2 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center"
            title="Aerospace Materials"
            description="Forged from Grade 5 Titanium with a Sapphire Glass Coating to withstand extreme conditions while remaining feather-light."
            icon={Diamond}
            delay={0.4}
            glowColor="#FFFFFF"
          />
        </div>
      </div>
    </section>
  );
};
