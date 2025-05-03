"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const FooterSection = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleGetStarted = () => {
    if (session) {
      router.push("/profile");
    } else {
      signIn("google", { callbackUrl: "/profile" });
    }
  };

  return (
    <div className="w-full h-[500px] md:h-[832px] flex-shrink-0 bg-[#F6F6FF] flex flex-col overflow-hidden">
      <div className="flex w-full md:w-[824px] flex-col justify-center items-center gap-6 md:gap-16 mx-auto mt-[60px] md:mt-[100px] px-4 md:px-0">
        {/* Title and Button Section */}
        <div className="flex flex-col items-center gap-6 md:gap-16">
          <h2 className="flex justify-center items-center self-stretch text-black text-center font-['Helvetica'] text-2xl md:text-3xl lg:text-[40px] font-bold uppercase">
            Haven&apos;t started yet? Get shit done this week. Start now!
          </h2>
          <button
            onClick={handleGetStarted}
            className="flex px-4 py-4 justify-center items-center rounded-lg bg-[#5657F0] cursor-pointer"
          >
            <span
              className={`text-white text-base md:text-lg lg:text-[20px] font-semibold ${inter.className}`}
            >
              Start your 4-weeks free trial
            </span>
          </button>
        </div>

        {/* Divider and Footer Links */}
        <div className="flex w-full md:w-[1248px] flex-col items-start gap-3">
          <div className="h-[1px] bg-black w-full" />
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0">
            <span
              className={`text-black text-center text-xs md:text-base lg:text-[16px] font-normal ${inter.className}`}
            >
              made with love by{" "}
              {/* <Link
                href="https://twitter.com/kb24x7"
                className="text-[#5657F0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                kb24x7
              </Link> */}
              {/* {" "}and{" "} */}
              <Link
                href="https://twitter.com/justabhi99"
                className="hover:text-[#5657F0] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                justabhi99
              </Link>
            </span>
            <span
              className={`text-black text-center text-xs md:text-base lg:text-[16px] font-normal ${inter.className}`}
            >
              © 2025 WeekAI. All rights reserved. Terms • Privacy Policy
            </span>
          </div>
        </div>
      </div>

      {/* Large WEEKAI Text */}
      <div className="w-full md:w-[1248px] mx-auto mt-auto">
        <h1 className="text-center font-['Helvetica'] text-[80px] md:text-[200px] lg:text-[300px] font-bold leading-[100%] text-transparent [background-image:linear-gradient(to_bottom_right,#5657F0_0%,#F0F0F3_50%),linear-gradient(to_bottom_left,#5657F0_0%,#F0F0F3_50%),linear-gradient(to_top_left,#5657F0_0%,#F0F0F3_50%),linear-gradient(to_top_right,#5657F0_0%,#F0F0F3_50%)] [background-position:bottom_right,bottom_left,top_left,top_right] [background-size:50%_50%] [background-repeat:no-repeat] [-webkit-background-clip:text] [background-clip:text]">
          WEEKAI
        </h1>
      </div>
    </div>
  );
};

export default FooterSection;
