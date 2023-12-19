import { logo, menuIcon } from "../assets";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center min-w-[250px] max-w-full mt-[-77px] py-[26px] lg:px-20 md:px-[60px] sm:px-10 px-5 bg-bluish_purple z-40">
      <a href="#" className="relative w-[238.89px] h-[25px]">
        <img
          src={logo}
          className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute"
          alt="logo.png"
        />
      </a>

      <a href="#">
        <img
          src={menuIcon}
          className="w-[31px] h-[24px] sm:hidden block"
          alt="menuIcon.png"
        />
      </a>

      <ul className="sm:flex hidden gap-7 font-['Inter'] text-white text-sm font-medium">
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
    </nav>
  );
};

export default Navbar;
