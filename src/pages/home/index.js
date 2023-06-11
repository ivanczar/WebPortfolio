import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import ProjectsSection from '../../components/ProjectsSection';
import FooterSection from '../../components/FooterSection';
import ScrollButton from '../../components/ScrollButton';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../../themes';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isEnglish, setIsEnglish] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLang = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar
          toggle={toggle}
          toggleTheme={toggleTheme}
          isDark={isDark}
          isEnglish={isEnglish}
          toggleLang={toggleLang}
        />
        <HeroSection isEnglish={isEnglish} />
        <InfoSection isEnglish={isEnglish} />
        <ProjectsSection isEnglish={isEnglish} />
        <FooterSection />
        <ScrollButton />
      </ThemeProvider>
    </>
  );
};

export default Home;
