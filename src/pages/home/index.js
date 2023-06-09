import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import ProjectsSection from '../../components/ProjectsSection';
import ContactSection from '../../components/ContactSection';
import FooterSection from '../../components/FooterSection';
import ScrollButton from '../../components/ScrollButton';
import { ThemeProvider } from 'styled-components';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
      <FooterSection />
      <ScrollButton />
    </>
  );
};

export default Home;
