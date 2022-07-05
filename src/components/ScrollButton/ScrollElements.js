import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  position: fixed;
  right: 20px;
  bottom: 40px;
  height: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  opacity: 0.6;

  &:hover {
   opacity: 1;
  }
  
  `;


