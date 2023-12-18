import { heroImg } from "../assets";

const Header = () => {
  return (
    <header
      style={{ backgroundImage: `url(${heroImg})` }}
      className="w-full h-[100vh] bg-cover bg-center"
    >
      <div className="wrapper1">
        <div className="h-[306px] px-10 pt-6 pb-8 3xl:left-[80px] 3xl:bottom-[63px] lg:left-[60px] lg:bottom-10 md:hidden lg:block absolute bg-gradient-to-l from-cyan-500 to-green-400 flex flex-col justify-start items-start gap-5">
          <div className="w-[556px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </div>
          <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
            <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
              Get free consultation
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
