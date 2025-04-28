import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-[#5657F0] flex-shrink-0">
      <div className="text-[#FFF] font-['Helvetica'] text-[20px] font-bold leading-[120%]">
        WEEKAI
      </div>
      <div className="flex items-center gap-6">
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
    </nav>
  );
};

export default Navbar;
