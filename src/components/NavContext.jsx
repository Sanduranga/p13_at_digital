import { createContext, useState } from "react";
import PropTypes from "prop-types";

const NavContext = createContext();

const NavProvider = (props) => {
  const [navData, setNavData] = useState(false);

  const updateNavData = (newData) => {
    setNavData(newData);
  };

  return (
    <NavContext.Provider value={{ navData, updateNavData }}>
      {props.children}
    </NavContext.Provider>
  );
};
NavProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { NavProvider, NavContext };
