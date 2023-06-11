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
                offset={-80}
              >
                {isEnglish ? 'About' : 'Acerca de mí'}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              href='https://drive.google.com/file/d/1MmZOX9T7ng9cm21bnEWueOiHbnN7da80/view?usp=sharing'
              target='_blank'
            >
              CV
              <ExternalLinkIcon />
              
            </NavBtnLink>
          </NavBtn>
          <Dropdown
            toggleTheme={toggleTheme}
            isDark={isDark}
            isEnglish={isEnglish}
            toggleLang={toggleLang}
          />
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarView;
