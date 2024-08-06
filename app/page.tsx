import Image from "next/image";
import background from "../public/images/background.png";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="background image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <header className="relative z-10">
        <div className="container p-20 ml-10">
          <h5 className="text-lg leading-relaxed mt-5 font-bold text-white">
            SUMMER 2020
          </h5>
          <h1 className="text-6xl leading-tight mt-5 font-bold text-white">
            IT'S A SPECIAL <br />
            GIFT
          </h1>
          <p className="text-base leading-relaxed mt-5 font-normal text-white">
            We know how large objects will act, but things on a <br />
            small scale
          </p>
          <button className="w-44 h-14 mt-10 rounded border-none bg-[#23A6F0] text-white text-base font-bold cursor-pointer hover:bg-white hover:text-blue-500 transition-colors duration-300 ease-in-out">
            SHOP NOW
          </button>
        </div>
      </header>
    </div>
  );
}
