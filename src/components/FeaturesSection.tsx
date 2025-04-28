import Image from "next/image";
import { Inter } from "next/font/google";
import FeatureCards from "./FeatureCards";

const inter = Inter({ subsets: ["latin"] });

const FeaturesSection = () => {
  return (
    <div className="w-full min-h-[1279px] px-4 sm:px-8 md:px-16 lg:px-[64.5px] py-12 md:py-[115px] flex flex-col justify-center items-center gap-8 md:gap-[84px] flex-shrink-0 bg-[#F6F6FF]">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center gap-4 md:gap-8 w-full max-w-4xl">
        <h2 className="text-black text-center font-['Helvetica'] text-2xl md:text-3xl lg:text-[40px] font-bold leading-normal">
          GET MORE DONE EVERY WEEK
        </h2>
        <p
          className={`text-center text-base md:text-lg lg:text-[20px] font-medium text-[#575555] leading-normal ${inter.className}`}
        >
          Receive weekly email check-ins, AI-powered ratings, and personalized
          feedback to help you stay accountable and improve consistently.
        </p>
      </div>

      {/* Cards and Image Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[838px] justify-center items-center gap-8 md:gap-16 w-full">
        {/* Left Side - Cards */}
        <div className="flex justify-center items-center w-full lg:w-auto">
          <FeatureCards />
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[736px] h-auto lg:h-[840px] flex justify-center">
          <Image
            src="/email-desktop.png"
            alt="Email Desktop"
            width={736}
            height={840}
            className="w-full max-w-[500px] lg:max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
