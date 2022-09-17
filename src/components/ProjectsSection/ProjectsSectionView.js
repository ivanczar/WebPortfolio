import React from 'react';

import {
  ProjectsContainer,
  Heading,
  CardsContainer,
  // ChipsContainer,
  ProjectsWrapper,
} from './ProjectsSectionElements';
import Card from './components/CardComponent/Card';

import shlogo from '../../assets/images/projects/sporthub.png';
import cologo from '../../assets/images/projects/cabsonline.png';
import bjlogo from '../../assets/images/projects/blackjack.png';
import wplogo from '../../assets/images/about/profilePic.jpeg';

const ProjectsSectionView = () => {
  const shIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  ];
  const coIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  ];
  const bjIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  ];
  const wpIcons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.worldvectorlogo.com/logos/styled-components-1.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  ];

  return (
    <>
      <ProjectsContainer  id='work'>
        <ProjectsWrapper >
          <Heading>PROJECTS</Heading>
          {/* <ChipsContainer></ChipsContainer> */}
          <CardsContainer key={"test"}>
            <Card
           
              logo={shlogo}
              git={'https://github.com/ivanczar/SportsHub'}
              title={'SportsHub'}
              text={
                'Sportshub allows athletes to browse, join or host sporting events in their area. It also contains a public chat feature and the ability to join teams and customize your profile.'
              }
              icons={shIcons}
            />

            <Card
              logo={cologo}
              git={'https://github.com/ivanczar/CabsOnline'}
              title={'CabsOnline'}
              text={
                'CabsOnline allows customers to book rides while letting admins view and manage bookings. It uses Web2.0 AJAX and PHP to handle the booking process and uses a MySQL database to store the data.'
              }
              icons={coIcons}
            />

            <Card
              logo={bjlogo}
              git={'https://github.com/ivanczar/BlackJack-Card-Game'}
              title={'BlackJack'}
              text={
                'An interactive blackjack game built with Java and Swing. Users can login and play against the AI. A scoreboard and all user info is saved in a SQL database via JDBC.'
              }
              icons={bjIcons}
            />
            <Card
              logo={wplogo}
              git={'https://github.com/ivanczar/ivanczar.github.io'}
              title={'Website Portfolio'}
              text={
                'A responsive website portfolio built with React and Styled Components. Features include animations, smoothscroll, themes, and emailjs contact form'
              }
              icons={wpIcons}
            />
          </CardsContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSectionView;
