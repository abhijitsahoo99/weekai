import Image from "next/image";
import { Inter } from "next/font/google";
import FeatureCards from "./FeatureCards";

const inter = Inter({ subsets: ["latin"] });

const FeaturesSection = () => {
  return (
    <div className="w-full h-[1279px] px-4 sm:px-8 md:px-16 lg:px-[64.5px] py-[115px] flex flex-col justify-center items-center gap-[84px] flex-shrink-0 bg-[#F6F6FF]">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center gap-8 w-full max-w-4xl">
        <h2 className="text-black text-center font-['Helvetica'] text-[40px] font-bold leading-normal">
          GET MORE DONE EVERY WEEK
        </h2>
        <p
          className={`text-black text-center text-[20px] font-normal leading-normal ${inter.className}`}
        >
          Receive weekly email check-ins, AI-powered ratings, and personalized
          feedback to help you stay accountable and improve consistently.
        </p>
      </div>

      {/* Cards and Image Section */}
      <div className="flex flex-col lg:flex-row h-[838px] justify-center items-center gap-16 w-full">
        {/* Left Side - Cards */}
        <FeatureCards />

        {/* Right Side - Image */}
        <div className="w-full lg:w-[736px] h-[840px]">
          <Image
            src="/email-desktop.png"
            alt="Email Desktop"
            width={736}
            height={840}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
