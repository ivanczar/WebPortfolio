import React from "react";
import {
  CardContainer,
  CardLogo,
  Heading,
  CardText,
  TechIconWrapper,
  TechIcon,
  OpenIconWrapper,
  CardContentWrapper,
  CardHeaderWrapper,
  CardTextWrapper,
  GitLink,
  CardFooter
} from "./CardElements";
import { MdOpenInNew } from "react-icons/md";


const Card = ({logo, git, title, text}) => {
  return (
    <>
      <CardContainer>
        <CardContentWrapper>
          <CardHeaderWrapper>
            <CardLogo src={logo}></CardLogo>

          </CardHeaderWrapper>

          <CardTextWrapper>
            <OpenIconWrapper>
              <GitLink href={git} target="_blank" rel='noreferrer'>

              <MdOpenInNew src={MdOpenInNew} />
              </GitLink>
            </OpenIconWrapper>
            <Heading>{title}</Heading>
            <CardText>
              {text}
            </CardText>
          </CardTextWrapper>
          <CardFooter>

          <TechIconWrapper>
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          </TechIconWrapper>
          </CardFooter>
        </CardContentWrapper>
      </CardContainer>
    </>
  );
};

export default Card;
