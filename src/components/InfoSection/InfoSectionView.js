import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  Heading,
  Subtitle,
  ProfilePic,
  ProfilePicWrapper,
  // ArrowPic,
} from './InfoElements';
import Picture from '../../assets/images/about/profilePic.jpeg';
// import Arrow from "../../assets/images/about/arrow-me.png";
const InfoSection = () => {
  return (
    <>
      <InfoContainer id='about'>
        <InfoWrapper>
          <ProfilePicWrapper>
            {/* <ArrowPic src={Arrow}/> */}
            <ProfilePic src={Picture} />
          </ProfilePicWrapper>
          <Heading>ABOUT</Heading>
          <Subtitle>
            Hi! I'm Ivan, a Full Stack developer with industry experience building
            websites and web applications. I specialize in JavaScript and have
            experience working with Java and Python. I also has experience
            working with React and Nodejs.
            <br />
            In my free time, I enjoy learning about IoT, camping, and
            shredding on guitar. I am a highly motivated and organized team
            player with exposure to many different cultures.
          </Subtitle>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
