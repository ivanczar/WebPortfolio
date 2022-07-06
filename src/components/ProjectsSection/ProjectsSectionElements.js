import styled from "styled-components";
import { DarkTheme } from "../../themes";

export const ProjectsContainer = styled.div`
  color: ${DarkTheme.colors.white};
  background: ${({ lightBg }) =>
    lightBg ? DarkTheme.colors.white : DarkTheme.colors.grey};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 50px;
`;

export const Heading = styled.h1`
  font-size: 150px;
  line-height: 1.1;
  font-weight: 600;
  font-family: ${DarkTheme.fonts.roboto};

  color: ${({ lightText }) =>
    lightText ? DarkTheme.colors.black : DarkTheme.colors.purple};

  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 50px;
    align-self: center;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 30px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  @media screen and (max-width: 480px) {
    
    display: grid;
  }
`;
