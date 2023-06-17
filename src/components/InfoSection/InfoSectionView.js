import React from 'react';
import { InfoContainer, Heading, Subtitle, TechWrapper } from './InfoElements';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { DiDocker } from 'react-icons/di';
import { SiGnubash } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
const InfoSection = ({ isEnglish }) => {
  return (
    <>
      <InfoContainer id='about'>
        <Heading
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {isEnglish ? 'About Me' : 'Acerca de mí'}
        </Heading>

        {isEnglish ? (
          <Subtitle
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Hi! I'm Ivan, a Full Stack developer with industry experience
            building websites and web applications. I specialize in JavaScript
            and have experience working with Java and Python. I also has
            experience working with React and Nodejs.
            <br /> In my free time, I enjoy learning about IoT, camping, and
            shredding on guitar. I am a highly motivated and organized team
            player with exposure to many different cultures.
          </Subtitle>
        ) : (
          <Subtitle
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Hola! Soy Iván, un desarrollador Full Stack con experiencia en la
            industria construyendo sitios web y aplicaciones web. Me especializo
            en JavaScript y tengo experiencia trabajando con Java y Python.
            También tengo experiencia trabajando con React y Nodejs.
            <br /> En mi tiempo libre, me gusta aprender sobre IoT, acampar y
            tocar la guitarra. Me gusta trabajar en equipo, soy altamente
            motivado y organizado con exposición a muchas culturas diferentes.
          </Subtitle>
        )}

        <TechWrapper
          as={motion.div}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <FaJava />
          <FaReact />
          <FaNodeJs />
          <SiTypescript />
          <SiPostgresql />
          <SiMongodb />
          <DiDocker />
          <SiGnubash />
        </TechWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
