"use client";

import { motion } from "framer-motion";
import { Send, Globe } from "lucide-react";

export default function CommunitySection() {
  return (
    <section id="community" className="snap-section bg-[#020D1D] flex flex-col items-center justify-center p-4 md:p-6 pt-16 md:pt-0 gap-8 md:gap-12 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/10 blur-[100px] md:blur-[200px] rounded-full z-0 pointer-events-none" />

      <div className="z-10 text-center w-full max-w-7xl px-4 md:px-6">
        <h2 className="text-5xl sm:text-6xl md:text-[12rem] font-heading text-white leading-[0.8] mb-8 md:mb-12 drop-shadow-[8px_8px_0_#007BFF] md:drop-shadow-[15px_15px_0_#007BFF]" style={{ WebkitTextStroke: "1px #fff" }}>
           THE REEL 
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 w-full pt-4 md:pt-12">
           <div className="flex-1 w-full bg-tertiary ad-border ad-shadow rounded-[24px] md:rounded-[32px] p-2 md:p-4 overflow-hidden shadow-[8px_8px_0_0_#007BFF] md:shadow-[12px_12px_0_0_#007BFF] backdrop-blur-md">
              <div className="aspect-video w-full bg-black rounded-lg md:rounded-2xl relative border-2 border-white/10 group">
                 <video 
                   src="/FINN.mp4" 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="w-full h-full object-cover rounded-lg md:rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 bg-black/60 font-heading text-white flex justify-between items-center text-xs sm:text-lg md:text-2xl backdrop-blur-md border-t border-white/10">
                    <span className="tracking-widest">FINN_OFFICIAL.mp4</span>
                    <span className="animate-pulse flex items-center gap-2 md:gap-3 text-secondary text-[10px] md:text-xl">DEEP SEA LIVE <div className="w-2 h-2 md:w-4 md:h-4 bg-secondary rounded-full shadow-[0_0_10px_#00FFFF]" /></span>
                 </div>
              </div>
           </div>

           <div className="flex-1 text-center md:text-left pt-6 md:pt-0">
              <h3 className="text-4xl sm:text-5xl md:text-8xl text-white font-heading leading-[0.9] mb-6 md:mb-8">
                JOIN THE <span className="text-secondary drop-shadow-[0_0_10px_#00FFFF] md:drop-shadow-[0_0_20px_#00FFFF]">ABYSS</span>
              </h3>
              <p className="font-bold text-white/70 text-base md:text-2xl mb-8 md:mb-12 leading-tight md:leading-relaxed">
                WE EAT ADS. WE CRUSH DIPS. WE OWN THE REEF. JOIN THE GENTLEMAN SHARKS AND TAKE YOUR PLACE IN THE DEEP. 
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-sm mx-auto md:mx-0">
                 <a href="https://t.me/finnnonmemes" className="ad-button bg-secondary text-black flex items-center justify-center gap-2 md:gap-4 py-3 md:py-6 text-sm md:text-2xl shadow-[4px_4px_0_0_#007BFF] md:shadow-[8px_8px_0_0_#007BFF] hover:bg-white hover:scale-105 transition-all">
                    <Send className="w-5 h-5 md:w-7 md:h-7 shrink-0" /> TELEGRAM
                 </a>
                 <a href="https://x.com/finnnonmemes" className="ad-button bg-white text-black flex items-center justify-center gap-2 md:gap-4 py-3 md:py-6 text-sm md:text-2xl shadow-[4px_4px_0_0_#007BFF] md:shadow-[8px_8px_0_0_#007BFF] hover:bg-secondary hover:scale-105 transition-all">
                    <Globe className="w-5 h-5 md:w-7 md:h-7 shrink-0" /> TWITTER
                 </a>
              </div>
           </div>
        </div>
      </div>

      <footer className="absolute bottom-4 md:bottom-8 left-0 w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 font-heading text-base md:text-2xl">
         <span className="tracking-widest">FINN THE HAMMER © 2024</span>
         <div className="flex gap-6 md:gap-12">
            <a href="#" className="hover:text-secondary transition-colors underline underline-offset-4 md:underline-offset-8 decoration-1 md:decoration-2">DEX</a>
            <a href="#" className="hover:text-secondary transition-colors underline underline-offset-4 md:underline-offset-8 decoration-1 md:decoration-2">CHART</a>
            <a href="#" className="hover:text-secondary transition-colors underline underline-offset-4 md:underline-offset-8 decoration-1 md:decoration-2">CA</a>
         </div>
      </footer>
    </section>
  );
}
