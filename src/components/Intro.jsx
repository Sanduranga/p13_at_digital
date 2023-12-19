import { image1, image2 } from "../assets";
import Button from "./Button";

const Intro = () => {
  return (
    <>
      {/* This is Frame 497 and only appears when it is less than 768px */}
      <div className="md:hidden flex flex-col justify-start items-start w-full px-5 sm:px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400">
        <div className="self-stretch text-white text-5xl font-bold font-['Inter'] mb-[20px] capitalize leading-[48px]">
          We crush your competitors, goals, and sales records - without the B.S.
        </div>
        <a href="#">
          <Button />
        </a>
      </div>

      <div className="wrapper2">
        {/* wrapper1 & wrapper2 is in index.css */}
        <div className="flex sm:flex-row flex-col justify-start items-center md:gap-[20px] lg:gap-[108px] gap-[20px]">
          <img
            className="lg:w-[414px] lg:h-[414px] md:w-[346px] md:h-[346px] w-[275px] h-[275px]"
            src={image2}
          />
          <div className="flex flex-col justify-start sm:items-start items-center gap-5">
            <div className="flex sm:justify-start justify-center">
              <div className="text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide text-center sm:text-start">
                Web & Mobile App Development
              </div>
            </div>
            <p className="self-stretch text-black text-base text-center sm:text-start font-normal font-['Inter']">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <a
              href="#"
              className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex"
            >
              <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
                LEARN MORE
              </div>
            </a>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col-reverse justify-start items-center lg:gap-[108px] gap-[20px]">
          <div className="flex flex-col justify-start sm:items-start items-center gap-5">
            <div className="flex sm:justify-start justify-center">
              <div className="text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide text-center sm:text-start">
                Digital Strategy Consulting
              </div>
            </div>
            <p className="self-stretch text-black text-center sm:text-start text-base font-normal font-['Inter']">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <a
              href="#"
              className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex"
            >
              <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
                LEARN MORE
              </div>
            </a>
          </div>
          <img
            className="lg:w-[414px] lg:h-[416px] md:w-[346px] md:h-[348px] w-[275px] h-[276px]"
            src={image1}
          />
        </div>
      </div>
    </>
    // <div className="w-[1064px] h-[414px] justify-start items-center gap-[108px] inline-flex">
    //   <img
    //     className="w-[414px] h-[414px]"
    //     src="https://via.placeholder.com/414x414"
    //   />
    //   <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex">
    //     <div className="flex-col justify-start items-start gap-3 flex">
    //       <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">
    //         Web & Mobile App Development
    //       </div>
    //     </div>
    //     <div className="self-stretch text-black text-base font-normal font-['Inter']">
    //       Your web and mobile Apps are pieces of the puzzle to grow your
    //       business. We use frameworks which tailor content and engagement
    //       methods to respond to different intents shown by your potential
    //       customers who interact with your business online.
    //     </div>
    //     <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
    //       <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
    //         LEARN MORE
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Intro;
