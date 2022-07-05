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


const Card = ({logo, git, title, text, icons}) => {
// const {icons} = icons;





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
{/* pass array of languages as props, loop through them. If found, render icon */}
          <TechIconWrapper>
            {icons.map(icon => <TechIcon src={icon} />)}
            
            
          </TechIconWrapper>
          </CardFooter>
        </CardContentWrapper>
      </CardContainer>
    </>
  );
};

export default Card;
