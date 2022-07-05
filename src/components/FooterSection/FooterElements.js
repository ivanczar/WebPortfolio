import styled from "styled-components";
export const FooterContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#5865F2")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

export const SocialsLink = styled.a`
  color: #000;
  font-size: 2.5rem;
  text-decoration: none;
  padding: 0 1rem;
  &:hover {
    transition: all 0.1s ease-in-out;
color: #fff;
  }
`;

export const Line = styled.hr`
  margin-bottom: 10px;
`;

export const Copyright = styled.p`
  color: #000;
  font-weight: bold;
`;

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SocialsIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CopyrightWrapper = styled.div`
  margin-top: 50px;
`;
