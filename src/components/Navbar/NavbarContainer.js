import React from "react";
import NavbarView from "./NavbarView";

const NavbarContainer = ({ toggle, toggleTheme , isDark}) => {

  return <NavbarView toggle={toggle} toggleTheme={toggleTheme} isDark={isDark}/>
};

export default NavbarContainer;
