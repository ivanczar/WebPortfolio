import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
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
  color: #fff;
  font-size: 100px;
  text-align: center;


  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SocialsWrapper = styled.div`
  margin-top: 40%;
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
  /* display: flex; */
  padding-top: 10px;
  font-size: 1rem;
  color: #5865F2;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SocialsLink = styled.a`
  color: #fff;
  
  font-size: 2.5rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

