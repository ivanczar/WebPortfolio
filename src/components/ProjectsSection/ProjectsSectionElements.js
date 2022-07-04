import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#0c0c0c")};

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
  /* padding: 0 24px; */
  /* justify-content: center; */
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

// export const ProjectImg = styled.img`

// `;

export const CardsContainer = styled.div`

  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  /* background: #000; */
  
`;

// export const ChipsContainer = styled.div`

// `;