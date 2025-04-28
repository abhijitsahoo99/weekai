import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const PricingSection = () => {
  return (
    <div className="w-full h-[832px] px-[129px] py-[148px] flex justify-center items-center flex-shrink-0 bg-[#F6F6FF]">
      <div className="flex flex-col items-center gap-8 w-[610px]">
        {/* Heading and Paragraph */}
        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <h2 className="text-black text-center font-['Helvetica'] text-[40px] font-bold leading-normal self-stretch">
            START YOUR 4-WEEKS FREE TRAIL,COMPLETELY FREE
          </h2>
          <p
            className={`text-[#646464] text-center text-[20px] font-medium leading-normal self-stretch ${inter.className}`}
          >
            Choose a plan and start your 4-weeks free trail. Get started to talk
            with WEEKAI and get the most of every week
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-between items-center gap-8">
          {/* Card 1 */}
          <div className="flex w-[506px] p-[48px_43px] justify-center items-center rounded-[12px] bg-[#E0E0FF]">
            <div className="flex flex-col items-start gap-8">
              <h3
                className={`text-black text-[40px] font-semibold leading-normal uppercase ${inter.className}`}
              >
                FREE
              </h3>
              <p
                className={`text-[#555] text-[16px] font-medium leading-normal ${inter.className}`}
              >
                It's free to get started. No credit card required. Set up your
                email and start with giving details about what you want to
                achieve and where you lack.
              </p>
              <button className="flex px-4 py-4 justify-center items-center gap-2.5 rounded-lg bg-[#5657F0]">
                <span
                  className={`text-white text-[16px] font-semibold leading-normal ${inter.className}`}
                >
                  Get Started
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-[506px] p-[48px_43px] justify-center items-center rounded-[12px] bg-[#E0E0FF]">
            <div className="flex flex-col items-start gap-8">
              <h3
                className={`text-black text-[40px] font-semibold leading-normal uppercase ${inter.className}`}
              >
                FREE
              </h3>
              <p
                className={`text-[#555] text-[16px] font-medium leading-normal ${inter.className}`}
              >
                It's free to get started. No credit card required. Set up your
                email and start with giving details about what you want to
                achieve and where you lack.
              </p>
              <button className="flex px-4 py-4 justify-center items-center gap-2.5 rounded-lg bg-[#5657F0]">
                <span
                  className={`text-white text-[16px] font-semibold leading-normal ${inter.className}`}
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
