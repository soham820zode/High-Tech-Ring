import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';

const FRAME_COUNT = 120;
const FRAME_URL_PREFIX = '/frames/Product_assembly_to_exploded_view_202607232200_frames/frame_';

const preloadImages = () => {
  const images = [];
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    const frameIndex = i.toString().padStart(3, '0');
    img.src = `${FRAME_URL_PREFIX}${frameIndex}.png`;
    images.push(img);
  }
  return images;
};

export const ProductExplorer = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images on mount
  useEffect(() => {
    const loadedImages = preloadImages();
    // Wait for the first image to load to trigger an initial draw
    loadedImages[0].onload = () => {
      setImages(loadedImages);
      setLoaded(true);
    };
  }, []);

  // Initial draw
  useEffect(() => {
    if (loaded && canvasRef.current && images.length > 0) {
      const ctx = canvasRef.current.getContext('2d');
      const img = images[0];
      
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;

      // Function to draw image covering the canvas (like object-fit: cover)
      const drawCover = () => {
        const cw = canvasRef.current.width;
        const ch = canvasRef.current.height;
        const iw = img.width;
        const ih = img.height;
        
        const hRatio = cw / iw;
        const vRatio = ch / ih;
        const ratio = Math.max(hRatio, vRatio);
        
        const cx = (cw - iw * ratio) / 2;
        const cy = (ch - ih * ratio) / 2;
        
        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, 0, 0, iw, ih, cx, cy, iw * ratio, ih * ratio);
      };

      drawCover();

      // Handle window resize
      const handleResize = () => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-draw current frame based on scroll position
        const progress = scrollYProgress.get();
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
        const currentImg = images[frameIndex];
        if (currentImg && currentImg.complete) {
           const ctx = canvasRef.current.getContext('2d');
           const cw = canvasRef.current.width;
           const ch = canvasRef.current.height;
           const iw = currentImg.width;
           const ih = currentImg.height;
           const hRatio = cw / iw;
           const vRatio = ch / ih;
           const ratio = Math.max(hRatio, vRatio);
           const cx = (cw - iw * ratio) / 2;
           const cy = (ch - ih * ratio) / 2;
           ctx.clearRect(0, 0, cw, ch);
           ctx.drawImage(currentImg, 0, 0, iw, ih, cx, cy, iw * ratio, ih * ratio);
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [loaded, images, scrollYProgress]);

  // Handle scroll progress mapping to frames
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!loaded || !canvasRef.current || images.length === 0) return;

    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
    const img = images[frameIndex];

    if (img && img.complete) {
      const ctx = canvasRef.current.getContext('2d');
      const cw = canvasRef.current.width;
      const ch = canvasRef.current.height;
      const iw = img.width;
      const ih = img.height;
      
      const hRatio = cw / iw;
      const vRatio = ch / ih;
      const ratio = Math.max(hRatio, vRatio);
      
      const cx = (cw - iw * ratio) / 2;
      const cy = (ch - ih * ratio) / 2;
      
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, iw, ih, cx, cy, iw * ratio, ih * ratio);
    }
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-brand-deep">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* The canvas that plays the image sequence */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />

        {/* Text Overlay that fades in and out based on scroll */}
        <div className="relative z-10 text-center pointer-events-none mt-[60vh]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-4 drop-shadow-2xl">
              Precision Exploded
            </h2>
            <p className="text-neutral-300 max-w-lg mx-auto drop-shadow-md text-lg">
              Scroll to explore the sub-dermal engineering of the Chronos Ring.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
