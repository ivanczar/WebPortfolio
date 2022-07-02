import React from "react";
import SidebarView from "./SidebarView";

const SidebarContainer = ({ toggle, isOpen }) => {

  
  return <SidebarView>toggle={toggle} isOpen={isOpen}</SidebarView>;
};

export default SidebarContainer;
