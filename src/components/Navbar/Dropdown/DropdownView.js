import React from "react";
import {
  DropdownContainer,
  DropdownBtn,
  LightIcon,
  DarkIcon,
} from "./DropdownElements";


const DropdownView = ({toggleTheme, isDark}) => {

  return (
    <>
      <DropdownContainer>
        <DropdownBtn onClick={toggleTheme}>
          {
            isDark ? <LightIcon/> : <DarkIcon/>
          }
        </DropdownBtn>
      </DropdownContainer>
    </>
  );
};

export default DropdownView;
