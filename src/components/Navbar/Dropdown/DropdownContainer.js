import React from "react";
import DropdownView from "./DropdownView";

const DropdownContainer = ({ toggleTheme, isDark}) => {

  return <DropdownView toggleTheme={toggleTheme} isDark={isDark} />
};

export default DropdownContainer;