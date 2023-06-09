import React from 'react';
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
  NavLinks,
} from './HeroElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
const HeroSectionView = () => {
  return (
    <HeroContainer id='home'>
      <HeroContent
        as={motion.div}
        initial={{ y: -500 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        
      >
        <HeroH1>Ivan Czar</HeroH1>

        <HeroP>Software Engineer</HeroP>
      </HeroContent>
      <SocialsWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
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
          <SocialsLink>
            <NavLinks
              to='contact'
              smooth={true}
              duration={1000}
              spy={true}
              exact='true'
              offset={-80}
            >
              <AiOutlineMail />
            </NavLinks>
          </SocialsLink>
        </SocialsIcons>
        <SocialsText>Connect</SocialsText>
      </SocialsWrapper>
    </HeroContainer>
  );
};

export default HeroSectionView;
