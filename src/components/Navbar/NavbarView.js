import React from 'react';
import { FaBars } from 'react-icons/fa';
import Dropdown from './Dropdown';
import {
  Nav,
  NavbarContainer,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ExternalLinkIcon,
} from './NavbarElements';

const NavbarView = ({ toggle, toggleTheme, isDark, isEnglish, toggleLang }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='home'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                {isEnglish ? 'Home' : 'Inicio'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                {isEnglish ? 'About' : 'Acerca de mí'}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='projects'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
              >
                {isEnglish ? 'Projects' : 'Proyectos'}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <Dropdown
            toggleTheme={toggleTheme}
            isDark={isDark}
            isEnglish={isEnglish}
            toggleLang={toggleLang}
          />
          <NavBtn>
            <NavBtnLink
              href='https://drive.google.com/file/d/1zlnspDzMu733h6a3eSvcC7Yk3K52QBG7/view?usp=sharing'
              target='_blank'
            >
              CV
              <ExternalLinkIcon />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarView;
