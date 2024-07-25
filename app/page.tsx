import Image from "next/image";
import { Hero } from "./components/Hero";
import { BelowHero } from "./components/mini-components/BelowHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24 lg:p-24">
      <div className="flex  items-center lg:justify-between justify-start  mb-7 w-full flex-col md:flex-col lg:flex-row">
        <h1 className="text-6xl tracking-tighter font-bold">BlogBliss.</h1>
        <p className="text-sm">Insights and Information at Your Fingertips</p>
      </div>
      <Hero />
      <BelowHero />
    </main>
  );
}
