import React from "react";
import { InfoContainer, InfoWrapper, Heading, Subtitle, ProfilePic, ProfilePicWrapper, ArrowPic } from "./InfoElements";
import Picture from "../../assets/images/about/profilePic.jpeg";
import Arrow from "../../assets/images/about/arrow-me.png";
const InfoSection = ({ id, heading, text }) => {
  return (
    <>
      <InfoContainer id="about">

        <InfoWrapper>
        <ProfilePicWrapper>
          <ArrowPic src={Arrow}/>
          <ProfilePic src={Picture}/>
        </ProfilePicWrapper>
          <Heading>ABOUT</Heading>
          <Subtitle>
            I am a full-time Software Engineering student with experience
            building mobile apps in React Native, using component libraries such
            as NativeBase, and connecting it to a NoSQL database such as
            Firebase. I have used PHP and Java in different projects to interact
            with SQL databases. I am currently building a web portfolio to
            improve my React skills, however this time I have chosen Styled
            Components to enhance my CSS skills. Make sure to connect with me as
            I will be posting regular updates! I am an extremely organized and
            motivated problem solver with exposure to many different cultures. I
            thrive in team environments where time is of the essence.
          </Subtitle>
        </InfoWrapper>
 
      </InfoContainer>
    </>
  );
};

export default InfoSection;
