import { image1, image2 } from "../assets";

const Intro = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="lg:hidden md:block w-full px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start flex">
        <div className="self-stretch text-white text-5xl font-bold font-['Inter'] mb-[20px] capitalize leading-[48px]">
          We crush your competitors, goals, and sales records - without the B.S.
        </div>
        <div className="px-5 py-3 bg-orange-400 rounded inline-flex text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
          Get free consultation
        </div>
      </div>

      <div className="wrapper2">
        <div className="3xl:w-[1064px] 3xl:h-[414px] lg:w-[896px] lg:h-[348px] justify-start items-center gap-[108px] inline-flex">
          <img
            className="3xl:w-[414px] 3xl:h-[414px] lg:w-[346px] lg:h-[346px]"
            src={image2}
          />
          <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">
                Web & Mobile App Development
              </div>
            </div>
            <div className="self-stretch text-black text-base font-normal font-['Inter']">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </div>
            <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
              <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
                LEARN MORE
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>

        <div className="3xl:w-[1064px] 3xl:h-[414px] lg:w-[896px] lg:h-[348px] justify-start items-center gap-[108px] inline-flex">
          <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">
                Digital Strategy Consulting
              </div>
            </div>
            <div className="self-stretch text-black text-base font-normal font-['Inter']">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </div>
            <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
              <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
                LEARN MORE
              </div>
            </div>
          </div>
          <img
            className="3xl:w-[414px] 3xl:h-[416px] lg:w-[346px] lg:h-[348px]"
            src={image1}
          />
        </div>
      </div>
    </section>
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
