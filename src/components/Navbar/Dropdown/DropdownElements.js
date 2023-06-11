import styled from "styled-components";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

import { DarkTheme } from "../../../themes";

export const DropdownContainer = styled.div``;

export const DropdownBtn = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 14px 16px;
  background-color: inherit;
  position: relative;
  margin-top: 20px;

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



