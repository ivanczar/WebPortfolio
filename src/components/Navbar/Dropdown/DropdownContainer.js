import React from 'react';
import DropdownView from './DropdownView';

const DropdownContainer = ({ toggleTheme, isDark, isEnglish, toggleLang }) => {
  return (
    <DropdownView
      toggleTheme={toggleTheme}
      isDark={isDark}
      isEnglish={isEnglish}
      toggleLang={toggleLang}
    />
  );
};

export default DropdownContainer;
