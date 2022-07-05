import React from "react";
import {
  FooterContainer,
  SocialsLink,
  SocialsIcons,
  SocialsContainer,
  Line,
  Copyright,
  CopyrightWrapper,
} from "./FooterElements";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const FooterSectionView = () => {
  return (
    <>
      <FooterContainer>
        <SocialsContainer>
          <SocialsIcons>
            <SocialsLink
              href="https://github.com/ivanczar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub></FaGithub>
            </SocialsLink>
            <SocialsLink
              href="https://www.linkedin.com/in/ivanczar"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </SocialsLink>
            <SocialsLink href="mailto:ivanczar2013@gmail.com">
              <AiOutlineMail></AiOutlineMail>
            </SocialsLink>
          </SocialsIcons>
        </SocialsContainer>
        <CopyrightWrapper>
          <Line />
          <Copyright>Built from the ground up by Ivan Czar</Copyright>
          <Copyright>© Copyright 2022 - All rights reserved</Copyright>
        </CopyrightWrapper>
      </FooterContainer>
    </>
  );
};

export default FooterSectionView;
