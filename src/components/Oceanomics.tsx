"use client";

import { motion } from "framer-motion";

export default function Oceanomics() {
  const cards = [
    {
      title: "Liquidity Depths",
      desc: "100% of the initial liquidity has been locked at the bottom of the Mariana Trench. No rug pulls, only deep dives.",
      value: "1,000,000,000",
      unit: "Supply",
      icon: "waves",
      color: "text-secondary",
      span: "md:col-span-2",
    },
    {
      title: "Eternal Flame",
      desc: "50% of the supply was sent to the abyss (burned) at launch.",
      icon: "local_fire_department",
      color: "text-tertiary",
    },
    {
      title: "Buy/Sell Tax",
      desc: "A true gentleman doesn't charge entry fees.",
      value: "0%",
      icon: "receipt_long",
      color: "text-secondary",
      center: true,
    },
    {
      title: "Community Driven",
      desc: "Finn is owned by the reef. Every holder is a member of the elite underwater club.",
      icon: "group",
      color: "text-primary",
      span: "md:col-span-2",
      hasImage: true,
    },
  ];

  return (
    <section id="oceanomics" className="snap-section py-24 px-6 bg-surface-container-low flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-headline text-5xl md:text-8xl font-black text-on-surface uppercase tracking-tighter">Oceanomics</h2>
          <div className="h-2 w-32 bg-secondary mt-4 shadow-[0_0_20px_var(--secondary)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`${card.span || ""} bg-surface-container-highest p-10 rounded-3xl border-4 border-outline flex flex-col justify-between hover:bg-surface-bright transition-all group overflow-hidden relative shadow-2xl`}
            >
              {/* Card Sparkle Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all" />

              <div className={card.center ? "flex flex-col items-center text-center" : ""}>
                <span className={`material-symbols-outlined text-6xl ${card.color} mb-6 transition-transform group-hover:scale-125 duration-500`}>
                  {card.icon}
                </span>
                <h3 className={`text-4xl font-black ${card.hasImage ? "text-primary" : "text-on-surface"} uppercase mb-4`}>
                  {card.title}
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  {card.desc}
                </p>
              </div>

              {card.value && (
                <div className={`mt-12 text-6xl font-black text-on-surface ${card.center ? "text-center" : ""}`}>
                  {card.value} {card.unit && <span className="text-xl text-outline tracking-widest uppercase">{card.unit}</span>}
                </div>
              )}

              {card.hasImage && (
                <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
                   <span className="material-symbols-outlined text-9xl">waves</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
