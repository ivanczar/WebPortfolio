import styled from "styled-components";
import { DarkTheme } from "../../themes";
export const FooterContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? DarkTheme.colors.black : DarkTheme.colors.purple)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

export const SocialsLink = styled.a`
  color: ${DarkTheme.colors.black};
  font-size: 2.5rem;
  text-decoration: none;
  padding: 0 1rem;
  &:hover {
    transition: all 0.1s ease-in-out;
    color: ${DarkTheme.colors.white};
  }
`;

export const Line = styled.hr`
  margin-bottom: 10px;
`;

export const Copyright = styled.p`
  color: ${DarkTheme.colors.black};
  font-weight: bold;
  font-family: ${DarkTheme.fonts.roboto};
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SocialsIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CopyrightWrapper = styled.div`
  margin-top: 50px;
`;
