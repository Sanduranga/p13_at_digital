import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="lg:px-20 md:px-[60px] sm:px-10 px-5 pb-5 pt-10 bg-violet-700 flex flex-col items-center gap-10">
      <div className="flex md:justify-between flex-col md:flex-row md:gap-[112px] gap-[60px] items-start w-full">
        <div className="flex flex-col justify-start items-start gap-5">
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
        <div className="flex justify-between sm:flex-row flex-col items-start lg:gap-32 md:gap-5 gap-10 sm:gap-[79px]">
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
      <div className="w-[630px] h-[25px] flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch h-[0px] border border-white"></div>
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-white text-sm font-medium font-['Inter'] capitalize">
            Privacy Policy
          </div>
          <div className="w-4 h-[0px] rotate-90 border border-white"></div>
          <div className="text-white text-sm font-medium font-['Inter'] capitalize">
            Terms & Conditions
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
