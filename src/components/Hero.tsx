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
    <section id="hero" className="snap-section bg-tertiary flex items-center justify-center pt-20 md:pt-24 xl:pt-32 overflow-hidden px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 blur-[80px] md:blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-16 px-4 z-10 w-full mb-10 md:mb-0">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-2 md:mb-4 inline-block px-4 md:px-6 py-1 md:py-2 bg-secondary/10 border-2 border-secondary rounded-full font-heading text-secondary text-base md:text-xl"
          >
            THE OCEAN'S GENTLEMAN
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl sm:text-7xl md:text-[10rem] font-heading text-white leading-[0.85] mb-6 md:mb-8"
            style={{ 
              textShadow: "4px 4px 0px #007BFF",
              WebkitTextStroke: "1.5px #fff"
            }}
          >
            FINN
          </motion.h1>

          <div className="bg-tertiary/80 ad-border rounded-full p-2 md:p-3 flex items-center justify-between mb-8 md:mb-10 shadow-[4px_4px_0_0_#007BFF] md:shadow-[8px_8px_0_0_#007BFF] max-w-xl mx-auto md:mx-0 backdrop-blur-md">
            <div className="flex items-center gap-2 pl-2 md:pl-4 overflow-hidden">
               <span className="font-heading text-sm md:text-xl text-secondary shrink-0">CA:</span>
               <span className="font-mono text-[10px] sm:text-xs md:text-base text-white/80 truncate max-w-[120px] sm:max-w-none lowercase">{CONTRACT_ADDRESS}</span>
            </div>
            <button 
              onClick={copyToClipboard}
              className="ad-border bg-secondary text-black font-heading px-4 md:px-6 py-1 md:py-2 text-sm md:text-lg rounded-full hover:bg-white hover:text-black transition-all shadow-[2px_2px_0_0_#007BFF] md:shadow-[4px_4px_0_0_#007BFF] active:shadow-none translate-x-[-1px] translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] shrink-0"
            >
              COPY
            </button>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            {[
              { icon: <Wallet size={20} />, link: "https://pump.fun/" },
              { icon: <Send size={20} />, link: "https://t.me/finnnonmemes" },
              { icon: <Globe size={20} />, link: "https://dexscanner.com/" },
              { icon: <Globe size={20} />, link: "https://x.com/finnnonmemes" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                className="w-10 h-10 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 rounded-full ad-border flex items-center justify-center text-secondary shadow-[3px_3px_0_0_#007BFF] hover:translate-y-[-4px] transition-all backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
            <button className="bg-secondary text-black font-heading ad-border rounded-[20px] md:rounded-[24px] px-6 md:px-8 py-2 md:py-2.5 text-sm md:text-lg shadow-[3px_3px_0_0_#007BFF] hover:bg-white transition-all">
              JOIN REEF
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 w-full max-w-[300px] sm:max-w-[400px] md:max-w-none flex justify-center items-center order-1 md:order-2"
        >
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="/finn_the_hammer_mascot_1774410031022.png" 
            alt="Finn the Hammer" 
            className="w-full h-auto max-h-[35vh] sm:max-h-[45vh] md:max-h-[60vh] object-contain drop-shadow-[0_0_40px_rgba(0,255,255,0.2)] filter-none"
          />
        </motion.div>
      </div>

      {/* Blue Neon Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-black/80 py-3 md:py-4 border-t-2 border-secondary/20 backdrop-blur-md">
        <div className="animate-ticker flex whitespace-nowrap text-secondary font-heading text-lg md:text-3xl tracking-[0.2em] gap-8 md:gap-12">
           {[...Array(20)].map((_, i) => (
             <span key={i} className="hover:text-white cursor-default transition-colors">$FINN THE HAMMER</span>
           ))}
        </div>
      </div>
    </section>
  );
}
