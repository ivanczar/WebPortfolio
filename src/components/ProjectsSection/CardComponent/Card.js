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
  GitLink
} from "./CardElements";
import { MdOpenInNew } from "react-icons/md";
import logo from "../../../images/projects/sporthub.png";
// import Card from "../components/Card";
const Card = () => {
  return (
    <>
      <CardContainer>
        <CardContentWrapper>
          <CardHeaderWrapper>
            <CardLogo src={logo}></CardLogo>

          </CardHeaderWrapper>

          <CardTextWrapper>
            <OpenIconWrapper>
              <GitLink href="https://github.com/ivanczar/SportsHub" target="_blank" rel='noreferrer'>

              <MdOpenInNew src={MdOpenInNew} />
              </GitLink>
            </OpenIconWrapper>
            <Heading>SportsHub</Heading>
            <CardText>
              SportHub allows athletes to host or join sporting events in their
              area. It contains a public chat feature, the ability to join teams,
              and customize your profile.
            </CardText>
          </CardTextWrapper>
          <TechIconWrapper>
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
            <TechIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          </TechIconWrapper>
        </CardContentWrapper>
      </CardContainer>
    </>
  );
};

export default Card;
