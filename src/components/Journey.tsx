"use client";

import { motion } from "framer-motion";

export default function Journey() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Surface Breach",
      color: "bg-secondary text-on-secondary",
      items: [
        "Token Launch & Website Reveal",
        "Community Telegram & Twitter Growth",
        "Initial Liquidity Locked",
      ],
      status: "completed",
    },
    {
      phase: "Phase 2",
      title: "Deep Water Expansion",
      color: "bg-primary text-on-primary",
      items: [
        "CEX Listings (Tier 2/3)",
        "Influencer 'Shark Tank' Partnerships",
        "Finn's Exclusive NFT Collection",
      ],
      status: "pending",
    },
    {
      phase: "Phase 3",
      title: "The Ocean's Throne",
      color: "bg-tertiary text-on-tertiary-container",
      items: [
        "Tier 1 Exchange Dominance",
        "Global Marketing Splash",
        "The Gentleman's Foundation Charity",
      ],
      status: "pending",
    },
  ];

  return (
    <section id="journey" className="snap-section py-24 px-6 relative overflow-hidden bg-surface flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-headline text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter text-right mb-20 drop-shadow-xl"
        >
          The Journey
        </motion.h2>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[5.5rem] md:left-[5.5rem] top-0 bottom-0 w-2 bg-outline/20 hidden md:block" />

          {phases.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-start relative ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`${item.color} px-8 py-3 rounded-2xl border-4 border-outline font-black text-3xl uppercase shadow-xl z-10 w-48 text-center`}>
                {item.phase}
              </div>
              <div className="bg-surface-container p-10 rounded-3xl border-4 border-outline flex-1 relative group hover:bg-surface-container-high transition-all shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <span className="material-symbols-outlined text-6xl">anchor</span>
                </div>
                <h4 className="text-3xl font-black text-on-surface uppercase mb-6">{item.title}</h4>
                <ul className="space-y-4 text-on-surface-variant text-xl">
                  {item.items.map((listItem, lidx) => (
                    <li key={lidx} className="flex items-center gap-4 group-hover:text-on-surface transition-colors">
                      {item.status === "completed" ? (
                        <span className="material-symbols-outlined text-tertiary text-2xl" data-weight="fill">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-outline text-2xl">pending</span>
                      )}
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
