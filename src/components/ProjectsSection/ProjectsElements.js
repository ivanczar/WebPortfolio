import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 10rem 23rem;
  @media screen and (max-width: 768px) {
    padding: 3rem 3rem;
    display: flex;
    flex-direction: column;

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

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
