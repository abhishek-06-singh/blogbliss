import Meteors from "./mini-components/Meteors";
import HeaderImg from "./images/header.jpg";
import Image from "next/image";
export function Hero() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Meteors number={30} />

      <Image
        src={HeaderImg}
        alt="Header"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}
