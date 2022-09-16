import styled from 'styled-components';
import { DarkTheme } from '../../themes';


export const InfoContainer = styled.div`
  color: ${DarkTheme.colors.white};
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#000')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;


export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 150px;
  /* line-height: ; */
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? DarkTheme.colors.black : DarkTheme.colors.purple};
  font-family: ${DarkTheme.fonts.roboto};
  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 50px;
    align-self: center;
  }
`;

export const Subtitle = styled.p`
  display: flex;
  font-size: 25px;
  line-height: 1cm;
  /* line-height: 24px; */
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
  font-family: ${DarkTheme.fonts.titillium};
`;

export const ProfilePicWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-left: 60%;
  @media screen and (max-width: 480px) {
    margin-left: 0;
  }
`;

export const ArrowPic = styled.img`
  padding-bottom: 10px;
  height: 100px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 100%;
  height: 200px;
`;
