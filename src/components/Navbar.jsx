import { useEffect, useRef, useState } from "react";
import { logo, menuIcon } from "../assets";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Navbar = () => {
  const [mobileNavBtn, setmobileNavBtn] = useState(false);
  const catchScreen = useRef(null);

  useEffect(() => {
    const contentElement = catchScreen.current;

    if (mobileNavBtn) {
      disableBodyScroll(contentElement);
    } else {
      enableBodyScroll(contentElement);
    }
    // Enable scroll on the body when the component will unmounts*********************
    return () => {
      enableBodyScroll(contentElement);
    };
  }, [mobileNavBtn]);

  return (
    <nav
      ref={catchScreen}
      className="sm:fixed w-full relative top-[77px] flex justify-between items-center min-w-[250px] max-w-full mt-[-77px] py-[26px] lg:px-20 md:px-[60px] sm:px-10 px-5 bg-bluish_purple z-40"
    >
      {/* this is mobile navigation component**************************** */}
      <div
        className={`sm:hidden absolute top-0 right-0 z-50 bg-bluish_purple w-[250px] h-[100vh] duration-500 p-4
      ${
        mobileNavBtn
          ? "translate-x-0 transition-transform"
          : "translate-x-full transition-transform"
      }`}
      >
        <div className="mobile_nav_content">
          <ul className="flex flex-col gap-7 font-['Inter'] text-white text-sm font-medium">
            <li>
              <div
                onClick={() => setmobileNavBtn(false)}
                className="px-1 text-lg font-bold w-fit text-orange-400 border-2 border-orange-400 cursor-pointer"
              >
                X
              </div>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
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
      </div>

      {/* this is big screen navigation component**************************** */}

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
          onClick={() => setmobileNavBtn(true)}
        />
      </a>

      <ul className="sm:flex hidden gap-7 font-['Inter'] text-white text-sm font-medium">
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
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
