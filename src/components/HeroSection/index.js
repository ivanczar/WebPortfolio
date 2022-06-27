import React from "react";
import Video from "../../videos/HeroBg.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Ivan Czar</HeroH1>
        <HeroP>Software Engineer Graduate</HeroP>
        {/* Social Media links here */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
