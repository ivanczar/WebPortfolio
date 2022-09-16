import React from 'react';
import {
  FooterContainer,
  SocialsLink,
  SocialsIcons,
  SocialsContainer,
  Copyright,
  CopyrightWrapper,
} from './FooterElements';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { ThemeProvider } from 'styled-components';


const FooterSectionView = (props) => {
  return (
    
    
    <FooterContainer>
        <SocialsContainer>
          <SocialsIcons>
            <SocialsLink
              href='https://github.com/ivanczar'
              target='_blank'
              rel='noreferrer'
              >
              <FaGithub></FaGithub>
            </SocialsLink>
            <SocialsLink
              href='https://www.linkedin.com/in/ivanczar'
              target='_blank'
              rel='noreferrer'
              >
              <FaLinkedin></FaLinkedin>
            </SocialsLink>
              <ThemeProvider>
            <div>

            <SocialsLink href='mailto:ivanczar2013@gmail.com'>
              <AiOutlineMail></AiOutlineMail>
            </SocialsLink>
            </div>
              </ThemeProvider>
          </SocialsIcons>
        </SocialsContainer>
        <CopyrightWrapper>
          
          <Copyright>Built from the ground up by Ivan Czar</Copyright>
          <Copyright>© Copyright {props.year}</Copyright>
        </CopyrightWrapper>
      </FooterContainer>

  );
};

export default FooterSectionView;
