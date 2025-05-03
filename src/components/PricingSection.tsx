"use client";

import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const PricingSection = () => {
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
    <div className="w-full h-[832px] px-4 md:px-[129px] py-16 md:py-[148px] flex justify-center items-center flex-shrink-0 bg-[#F6F6FF]">
      <div className="flex flex-col items-center gap-8 w-full md:w-[610px]">
        {/* Heading and Paragraph */}
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 w-full">
          <h2 className="text-black text-center font-['Helvetica'] text-2xl md:text-3xl lg:text-[40px] font-bold leading-normal self-stretch">
            START YOUR 4-WEEKS FREE TRAIL,COMPLETELY FREE
          </h2>
          <p
            className={`text-center text-base md:text-lg lg:text-[20px] font-medium text-[#575555] leading-normal ${inter.className}`}
          >
            Choose a plan and start your 4-weeks free trail. Get started to talk
            with WEEKAI and get the most of every week
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Card 1 */}
          <div className="flex w-full md:w-[506px] p-6  justify-center items-center rounded-[12px] bg-[#E0E0FF]">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <h3
                className={`text-black text-2xl md:text-3xl lg:text-[40px] font-semibold leading-normal uppercase ${inter.className}`}
              >
                FREE
              </h3>
              <p
                className={`text-[#555] text-sm md:text-base lg:text-[16px] font-medium leading-normal ${inter.className}`}
              >
                It&apos;s free to get started. No credit card required. Set up
                your email and start with giving details about what you want to
                achieve and where you lack.
              </p>
              <button
                className="flex px-4 py-4 justify-center items-center gap-2.5 rounded-lg bg-[#5657F0]"
                onClick={handleGetStarted}
              >
                <span
                  className={`text-white text-sm md:text-base lg:text-[16px] font-semibold leading-normal ${inter.className}`}
                >
                  Get Started
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-full md:w-[506px] p-6 justify-center items-center rounded-[12px] bg-[#E0E0FF]">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <h3
                  className={`text-black text-2xl md:text-3xl lg:text-[40px] font-semibold leading-normal uppercase ${inter.className}`}
                >
                  $50
                </h3>
                <h3
                  className={`text-black text-sm md:text-base lg:text-[16px] font-semibold leading-none ${inter.className}`}
                >
                  billed monthly
                </h3>
              </div>
              <p
                className={`text-[#555] text-sm md:text-base lg:text-[16px] font-medium leading-normal ${inter.className}`}
              >
                Start your 4-week free trial when you sign up with WEEKAI. Then
                it&apos;s just $100 per month for unlimited chat every friday.
              </p>
              <button
                className="flex px-4 py-4 justify-center items-center gap-2.5 rounded-lg bg-[#5657F0]"
                onClick={handleGetStarted}
              >
                <span
                  className={`text-white text-sm md:text-base lg:text-[16px] font-semibold leading-normal ${inter.className}`}
                >
                  Get Started
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
