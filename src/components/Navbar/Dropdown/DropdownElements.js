import styled from "styled-components";
import {FaGlobeAmericas} from 'react-icons/fa'

export const DropdownContainer = styled.div`


`;

export const DropdownBtn = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  outline: none;
  color: #fff;
  padding: 14px 16px;
  background-color: inherit;
  position: relative;
  margin-top: 20px;

  &:hover {
    color: #5865F2;
  }
  
  
`;

export const GlobeIcon = styled(FaGlobeAmericas)`
    font-size: 1.3rem;
    
`;

export const ItemsWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: relative;
  background-color: #000;
  z-index: 1;  
`;

export const Item = styled.a`
  float: none;
  color: #fff;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
  text-align: left;
`;
