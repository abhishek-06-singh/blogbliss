import { BoxRevealDemo } from "./BoxRevealDemo";
import TypingAnimation from "./TypingAnimation";

export async function BelowHero() {
  return (
    <div className="flex  items-center justify-between mt-10 mb-7 w-full ">
      <TypingAnimation
        className="text-5xl font-bold text-black w-1/3 tracking-tight "
        text="Pure Information, With Minimal Distraction – Clarity in Every Detail"
      />
      <div className="w-2/3">
        <BoxRevealDemo />
      </div>
    </div>
  );
}
