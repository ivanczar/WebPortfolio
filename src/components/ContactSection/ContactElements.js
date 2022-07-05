import styled from "styled-components";

export const ContactContainer = styled.div`
  /* color: #fff; */
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#000")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactFormWrapper = styled.div`
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
  /* margin-left: 200px; */
  font-size: 150px;
  line-height: 1.1;
  font-weight: 600;
  padding-top: 40px;
  /* margin-left: 380px; */
  color: ${({ lightText }) => (lightText ? "#000" : "#5865F2")};

  @media screen and (max-width: 480px) {
    /* padding-bottom: 20px; */
    font-size: 50px;
    align-self: center;
  }
`;

export const ContactForms = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background: #d1d1d1; */
  align-items: center;
  /* justify-content: space-around; */
  margin-left: 10px;


`;


export const EmailInput = styled.input`
  font-size: 20px;
  line-height: 24px;
  color: #000;
  text-align: justify;
  margin-left: 10px;
  margin-right: 10px;
  border-style: none;
  height: 70px;
  width: 600px;
  border-radius: 10px;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    
    width: 300px;
    height: 50px;
  }
  
`;

export const REInput = styled.input`
  font-size: 20px;
  line-height: 24px;
  color: #000;

  border-style: none;
  height: 70px;
  width: 600px;
  border-radius: 10px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    
    width: 300px;
    height: 50px;
  }
  `;

export const BodyInput = styled.textarea`
  font-size: 20px;
  line-height: 24px;
  color: #000;
  height: 200px;
  width: 600px;
  
  border-style: none;
  border-radius: 10px;
  resize: none;
  margin-top: 20px;
  
  @media screen and (max-width: 480px) {
    
    width: 300px;
    height: 100px;
  }
  
  `;

  export const ButtonLink = styled.a`
    text-decoration: none;
  `;
export const ContactSubmit = styled.button`

  display: flex;
  align-self: center;
  height: 70px;
  width: 300px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  background-color: #5865f2;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  padding: 10px;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    
    width: 300px;
    height: 50px;
    
  }

    &:hover {
    transition: all 0.1s ease-in-out;
    background: #fff;
    color: #000;
    cursor: pointer;
  }
`;
