import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const FeatureCards = () => {
  return (
    <div className="flex flex-col justify-between w-full lg:w-auto">
      {/* Card 1 */}
      <div className="flex w-full max-w-[350px] py-8 flex-col items-start gap-8">
        <Image
          src="/weekai-ill-1.svg"
          alt="Daily Journaling Illustration"
          width={64}
          height={48}
        />
        <h3
          className={`text-black text-[18px] font-semibold leading-normal ${inter.className}`}
        >
          Daily Journaling? Nah
        </h3>
        <p
          className={`text-[#333] text-[18px] font-medium leading-[120%] ${inter.className}`}
        >
          Rather recap every Friday. Tell WeekAI about your week—personal goals,
          work, or anything you aim to improve consistently.
        </p>
      </div>
      {/* Card 2 */}
      <div className="flex w-full max-w-[350px] py-8 flex-col items-start gap-8">
        <Image
          src="/weekai-ill-2.svg"
          alt="Daily Journaling Illustration"
          width={64}
          height={48}
        />
        <h3
          className={`text-black text-[18px] font-semibold leading-normal ${inter.className}`}
        >
          Meet WEEKAI
        </h3>
        <p
          className={`text-[#333] text-[18px] font-medium leading-[120%] ${inter.className}`}
        >
          WEEKAI learns what you're working on, where you're aiming to improve,
          and how your ideal week should look.
        </p>
      </div>
      {/* Card 3 */}
      <div className="flex w-full max-w-[350px] py-8 flex-col items-start gap-8">
        <Image
          src="/weekai-ill-3.svg"
          alt="Daily Journaling Illustration"
          width={64}
          height={48}
        />
        <h3
          className={`text-black text-[18px] font-semibold leading-normal ${inter.className}`}
        >
          Intelligent Feedback
        </h3>
        <p
          className={`text-[#333] text-[18px] font-medium leading-[120%] ${inter.className}`}
        >
          Every weekend, share your week's details with WEEKAI to get a clear
          progress rating and actionable feedback.
        </p>
      </div>
    </div>
  );
};

export default FeatureCards;
