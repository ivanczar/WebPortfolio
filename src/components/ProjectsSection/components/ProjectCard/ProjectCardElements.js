import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 17rem;
  min-width: 30rem;
  max-width: 10rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 2rem;
  margin-top: 4rem;
  // margin-right: 4rem;

  @media screen and (max-width: 768px) {
    min-width: 100%;
    height: 100%;
  }
`;

export const TitleLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.roboto};
`;

export const Link = styled.a``;

export const Icon = styled(FaExternalLinkAlt)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  @media screen and (max-width: 480px) {
    overflow: scroll;

  }
`;

export const TextWrapper = styled.div`
  overflow: hidden;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
`;
