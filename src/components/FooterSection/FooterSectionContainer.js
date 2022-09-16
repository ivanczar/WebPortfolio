import React from 'react';
import FooterSectionView from './FooterSectionView';

const getYear = () => {
  const d = new Date();
  let year = d.getFullYear();
  return year;
};

const FooterSectionContainer = () => {
  return <FooterSectionView year={getYear()} />;
};

export default FooterSectionContainer;
