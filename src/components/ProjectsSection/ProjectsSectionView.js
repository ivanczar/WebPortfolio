import React from 'react';
import { InfoContainer, Heading, CardsWrapper } from './ProjectsElements';
import ProjectCard from './components/ProjectCard/ProjectCardView';
import { projects } from './data/projectsData';

import { motion } from 'framer-motion';
const ProjectsSection = ({ isEnglish }) => {
  return (
    <>
      <InfoContainer id='projects'>
        <Heading
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {isEnglish ? 'Projects' : 'Proyectos'}
        </Heading>

        <CardsWrapper>
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              chips={project.chips}
              link={project.link}
              description={project.description}
            />
          ))}
        </CardsWrapper>
      </InfoContainer>
    </>
  );
};

export default ProjectsSection;
