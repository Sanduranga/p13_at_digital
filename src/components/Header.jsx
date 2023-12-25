import { useContext } from "react";
import { heroImg } from "../assets";
import Button from "./Button";
import { NavContext } from "./NavContext";

const Header = () => {
  const { navData } = useContext(NavContext);
  return (
    <header className={`mt-[77px] ${navData ? "blur" : "blur-none"}`}>
      <div className="wrapper1">
        {/* wrapper1 & wrapper2 is in index.css */}

        <img
          src={heroImg}
          alt="heroImg.png"
          className="w-full bg-center object-cover object-center"
        />
        {/* This is Frame 497 and only appears when it is larger than 768px*/}
        <div className="lg:-[630px] md:w-[622px] px-10 pt-6 pb-8 lg:left-[80px] lg:bottom-[63px] md:left-[60px] md:bottom-10 hidden absolute bg-gradient-to-l from-cyan-500 to-green-400 md:flex flex-col justify-start items-start gap-5">
          <div className="w-[556px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </div>
          <a href="#">
            <Button>Get free consultation</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
