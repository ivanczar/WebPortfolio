import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  Heading,
  Subtitle,
  ProfilePic,
  ProfilePicWrapper,
  TechWrapper,

  // ArrowPic,
} from './InfoElements';
import Picture from '../../assets/images/about/profilePic.jpeg';
import { FaReact } from 'react-icons/fa';
import {FaJava} from "react-icons/fa";
import { FaNodeJs } from 'react-icons/fa';
import {SiPostgresql} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {DiDocker} from "react-icons/di";
import {SiGnubash} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
const InfoSection = () => {
  return (
    <>
      <InfoContainer id='about'>
        <InfoWrapper>
          <ProfilePicWrapper>
            {/* <ArrowPic src={Arrow}/> */}
            <ProfilePic src={Picture} />
          </ProfilePicWrapper>
          <Heading>About Me</Heading>
          <Subtitle>
            Hi! I'm Ivan, a Full Stack developer with industry experience
            building websites and web applications. I specialize in JavaScript
            and have experience working with Java and Python. I also has
            experience working with React and Nodejs.
            <br />
            In my free time, I enjoy learning about IoT, camping, and shredding
            on guitar. I am a highly motivated and organized team player with
            exposure to many different cultures.
          </Subtitle>
          <TechWrapper>
            <FaJava/>
            <FaReact />
            <FaNodeJs />
            <SiTypescript/>
            <SiPostgresql/>
            <SiMongodb/>
            <DiDocker/>
            <SiGnubash/>
          </TechWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
