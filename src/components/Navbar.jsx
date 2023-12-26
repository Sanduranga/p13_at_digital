import { useContext, useEffect, useRef, useState } from "react";
import { logo, menuIcon } from "../assets";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { NavContext } from "./NavContext";

const Navbar = () => {
  const [mobileNavBtn, setmobileNavBtn] = useState(false);
  const catchScreen = useRef(null);
  const { updateNavData } = useContext(NavContext);

  useEffect(() => {
    const contentElement = catchScreen.current;
    updateNavData(mobileNavBtn);

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
      className="sm:fixed w-full relative top-[77px] flex justify-between items-center min-w-[250px] max-w-full mt-[-77px] py-[26px] lg:px-20 md:px-[60px] sm:px-10 px-5 bg-bluish_purple z-40 overscroll-none"
    >
      {/* this is mobile navigation component**************************** */}
      <div
        className={`sm:hidden absolute top-0 right-0 z-50 overflow-scroll bg-bluish_purple w-[250px] h-[100dvh] duration-500 p-4
      ${
        mobileNavBtn
          ? "translate-x-0 transition-transform"
          : "translate-x-full transition-transform"
      }`}
      >
        <div className="mobile_nav_content flex flex-col justify-between h-full">
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
          <div className="relative w-[180.89px] h-[20px] mb-5 ml-4">
            <img
              src={logo}
              className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute"
              alt="logo.png"
            />
          </div>
        </div>
      </div>

      {/* this is big screen navigation component**************************** */}

      <a href="#" className="relative w-[238.89px] h-[25px]">
        <img
          src={logo}
          className={` ${
            mobileNavBtn ? "blur" : "blur-none"
          } w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute`}
          alt="logo.png"
        />
      </a>

      <div>
        <img
          src={menuIcon}
          className="w-[31px] h-[24px] sm:hidden block"
          alt="menuIcon.png"
          onClick={() => setmobileNavBtn(true)}
        />
      </div>

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
