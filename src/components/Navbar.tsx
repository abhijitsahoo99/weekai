"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-[#5657F0] flex-shrink-0">
      <div className="text-[#FFF] font-['Helvetica'] text-[20px] font-bold leading-[120%]">
        WEEKAI
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <button className="flex px-4 py-3 justify-center items-center rounded-[12px] border border-[#FFF]">
          <span
            className={`text-[#FFF] text-[16px] font-semibold leading-[120%] ${inter.className}`}
          >
            Login
          </span>
        </button>
        <button className="flex px-4 py-3 justify-center items-center rounded-[12px] bg-white">
          <span
            className={`text-[#5657F0] text-[16px] font-semibold leading-[120%] ${inter.className}`}
          >
            Start your 4-weeks free trial
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <IoClose className="w-7 h-7 transition-transform duration-300" />
        ) : (
          <HiMenu className="w-7 h-7 transition-transform duration-300" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-[#5657F0] shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-4 p-4">
          <button className="flex w-full px-4 py-3 justify-center items-center rounded-[12px] border border-[#FFF]">
            <span
              className={`text-[#FFF] text-[16px] font-semibold leading-[120%] ${inter.className}`}
            >
              Login
            </span>
          </button>
          <button className="flex w-full px-4 py-3 justify-center items-center rounded-[12px] bg-white">
            <span
              className={`text-[#5657F0] text-[16px] font-semibold leading-[120%] ${inter.className}`}
            >
              Start your 4-weeks free trial
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
