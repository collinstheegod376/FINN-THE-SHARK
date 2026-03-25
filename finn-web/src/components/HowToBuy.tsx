"use client";

import { motion } from "framer-motion";

export default function HowToBuy() {
  const steps = [
    { title: "CREATE WALLET", desc: "Download Phantom or Solflare" },
    { title: "GET SOL", desc: "Buy SOL on CEX and send to wallet" },
    { title: "GO TO PUMP.FUN", desc: "Search for $FINN or paste our CA" },
    { title: "REEF SMASH", desc: "Swap for $FINN and join the reef!" },
  ];

  return (
    <section id="howtobuy" className="snap-section bg-[#0A192F] flex flex-col items-center justify-center p-6 gap-12 overflow-hidden relative">
      <div className="absolute top-0 right-10 p-24 opacity-10 pointer-events-none">
         <span className="material-symbols-outlined text-[20rem] text-secondary">water_drop</span>
      </div>

      <div className="z-10 text-center">
        <h2 className="text-7xl md:text-[10rem] font-heading text-white leading-[0.8] mb-12 drop-shadow-[10px_10px_0_#007BFF]" style={{ WebkitTextStroke: "2px #fff" }}>
          HOW TO BUY?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
           {steps.map((step, i) => (
             <motion.div 
               key={i}
               initial={{ rotate: -5, y: 50, opacity: 0 }}
               whileInView={{ rotate: 0, y: 0, opacity: 1 }}
               transition={{ delay: i * 0.1 }}
               className="bg-[#020D1D] ad-border ad-shadow rounded-[32px] p-10 hover:scale-105 transition-all group shadow-[8px_8px_0_0_#007BFF]"
             >
                <div className="w-14 h-14 bg-secondary text-black rounded-full ad-border flex items-center justify-center font-heading text-3xl mb-8 shadow-[4px_4px_0_0_#fff]">
                   {i + 1}
                </div>
                <h3 className="text-3xl mb-4 text-white leading-tight">{step.title}</h3>
                <p className="font-bold text-white/50 text-xl leading-relaxed">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-secondary/10 to-transparent z-0 opacity-40">
         <div className="flex gap-4 animate-float h-full items-end justify-center">
             {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-64 bg-secondary/20 rounded-t-full blur-[30px]" />
             ))}
         </div>
      </div>
    </section>
  );
}
