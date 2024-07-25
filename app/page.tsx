import Image from "next/image";
import { Hero } from "./components/Hero";
import { BelowHero } from "./components/mini-components/BelowHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex  items-center justify-between  mb-7 w-full">
        <h1 className="text-6xl tracking-tighter font-bold">BlogBliss.</h1>
        <p className="text-sm">Insights and Information at Your Fingertips</p>
      </div>
      <Hero />
      <BelowHero />
    </main>
  );
}
