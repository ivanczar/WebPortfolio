import React from "react";
import {
  DropdownContainer,
  DropdownBtn,
  ItemsWrapper,
  Item,
  GlobeIcon,
} from "./DropdownElements";
import { useState } from "react";





const DropdownView = () => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
      };
  return (
    <>
      <DropdownContainer>
        <DropdownBtn onClick={toggle}>
            <GlobeIcon/>
        </DropdownBtn>
        <ItemsWrapper show={show}>
          <Item onClick={toggle}>English</Item>
          <Item onClick={toggle}>Spanish</Item>
        </ItemsWrapper>
      </DropdownContainer>
    </>
  );
};

export default DropdownView;
