import React from "react";

import {
  ProjectsContainer,
  Heading,
  CardsContainer,
  // ChipsContainer,
  ProjectsWrapper,
} from "./ProjectsSectionElements";
import Card from "./components/CardComponent/Card";

import shlogo from "../../assets/images/projects/sporthub.png";
import cologo from "../../assets/images/projects/cabsonline.png";
import bjlogo from "../../assets/images/projects/blackjack.png";
const ProjectsSectionView = () => {

  const shIcons = ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"];
  const coIcons = [ "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"];
  const bjIcons = [  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"];

  return (
    <>
      <ProjectsContainer id="work">
        <ProjectsWrapper>
          <Heading>PROJECTS</Heading>
          {/* <ChipsContainer></ChipsContainer> */}
          <CardsContainer>
            <Card
              logo={shlogo}
              git={"https://github.com/ivanczar/SportsHub"}
              title={"SportsHub"}
              text={
                "SportHub allows athletes to host or join sporting events in their area. It contains a public chat feature, the ability to join teams,and customize your profile"
              }
              icons ={shIcons}
            />

            <Card 
            logo={cologo}
              git={"https://github.com/ivanczar/CabsOnline"}
              title={"CabsOnline"}
              text={
                "CabsOnline allows customers to book rides, and admins to view bookings."
              }
              icons= {coIcons}
               />

            <Card  logo={bjlogo}
              git={"https://github.com/ivanczar/BlackJack-Card-Game"}
              title={"BlackJack"}
              text={
                "An interactive UI blackjack game built with java."
              }
              icons = {bjIcons}
              />
          </CardsContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSectionView;
