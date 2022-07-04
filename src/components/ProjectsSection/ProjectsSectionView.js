import React from "react";
// ChipsContainer,
// ProjectImg,
import {
  ProjectsContainer,
  Heading,
  CardsContainer,

  ProjectsWrapper,
} from "./ProjectsSectionElements";
import Card from "./CardComponent/Card";
const ProjectsSectionView = () => {
  return (
    <>
      <ProjectsContainer id="work">
        <ProjectsWrapper>
          {/* <ProjectImg></ProjectImg> */}
          <Heading>PROJECTS</Heading>
          {/* <ChipsContainer></ChipsContainer> */}
          <CardsContainer>
            <Card/>
            <Card/>
            <Card/>
  
          </CardsContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSectionView;
