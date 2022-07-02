import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 150px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#000" : "#5865F2")};

  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 50px;
    align-self: center;
  }
`;

export const Subtitle = styled.p`
display: flex;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 480px) {
    text-align: justify;
    /* text-justify: inter-word; */
  }
`;

export const ProfilePicWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const ProfilePic = styled.img`
border-radius: 100%;
height: 200px;
margin-left: 60%;
/* margin-top: 20px; */

`;
