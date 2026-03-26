"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("CCZ68uhJMcQSzkuj5TeJBM6tAmQvMGacnaBRyBwupump");
    alert("Contract Address Copied to Clipboard!");
  };

  return (
    <nav className="fixed top-2 md:top-6 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl z-[100] bg-tertiary/90 ad-border rounded-[20px] md:rounded-[24px] px-4 md:px-8 py-2 md:py-3 flex justify-between items-center shadow-lg backdrop-blur-xl border-secondary/30">
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <div className="w-8 h-8 md:w-12 md:h-12 bg-secondary rounded-full ad-border flex items-center justify-center overflow-hidden shadow-[2px_2px_0_0_#007BFF] md:shadow-[4px_4px_0_0_#007BFF]">
          <img src="/finn_the_hammer_mascot_1774410031022.png" alt="Finn" className="w-full h-full object-cover scale-110" />
        </div>
        <span className="font-heading text-lg md:text-3xl text-white tracking-widest">FINN</span>
      </div>

      <div className="hidden lg:flex items-center gap-10 font-heading text-xl text-white/70 tracking-tight">
        <a href="#hero" className="hover:text-secondary hover:scale-105 transition-all">MEET FINN</a>
        <a href="#about" className="hover:text-secondary hover:scale-105 transition-all">ABOUT</a>
        <a href="#howtobuy" className="hover:text-secondary hover:scale-105 transition-all">HOW TO BUY</a>
        <a href="#tokenomics" className="hover:text-secondary hover:scale-105 transition-all">OCEANOMICS</a>
        <a href="#community" className="hover:text-secondary hover:scale-105 transition-all">COMMUNITY</a>
      </div>

      <button 
        onClick={copyToClipboard}
        className="ad-button bg-secondary text-black py-1.5 md:py-2 px-4 md:px-8 text-sm md:text-xl border-tertiary shadow-[2px_2px_0_0_#007BFF] md:shadow-[4px_4px_0_0_#007BFF] hover:bg-white shrink-0"
      >
        BUY $FINN
      </button>
    </nav>
  );
}
