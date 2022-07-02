import React from "react";
// import Video from "../../videos/HeroBg.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  SocialsWrapper,
  SocialsIcons,
  SocialsText,
  SocialsLink,
} from "./HeroElements";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Ivan Czar</HeroH1>
        <HeroP>Software Engineer Graduate</HeroP>
      </HeroContent>
      <SocialsWrapper>
        <SocialsIcons>
          <SocialsLink to="/resume">
            <FaGithub></FaGithub>
          </SocialsLink>
          <SocialsLink to="/resume">
            <FaLinkedin></FaLinkedin>
          </SocialsLink>
        </SocialsIcons>
        <SocialsText>Connect With me!</SocialsText>
      </SocialsWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
