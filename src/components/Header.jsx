import { heroImg } from "../assets";

const Header = () => {
  return (
    // <header
    //   style={{ backgroundImage: `url(${heroImg})` }}
    //   className="w-auto h-auto bg-cover bg-center"
    // >
    <header className="">
      <div className="wrapper1">
        <img
          src={heroImg}
          alt="heroImg.png"
          className="w-full bg-center object-cover object-center"
        />
        <div className="w-[622px] px-10 pt-6 pb-8 3xl:left-[80px] 3xl:bottom-[63px] md:left-[60px] md:bottom-10 hidden absolute bg-gradient-to-l from-cyan-500 to-green-400 md:flex flex-col justify-start items-start gap-5">
          <div className="w-[556px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </div>
          <a
            href="#"
            className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex"
          >
            <h3 className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
              Get free consultation
            </h3>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
