"use client";

import { motion } from "framer-motion";

export default function SectionAbout() {
  const popups = [
    { text: "FINN -90%", color: "bg-primary", x: "10%", y: "20%" },
    { text: "YOU WON!", color: "bg-secondary text-black", x: "80%", y: "10%" },
    { text: "BUY NOW", color: "bg-tertiary", x: "15%", y: "60%" },
    { text: "CLICK HERE", color: "bg-white text-black", x: "75%", y: "40%" },
    { text: "REEF", color: "bg-primary", x: "40%", y: "5%" },
  ];

  return (
    <section id="about" className="snap-section bg-[#020D1D] flex flex-col md:flex-row items-center justify-center p-6 gap-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="flex-1 relative h-full flex items-center justify-center pt-24 z-10 w-full max-w-[600px]">
        {popups.map((pop, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className={`absolute ${pop.color} px-8 py-3 ad-border ad-shadow font-heading text-2xl z-20 hidden md:block rounded-xl`}
            style={{ left: pop.x, top: pop.y }}
            animate={{ y: [0, -15, 0] }}
            transition={{ delay: i * 0.2, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {pop.text}
          </motion.div>
        ))}

        <motion.div 
          className="relative z-10 w-full flex justify-center"
          initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
           <motion.img 
             animate={{ x: [0, 10, 0], y: [0, -20, 0] }}
             transition={{ duration: 5, repeat: Infinity }}
             src="/finn_the_hammer_mascot_1774410031022.png" 
             alt="Finn eating ads" 
             className="w-full max-h-[50vh] md:max-h-[60vh] object-contain drop-shadow-[0_0_80px_rgba(0,123,255,0.4)]"
           />
           <div className="absolute top-0 right-0 ad-border bg-white p-3 ad-shadow rotate-12 -translate-y-4">
              <span className="font-heading text-primary text-2xl">BITE!</span>
           </div>
        </motion.div>
      </div>

      <div className="flex-1 max-w-2xl px-6 md:px-0 z-20 text-center md:text-left">
        <h2 className="text-6xl md:text-8xl mb-8 leading-[0.85] text-white font-heading" style={{ WebkitTextStroke: "2px #fff", textShadow: "4px 4px 0px #007BFF" }}>
          THE HAMMER <br/> OF THE ABYSS
        </h2>
        
        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6 text-white/90">
          FINN ISN'T JUST ANOTHER PROJECT — IT'S A DOMINATION. BORN IN THE DEEPEST TRENCH AND POWERED BY COMMUNITY ENERGY.
        </p>
        
        <p className="text-xl md:text-2xl font-bold leading-relaxed mb-10 text-white/70">
          THIS HAMMERHEAD IS ON A MISSION TO RECLAIM THE OCEAN. NO TAXES, NO BULLSHIT, JUST PURE PUMP ENERGY.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
           <a href="https://whitepaper.link" className="ad-button bg-tertiary inline-flex items-center gap-3 py-5 text-2xl border-white shadow-[8px_8px_0_0_#007BFF] hover:bg-secondary hover:text-black">
              WHITEPAPER <span className="material-symbols-outlined">description</span>
           </a>
           <button className="ad-button bg-secondary text-black py-5 px-10 text-2xl border-white shadow-[8px_8px_0_0_#007BFF] hover:bg-white transition-all">
              JOIN FAMILY
           </button>
        </div>
      </div>
    </section>
  );
}
