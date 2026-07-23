import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';

// A stylized placeholder for the Chronos Ring
const ChronosRing = () => {
  const ringRef = useRef();

  useFrame((state) => {
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 0.5;
    ringRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ringRef} scale={1.5}>
        <torusGeometry args={[1.5, 0.4, 64, 128]} />
        <MeshTransmissionMaterial 
          backside 
          thickness={0.5} 
          roughness={0.1} 
          transmission={1} 
          ior={1.5} 
          chromaticAberration={0.1}
          color="#080A0F"
          emissive="#00E5FF"
          emissiveIntensity={0.2}
        />
        
        {/* Inner glow band */}
        <mesh>
          <torusGeometry args={[1.45, 0.1, 32, 64]} />
          <meshBasicMaterial color="#FF007A" />
        </mesh>
      </mesh>
    </Float>
  );
};

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center pt-20">
      {/* Background WebGL / Glow effects */}
      <div className="absolute inset-0 z-0 bg-brand-deep">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-magenta/20 rounded-full blur-[100px] mix-blend-screen opacity-40 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-brand-amber/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 opacity-80 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00E5FF" />
          <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#FF007A" />
          <ChronosRing />
          <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#FF8A00" />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tight leading-tight"
        >
          FORGING THE <br />
          <span className="text-glow-cyan text-brand-cyan">FUTURE'S LOOP</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl font-light"
        >
          Real-time biometric intelligence wrapped in ultra-durable titanium alloy.
        </motion.p>
      </div>

      {/* Floating Cards (Bento Glass Widgets) */}
      <div className="absolute bottom-10 left-6 md:left-20 z-30 pointer-events-auto hidden md:block">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-panel p-6 rounded-2xl w-72 flex flex-col gap-4 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h3 className="text-sm font-semibold text-brand-cyan uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" /> Live Feed
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-neutral-400 text-sm">Heart Rate</span>
              <span className="text-white font-mono font-medium">72 bpm</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-neutral-400 text-sm">Stress Index</span>
              <span className="text-white font-mono font-medium">2.1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-400 text-sm">Energy Level</span>
              <span className="text-brand-magenta font-mono font-medium text-glow-magenta">89%</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-6 md:right-20 -translate-y-1/2 z-30 pointer-events-auto hidden md:block">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-panel p-6 rounded-2xl w-64 flex flex-col items-center text-center gap-4 group"
        >
          <div className="w-16 h-16 rounded-full border border-brand-magenta/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(255,0,122,0.2)]">
            <div className="absolute inset-0 rounded-full border-t-2 border-brand-magenta animate-spin-slow" />
            <div className="w-8 h-8 bg-brand-magenta/20 rounded-full flex items-center justify-center">
              <span className="w-3 h-3 bg-brand-magenta rounded-full shadow-[0_0_10px_#FF007A]" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-syne font-bold text-lg">Quantum Sync</h3>
            <p className="text-neutral-400 text-xs mt-1">Sensor connectivity optimal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
