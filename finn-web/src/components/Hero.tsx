"use client";

import { motion } from "framer-motion";
import { Send, Globe, Wallet } from "lucide-react";

const CONTRACT_ADDRESS = "CCZ68uhJMcQSzkuj5TeJBM6tAmQvMGacnaBRyBwupump";

const copyToClipboard = () => {
  navigator.clipboard.writeText(CONTRACT_ADDRESS);
  alert("Contract Address Copied to Clipboard!");
};

export default function Hero() {
  return (
    <section id="hero" className="snap-section bg-tertiary flex items-center justify-center pt-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 px-6 z-10 w-full">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-4 inline-block px-6 py-2 bg-secondary/10 border-2 border-secondary rounded-full font-heading text-secondary text-xl"
          >
            THE OCEAN'S GENTLEMAN
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl md:text-[10rem] font-heading text-white leading-[0.85] mb-8"
            style={{ 
              textShadow: "6px 6px 0px #007BFF",
              WebkitTextStroke: "2px #fff"
            }}
          >
            FINN
          </motion.h1>

          <div className="bg-tertiary/80 ad-border rounded-full p-2 md:p-3 flex items-center justify-between mb-10 shadow-[8px_8px_0_0_#007BFF] max-w-xl mx-auto md:mx-0 backdrop-blur-md">
            <div className="flex items-center gap-2 pl-4">
              <span className="font-heading text-lg md:text-xl text-secondary">CA:</span>
              <span className="font-mono text-sm md:text-base text-white/80 truncate max-w-[150px] sm:max-w-[200px] md:max-w-none lowercase">{CONTRACT_ADDRESS}</span>
            </div>
            <button 
              onClick={copyToClipboard}
              className="ad-border bg-secondary text-black font-heading px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all shadow-[4px_4px_0_0_#007BFF] active:shadow-none translate-x-[-2px] translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]"
            >
              COPY
            </button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            {[
              { icon: <Wallet size={24} />, link: "https://pump.fun/" },
              { icon: <Send size={24} />, link: "https://t.me/finnnonmemes" },
              { icon: <Globe size={24} />, link: "https://dexscanner.com/" },
              { icon: <Globe size={24} />, link: "https://x.com/finnnonmemes" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full ad-border flex items-center justify-center text-secondary shadow-[4px_4px_0_0_#007BFF] hover:translate-y-[-4px] transition-all backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
            <button className="bg-secondary text-black font-heading ad-border rounded-[24px] px-8 py-2 shadow-[4px_4px_0_0_#007BFF] hover:bg-white transition-all">
              JOIN REEF
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 w-full max-w-[500px] md:max-w-none flex justify-center items-center"
        >
          <motion.img 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="/finn_the_hammer_mascot_1774410031022.png" 
            alt="Finn the Hammer" 
            className="w-full h-auto max-h-[50vh] md:max-h-[60vh] object-contain drop-shadow-[0_0_50px_rgba(0,255,255,0.3)] filter-none"
          />
        </motion.div>
      </div>

      {/* Blue Neon Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-black/80 py-4 border-t-2 border-secondary/20 backdrop-blur-md">
        <div className="animate-ticker flex whitespace-nowrap text-secondary font-heading text-2xl md:text-3xl tracking-[0.2em] gap-12">
           {[...Array(20)].map((_, i) => (
             <span key={i} className="hover:text-white cursor-default transition-colors">$FINN THE HAMMER</span>
           ))}
        </div>
      </div>
    </section>
  );
}
