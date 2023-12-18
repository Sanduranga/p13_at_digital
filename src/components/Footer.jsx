import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="w-full 3xl:min-w-[1440px] lg:min-w-[1080px] 3xl:mt-[100px] lg:mt-20 pt-10 pb-10 px-20 bg-violet-700 flex flex-col items-center gap-10">
      <div className="flex justify-between items-start w-full">
        <div className="w-[413px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-[238.89px] h-[25px] relative">
            <img
              src={logo}
              className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute"
            />
          </div>
          <div className="self-stretch text-white text-base font-normal font-['Lato']">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </div>
        </div>
        <div className="flex justify-between items-start gap-32">
          <div className="w-[197px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-white text-[21px] font-semibold font-['Inter']">
              Our Technologies
            </div>
            <div className="flex-col justify-start items-start gap-3 flex text-white text-sm font-medium font-['Inter'] capitalize">
              <h2>ReactJS</h2>
              <h2>Gatsby</h2>
              <h2>NextJS</h2>
              <h2>NodeJS</h2>
              <h2>GraphQL</h2>
              <h2>Laravel</h2>
            </div>
          </div>
          <div className="w-[197px] flex-col justify-start items-start gap-3 inline-flex">
            <div className="text-white text-[21px] font-semibold font-['Inter']">
              Our Services
            </div>
            <div className="self-stretch h-[150px] flex-col justify-start items-start gap-3 flex text-white text-sm font-medium font-['Inter'] capitalize">
              <div>Social media Marketing</div>
              <div>Web & Mobile App Development</div>
              <div>Data & Analytics</div>
              <div>Google Marketing solutions</div>
              <div>Search Engine Optimization</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[25px] flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch h-[0px] border border-white"></div>
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-white text-sm font-medium font-['Inter'] capitalize">
            Privacy Policy
          </div>
          <div className="w-4 h-[0px] origin-top-left rotate-90 border border-white"></div>
          <div className="text-white text-sm font-medium font-['Inter'] capitalize">
            Terms & Conditions
          </div>
        </div>
      </div> */}
      <div className="w-[630px] h-[25px] flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch h-[0px] border border-white"></div>
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-white text-sm font-medium font-['Inter'] capitalize">
            Privacy Policy
          </div>
          <div className="w-4 h-[0px] origin-top-left rotate-90 border border-white"></div>
          <div className="text-white text-sm font-medium font-['Inter'] capitalize">
            Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
