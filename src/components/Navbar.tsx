"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { signIn, useSession } from "next-auth/react";
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/profile" });
  };

  const handleProfileClick = () => {
    router.push("/profile");
  };

  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center bg-[#5657F0] flex-shrink-0">
      <div className="text-[#FFF] font-['Helvetica'] text-[20px] font-bold leading-[120%]">
        WEEKAI
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {session ? (
          <div onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <UserMenu />
          </div>
        ) : (
          <>
            <button
              onClick={handleSignIn}
              className="flex px-4 py-3 justify-center items-center rounded-[12px] border border-[#FFF] cursor-pointer"
            >
              <span
                className={`text-[#FFF] text-[16px] font-semibold leading-[120%] ${inter.className}`}
              >
                Login
              </span>
            </button>
            <button
              onClick={handleSignIn}
              className="flex px-4 py-3 justify-center items-center rounded-[12px] bg-white cursor-pointer"
            >
              <span
                className={`text-[#5657F0] text-[16px] font-semibold leading-[120%] ${inter.className}`}
              >
                Start your 4-weeks free trial
              </span>
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
      >
        {isMenuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#5657F0] p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {session ? (
              <div onClick={handleProfileClick} style={{ cursor: "pointer" }}>
                <UserMenu />
              </div>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="flex px-4 py-3 justify-center items-center rounded-[12px] border border-[#FFF] cursor-pointer"
                >
                  <span
                    className={`text-[#FFF] text-[16px] font-semibold leading-[120%] ${inter.className}`}
                  >
                    Login
                  </span>
                </button>
                <button
                  onClick={handleSignIn}
                  className="flex px-4 py-3 justify-center items-center rounded-[12px] bg-white cursor-pointer"
                >
                  <span
                    className={`text-[#5657F0] text-[16px] font-semibold leading-[120%] ${inter.className}`}
                  >
                    Start your 4-weeks free trial
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
