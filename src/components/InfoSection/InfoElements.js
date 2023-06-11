import styled from 'styled-components';

export const InfoContainer = styled.div`

  background: ${({ theme }) => theme.colors.secondary};
  padding: 10rem 11rem;
  @media screen and (max-width: 780px) {
    padding: 3rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
  }
`;


export const Heading = styled.h1`
  font-size: 10em;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.roboto};
  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 4em;
    align-self: center;
  }
`;

export const Subtitle = styled.p`
  display: flex;
  font-size: 1.5em;
  line-height: 1.5em;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 3rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
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
