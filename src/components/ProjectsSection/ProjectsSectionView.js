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
            />

            <Card 
            logo={cologo}
              git={"https://github.com/ivanczar/CabsOnline"}
              title={"CabsOnline"}
              text={
                "CabsOnline allows customers to book rides, and admins to view bookings."
              } />

            <Card  logo={bjlogo}
              git={"https://github.com/ivanczar/BlackJack-Card-Game"}
              title={"BlackJack"}
              text={
                "An interactive UI blackjack game built with java."
              }/>
          </CardsContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSectionView;
