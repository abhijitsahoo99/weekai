import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const FeatureCards = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full lg:w-auto">
      {/* Card 1 */}
      <div className="flex w-full max-w-[280px] md:max-w-[320px] lg:max-w-[350px] py-4 md:py-8 flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-8">
        <Image
          src="/weekai-ill-1.svg"
          alt="Daily Journaling Illustration"
          width={48}
          height={36}
          className="w-12 h-9 md:w-16 md:h-12"
        />
        <h3
          className={`text-black text-base md:text-lg lg:text-[18px] font-semibold leading-normal ${inter.className}`}
        >
          Daily Journaling? Nah
        </h3>
        <p
          className={`text-[#333] text-sm md:text-base lg:text-[18px] font-medium leading-[120%] ${inter.className}`}
        >
          Rather recap every Friday. Tell WeekAI about your week&mdash;personal
          goals, work, or anything you aim to improve consistently.
        </p>
      </div>
      {/* Card 2 */}
      <div className="flex w-full max-w-[280px] md:max-w-[320px] lg:max-w-[350px] py-4 md:py-8 flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-8">
        <Image
          src="/weekai-ill-2.svg"
          alt="Daily Journaling Illustration"
          width={48}
          height={36}
          className="w-12 h-9 md:w-16 md:h-12"
        />
        <h3
          className={`text-black text-base md:text-lg lg:text-[18px] font-semibold leading-normal ${inter.className}`}
        >
          Meet WEEKAI
        </h3>
        <p
          className={`text-[#333] text-sm md:text-base lg:text-[18px] font-medium leading-[120%] ${inter.className}`}
        >
          WEEKAI learns what you&apos;re working on, where you&apos;re aiming to
          improve, and how your ideal week should look.
        </p>
      </div>
      {/* Card 3 */}
      <div className="flex w-full max-w-[280px] md:max-w-[320px] lg:max-w-[350px] py-4 md:py-8 flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-8">
        <Image
          src="/weekai-ill-3.svg"
          alt="Daily Journaling Illustration"
          width={48}
          height={36}
          className="w-12 h-9 md:w-16 md:h-12"
        />
        <h3
          className={`text-black text-base md:text-lg lg:text-[18px] font-semibold leading-normal ${inter.className}`}
        >
          Intelligent Feedback
        </h3>
        <p
          className={`text-[#333] text-sm md:text-base lg:text-[18px] font-medium leading-[120%] ${inter.className}`}
        >
          Every weekend, share your week&apos;s details with WEEKAI to get a
          clear progress rating and actionable feedback.
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
