import React from 'react';
import NavbarView from './NavbarView';

const NavbarContainer = ({
  toggle,
  toggleTheme,
  isDark,
  isEnglish,
  toggleLang,
}) => {
  return (
    <NavbarView
      toggle={toggle}
      toggleTheme={toggleTheme}
      isDark={isDark}
      isEnglish={isEnglish}
      toggleLang={toggleLang}
    />
  );
};

export default NavbarContainer;
