import styled from 'styled-components';
import { DarkTheme, LightTheme } from '../../themes';
import { Link as LinkS } from 'react-scroll';
import blobsDesk from '../../assets/images/hero/headerDark.svg';
import blobsDeskLight from '../../assets/images/hero/headerLight.svg';
import blobsMobile from '../../assets/images/hero/mobileHeaderDark.svg';
import blobsMobileLight from '../../assets/images/hero/mobileHeaderLight.svg';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
  background-image: url(${({ theme }) =>
    theme === LightTheme ? blobsDeskLight : blobsDesk});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 780px) {
    background-image: url(${({ theme }) =>
      theme === LightTheme ? blobsMobileLight : blobsMobile});
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.heroText};
  font-size: 100px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.roboto};

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 52px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.heroText};
  font-size: 30px;
  text-align: center;
  max-width: 600px;
  font-family: ${DarkTheme.fonts.roboto};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SocialsWrapper = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding-top: 40%;
  }
`;

export const SocialsIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialsText = styled.p`
  padding-top: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${DarkTheme.fonts.roboto};

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialsLink = styled.a`
  color: ${({ theme }) => theme.colors.icons};
  font-size: 2.5rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  &:hover {
    transition: all 0.1s ease-in-out;
    color: ${({ theme }) => theme.colors.navButton};
  }
`;
export const NavLinks = styled(LinkS)`
  color: ${({ theme }) => theme.colors.icons};
  /* display: flex; */
  /* align-items: center; */
  text-decoration: none;
  /* padding: 0 3rem; */
  /* height: 100%; */
  /* font-family: ${DarkTheme.fonts.roboto}; */
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.navButton};
  }

  &.active {
    border-bottom: 3px solid   color: ${({ theme }) => theme.colors.primary};

  }
`;
