import React from 'react';
import {
  CardContainer,
  TitleLinkWrapper,
  TextWrapper,
  ChipsWrapper,
  Title,
  Link,
  Text,
  Icon,
} from './ProjectCardElements';
import Chip from '../Chip/ChipView';
const ProjectCard = ({ title, chips, description, link }) => {
  return (
    <CardContainer>
      <TitleLinkWrapper>
        <Title>{title}</Title>
        <Link href={link} target='_blank'>
          <Icon></Icon>
        </Link>
      </TitleLinkWrapper>
      <ChipsWrapper>
        {chips.map((label) => (
          <Chip label={label} />
        ))}
      </ChipsWrapper>

      <TextWrapper>
        <Text>{description}</Text>
      </TextWrapper>
    </CardContainer>
  );
};

export default ProjectCard;
