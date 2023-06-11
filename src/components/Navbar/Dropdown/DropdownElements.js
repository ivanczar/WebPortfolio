import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

import { DarkTheme } from "../../../themes";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;


  @media screen and (max-width: 768px) {
    justify-content: space-between;
    margin-left: 0;

  }



`;

export const DropdownBtn = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 14px 16px;
  background-color: inherit;
  position: relative;

  &:hover {
    color: ${DarkTheme.colors.purple};
  }
`;

export const DarkIcon = styled(MdOutlineDarkMode)`
  font-size: 1.3rem;

`;
export const LightIcon = styled(BsSun)`
  font-size: 1.3rem;

`;



