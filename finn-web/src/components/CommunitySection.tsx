"use client";

import { motion } from "framer-motion";
import { Send, Globe } from "lucide-react";

export default function CommunitySection() {
  return (
    <section id="community" className="snap-section bg-[#020D1D] flex flex-col items-center justify-center p-6 gap-12 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full z-0 pointer-events-none" />

      <div className="z-10 text-center w-full max-w-7xl px-6">
        <h2 className="text-7xl md:text-[12rem] font-heading text-white leading-[0.8] mb-12 drop-shadow-[15px_15px_0_#007BFF]" style={{ WebkitTextStroke: "2px #fff" }}>
           THE REEL 
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-16 w-full pt-12">
           <div className="flex-1 w-full bg-tertiary ad-border ad-shadow rounded-[32px] p-4 overflow-hidden shadow-[12px_12px_0_0_#007BFF] backdrop-blur-md">
              <div className="aspect-video w-full bg-black rounded-2xl relative border-2 border-white/10 group">
                 <video 
                   src="/FINN.mp4" 
                   autoPlay 
                   muted 
                   loop 
                   playsInline 
                   className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-black/60 font-heading text-white flex justify-between items-center text-sm sm:text-2xl backdrop-blur-md border-t border-white/10">
                    <span className="tracking-widest">FINN_OFFICIAL.mp4</span>
                    <span className="animate-pulse flex items-center gap-3 text-secondary">DEEP SEA LIVE <div className="w-4 h-4 bg-secondary rounded-full shadow-[0_0_10px_#00FFFF]" /></span>
                 </div>
              </div>
           </div>

           <div className="flex-1 text-center md:text-left">
              <h3 className="text-6xl md:text-8xl text-white font-heading leading-[0.9] mb-8">
                JOIN THE <span className="text-secondary drop-shadow-[0_0_20px_#00FFFF]">ABYSS</span>
              </h3>
              <p className="font-bold text-white/70 text-2xl mb-12 leading-relaxed">
                WE EAT ADS. WE CRUSH DIPS. WE OWN THE REEF. JOIN THE GENTLEMAN SHARKS AND TAKE YOUR PLACE IN THE DEEP. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <a href="https://t.me/finnnonmemes" className="ad-button bg-secondary text-black flex items-center justify-center gap-4 py-6 text-2xl shadow-[8px_8px_0_0_#007BFF] hover:bg-white hover:scale-105 transition-all">
                    <Send size={28} /> TELEGRAM
                 </a>
                 <a href="https://x.com/finnnonmemes" className="ad-button bg-white text-black flex items-center justify-center gap-4 py-6 text-2xl shadow-[8px_8px_0_0_#007BFF] hover:bg-secondary hover:scale-105 transition-all">
                    <Globe size={28} /> TWITTER
                 </a>
              </div>
           </div>
        </div>
      </div>

      <footer className="absolute bottom-8 left-0 w-full px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-heading text-2xl">
         <span className="tracking-widest">FINN THE HAMMER © 2024</span>
         <div className="flex gap-12">
            <a href="#" className="hover:text-secondary transition-colors underline underline-offset-8 decoration-2">DEX</a>
            <a href="#" className="hover:text-secondary transition-colors underline underline-offset-8 decoration-2">CHART</a>
            <a href="#" className="hover:text-secondary transition-colors underline underline-offset-8 decoration-2">CA</a>
         </div>
      </footer>
    </section>
  );
}
