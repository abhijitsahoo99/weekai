import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/heroelonweek.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

    </div>
  );
};

export default HeroSection;
