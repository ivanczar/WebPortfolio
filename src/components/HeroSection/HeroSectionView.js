import React from "react";
// import Video from "../../videos/HeroBg.mp4";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  SocialsWrapper,
  SocialsIcons,
  SocialsText,
  SocialsLink,
} from "./HeroElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const HeroSectionView = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>Ivan Czar</HeroH1>
        <HeroP>Software Engineer</HeroP>
      </HeroContent>
      <SocialsWrapper>
        <SocialsIcons>
          <SocialsLink href="https://github.com/ivanczar" target="_blank" rel='noreferrer'>
            <FaGithub></FaGithub>
          </SocialsLink>
          <SocialsLink href="https://www.linkedin.com/in/ivanczar" target="_blank" rel='noreferrer'>
            <FaLinkedin></FaLinkedin>
          </SocialsLink>
          <SocialsLink href="mailto:ivanczar2013@gmail.com">
            <AiOutlineMail></AiOutlineMail>
          </SocialsLink>
        </SocialsIcons>
        <SocialsText>Connect With me!</SocialsText>
      </SocialsWrapper>
    </HeroContainer>
  );
};

export default HeroSectionView;