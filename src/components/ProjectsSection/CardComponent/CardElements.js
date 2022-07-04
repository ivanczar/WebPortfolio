import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 300px;
  height: 500px;
  border-radius: 20px;
  background: #1d1d1d;

  &:hover {
    transition: all 0.1s ease-in-out;

    border-style: solid;
    border-width: 1px;
    border-color: #fff;
  }
`;

export const CardContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  
`;

export const CardHeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
  background: #fff;

  width:100%;
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

  export const TechIconWrapper = styled.div`
  margin-top: 55%;
  height: 55px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    background: #000;
    align-items: center;
    border-radius: 20px;
    
  `;


export const GitLink = styled.a`
  text-decoration: none;
  color: #fff;
  
`;



export const Heading = styled.h1`
  font-size: 30px;
  color: #fff;

`;

export const CardText = styled.p`
padding-top: 20px;

`;

export const TechIcon = styled.img`
  height: 30px;
  
`;
