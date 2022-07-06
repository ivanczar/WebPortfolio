import styled from "styled-components";
import { FaGlobeAmericas } from "react-icons/fa";
import { DarkTheme } from "../../../themes";

export const DropdownContainer = styled.div``;

export const DropdownBtn = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  color: ${DarkTheme.colors.white};
  padding: 14px 16px;
  background-color: inherit;
  position: relative;
  margin-top: 20px;

  &:hover {
    color: ${DarkTheme.colors.purple};
  }
`;

export const GlobeIcon = styled(FaGlobeAmericas)`
  font-size: 1.3rem;
`;

export const ItemsWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: relative;
  background-color: ${DarkTheme.colors.black};
  z-index: 1;
`;

export const Item = styled.a`
  float: none;
  color: ${DarkTheme.colors.white};
  padding: 10px 14px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    cursor: pointer;
    color: ${DarkTheme.colors.purple};
  }
`;
