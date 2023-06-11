import React from 'react';
import { ChipContainer, Label } from './ChipElements';
export const Chip = ({ label }) => {
  return (
    <ChipContainer>
      <Label>{label}</Label>
    </ChipContainer>
  );
};

export default Chip;
