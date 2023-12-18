import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="fixed h-[77px] w-full 3xl:px-20 py-[26px] lg:px-[60px] md:px-10 px-5 bg-bluish_purple z-40">
      <div className="flex justify-between items-center">
        <a href="#" className="relative w-[238.89px] h-[25px]">
          <img
            src={logo}
            className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute"
            alt="logo.png"
          />
        </a>
        <ul className="flex gap-7 font-['Inter'] text-white text-sm font-medium">
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            {" "}
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
