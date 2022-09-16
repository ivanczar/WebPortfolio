import styled from "styled-components";
import { DarkTheme } from "../../../../themes";

export const CardContainer = styled.div`
  display: flex;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  background: ${DarkTheme.colors.cardBackground};
  padding: 20px;

  &:hover {
    transition: all 0.1s ease-in-out;
    border-style: solid;
    border-width: 2px;
    border-color: ${DarkTheme.colors.purple};
  }

`;

export const CardContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${DarkTheme.colors.cardHeader};
  width: 100%;
  height: 30%;
  border-radius: 20px;
`;
export const CardLogo = styled.img`
  width: 100px;
  height: 100px;
`;
export const CardTextWrapper = styled.div`
  margin-left: 20px;
`;

export const OpenIconWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  &:hover {
    transition: all 0.1s ease-in-out;

    cursor: pointer;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  margin-top: auto;
`;

export const TechIconWrapper = styled.div`
  height: 55px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background: ${DarkTheme.colors.black};
  align-items: center;
  border-radius: 20px;
`;

export const GitLink = styled.a`
  text-decoration: none;
  color: ${DarkTheme.colors.white};
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: ${DarkTheme.colors.white};
  font-family: ${DarkTheme.fonts.roboto};
`;

export const CardText = styled.p`
font-family: ${DarkTheme.fonts.roboto};
margin-top: 20px;
font-size: 18px;
font-family: ${DarkTheme.fonts.titillium};;
`;


export const TechIcon = styled.img`
  height: 30px;
`;
