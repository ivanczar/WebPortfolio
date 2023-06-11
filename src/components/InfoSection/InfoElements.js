import styled from 'styled-components';

export const InfoContainer = styled.div`

  background: ${({ theme }) => theme.colors.secondary};
  padding: 10rem 23rem;
  @media screen and (max-width: 780px) {
    padding: 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


export const Heading = styled.h1`
  font-size: 150px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.roboto};
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
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
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

export const TechWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  border: 1px solid;
  height: 3.5rem;
  width: 50%;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    width: 100%;
    height: 5rem;
  }
`;
