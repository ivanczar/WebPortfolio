import styled from 'styled-components';
import { DarkTheme } from '../../themes';

export const ContactContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#001220')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 100vh
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
  font-size: 150px;
  line-height: 1.1;
  font-weight: 600;
  padding-top: 40px;
  color: ${({ lightText }) =>
    lightText ? DarkTheme.colors.black : DarkTheme.colors.purple};
  font-family: ${DarkTheme.fonts.roboto};

  @media screen and (max-width: 480px) {
    font-size: 50px;
    align-self: center;
  }
`;

export const ContactForms = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  /* justify-content: center; */
  /* align-self: center; */
  /* margin-left: 10px; */
  /* @media screen and (max-width: 480px) {
  margin-left: 20px;
  } */
`;

export const EmailInput = styled.input`
  font-size: 20px;
  /* line-height: 24px; */
  color: ${DarkTheme.colors.black};
  text-align: justify;
  /* margin-left: 10px; */
  /* margin-right: 10px; */
  border-style: none;
  height: 70px;
  width: 600px;
  border-radius: 10px;
  margin-top: 40px;
  margin-left: 200px;
  font-family: ${DarkTheme.fonts.titillium};
  &:focus{
    outline: none !important;
    border:3px solid ${DarkTheme.colors.purple};

  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 50px;
    margin-left: 30px;
  }
`;

export const REInput = styled.input`
  font-size: 20px;
  line-height: 24px;
  color: ${DarkTheme.colors.black};
  font-family: ${DarkTheme.fonts.titillium};
  margin-left: 200px;
  border-style: none;
  height: 70px;
  width: 600px;
  border-radius: 10px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 50px;
    margin-left:30px;
  }
    &:focus{
    outline: none !important;
    border:3px solid ${DarkTheme.colors.purple};

  }
`;

export const BodyInput = styled.textarea`
  font-size: 20px;
  line-height: 24px;
  color: ${DarkTheme.colors.black};
  height: 200px;
  width: 600px;
  font-family: ${DarkTheme.fonts.titillium};
  margin-left: 200px;
  border-style: none;
  border-radius: 10px;
  resize: none;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 100px;
    margin-left: 30px;
  }
  &:focus{
    outline: none !important;
    border:3px solid ${DarkTheme.colors.purple};

  }
`;

export const ActualForm = styled.form``;

export const ButtonLink = styled.a`
  text-decoration: none;
`;
export const ContactSubmit = styled.button`
  display: flex;
  align-self: center;
  height: 60px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  background-color: ${DarkTheme.colors.purple};
  color: ${DarkTheme.colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  /* padding: 10px; */
  margin-top: 40px;
  font-family: ${DarkTheme.fonts.roboto};
  margin-right: 50px;
  

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 50px;
    margin-left: 60px;
  }

  &:hover {
    transition: all 0.1s ease-in-out;
    background: ${DarkTheme.colors.white};
    color: ${DarkTheme.colors.black};
    cursor: pointer;
  }
`;
