import React from 'react';
import {
  DropdownContainer,
  DropdownBtn,
  LightIcon,
  DarkIcon,
} from './DropdownElements';

const DropdownView = ({ toggleTheme, isDark, isEnglish, toggleLang }) => {
  return (
    <>
      <DropdownContainer>
        <DropdownBtn onClick={toggleTheme}>
          {isDark ? <LightIcon /> : <DarkIcon />}
        </DropdownBtn>
        <DropdownBtn onClick={toggleLang}>
          {isEnglish ? <p>ES</p> : <p>EN</p>}
        </DropdownBtn>
      </DropdownContainer>
    </>
  );
};

export default DropdownView;
