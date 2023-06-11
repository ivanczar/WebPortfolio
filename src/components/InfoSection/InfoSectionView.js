import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  Heading,
  Subtitle,
  ProfilePicWrapper,
  TechWrapper,

  // ArrowPic,
} from './InfoElements';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { DiDocker } from 'react-icons/di';
import { SiGnubash } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
const InfoSection = () => {
  return (
    <>
      <InfoContainer id='about'>
        <InfoWrapper>
          <ProfilePicWrapper
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{delay: 1}}
          >
            {/* <ArrowPic src={Arrow}/> */}
            {/* <ProfilePic src={Picture} /> */}
          </ProfilePicWrapper>
          <Heading
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </Heading>
          <Subtitle
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Hi! I'm Ivan, a Full Stack developer with industry experience
            building websites and web applications. I specialize in JavaScript
            and have experience working with Java and Python. I also has
            experience working with React and Nodejs.
            <br />
            In my free time, I enjoy learning about IoT, camping, and shredding
            on guitar. I am a highly motivated and organized team player with
            exposure to many different cultures.
          </Subtitle>
          <TechWrapper
            as={motion.div}
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            
          >
            <FaJava />
            <FaReact />
            <FaNodeJs />
            <SiTypescript />
            <SiPostgresql />
            <SiMongodb />
            <DiDocker />
            <SiGnubash />
          </TechWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
