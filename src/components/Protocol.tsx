"use client";

import { motion } from "framer-motion";

export default function Protocol() {
  return (
    <section id="contract" className="snap-section py-20 px-6 bg-surface flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full mx-auto bg-surface-container rounded-3xl border-4 border-outline p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-9xl">security</span>
        </div>
        <h2 className="font-headline text-4xl font-black text-on-surface uppercase mb-8 tracking-tight">Verified Protocol Address</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 bg-background p-6 rounded-2xl border-2 border-outline-variant shadow-inner">
          <code className="text-primary font-mono text-lg md:text-2xl break-all">0xFINN_THE_HAMMER_OCEAN_GENTLEMAN_777_FINN</code>
          <button 
            onClick={() => navigator.clipboard.writeText("0xFINN_THE_HAMMER_OCEAN_GENTLEMAN_777_FINN")}
            className="bg-tertiary text-on-tertiary px-8 py-3 rounded-xl font-black uppercase text-sm hover:scale-110 active:scale-95 transition-all shadow-lg"
          >
            COPY
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-8">
           <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-tertiary text-3xl">verified</span>
              <span className="text-sm font-bold mt-2">Renounced</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-secondary text-3xl">local_fire_department</span>
              <span className="text-sm font-bold mt-2">Liquidity Burned</span>
           </div>
           <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-3xl">shield_person</span>
              <span className="text-sm font-bold mt-2">Gentlemanly</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
}
