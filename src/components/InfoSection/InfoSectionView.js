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
            Hi! my name is Ivan and i am a Software Engineering student from Argentina, based in Auckland, New Zealand.
            I have experience building mobile apps in React Native using component libraries such
            as NativeBase, and connecting it to a NoSQL database such as
            Firebase. I have also used PHP and Java in different projects to interact
            with SQL databases.  
            <br/>
            I like playing guitar, working out, and being outdoors. I recently got a RaspberryPi 4 and made it 
            into a homelab using docker containers to host services such as: 
            a Nodejs server, PostgreSQL database, DNS server, and a network-wide adblocker.

          </Subtitle>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
