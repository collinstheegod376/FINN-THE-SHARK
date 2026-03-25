"use client";

import { motion } from "framer-motion";

export default function SectionTokenomics() {
  const stats = [
     { title: "LIQUIDITY", value: "BURNED", color: "bg-primary", x: "10%", y: "15%" },
     { title: "TAX", value: "0/0", color: "bg-secondary text-black", x: "70%", y: "20%" },
     { title: "SUPPLY", value: "1B", color: "bg-tertiary", x: "15%", y: "55%" },
     { title: "OWNERSHIP", value: "REVOKED", color: "bg-white text-black", x: "75%", y: "60%" },
  ];

  return (
    <section id="tokenomics" className="snap-section bg-[#020D1D] flex flex-col items-center justify-center p-6 gap-12 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full z-0 pointer-events-none" />

      <div className="z-10 text-center">
        <h2 className="text-8xl md:text-[14rem] font-heading text-white leading-[0.8] mb-12" style={{ WebkitTextStroke: "2px #fff", textShadow: "8px 8px 0px #007BFF" }}>
          OCEANOMICS
        </h2>

        <div className="relative max-w-7xl w-full h-[300px] md:h-[400px] mb-12">
            {stats.map((stat, i) => (
               <motion.div
                 key={i}
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ delay: i * 0.1, type: "spring" }}
                 className={`absolute ${stat.color} p-8 ad-border ad-shadow font-heading text-4xl flex flex-col items-center rounded-3xl z-20 hidden md:flex min-w-[200px] shadow-[8px_8px_0_0_#007BFF] overflow-hidden`}
                 style={{ left: stat.x, top: stat.y }}
                 whileHover={{ rotate: [-2, 2, -2] }}
               >
                 <span className="text-xl md:text-2xl mb-4 font-body font-black opacity-60">{stat.title}</span>
                 <span className="text-5xl md:text-6xl">{stat.value}</span>
               </motion.div>
            ))}
            
            {/* Mascot in the center of stats */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-10 opacity-20 pointer-events-none">
               <span className="material-symbols-outlined text-[15rem] animate-float text-secondary">waves</span>
            </div>
        </div>
      </div>

      <p className="text-2xl md:text-5xl text-center font-heading text-white max-w-5xl z-10 px-6 drop-shadow-lg scale-110">
        FINN RUNS ON SOLANA. NO TAXES, NO BULLSHIT. THE DEEP IS CALLING. 
      </p>

      {/* Styled Ocean Backdrop at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-primary/20 to-transparent z-0 opacity-40">
         <div className="flex gap-4 animate-float h-full items-end justify-center">
             {[...Array(15)].map((_, i) => (
                <div key={i} className="w-16 h-48 bg-secondary/20 rounded-t-lg ad-border border-white/10" />
             ))}
         </div>
      </div>
    </section>
  );
}
