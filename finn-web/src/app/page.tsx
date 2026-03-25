"use client";

import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import HowToBuy from "@/components/HowToBuy";
import SectionTokenomics from "@/components/SectionTokenomics";
import CommunitySection from "@/components/CommunitySection";
import DotNav from "@/components/DotNav";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="snap-container bg-tertiary">
      <Navbar />
      <DotNav />
      <Hero />
      <SectionAbout />
      <HowToBuy />
      <SectionTokenomics />
      <CommunitySection />
    </main>
  );
}
