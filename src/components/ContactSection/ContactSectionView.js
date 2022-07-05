import React from "react";
import {
  ContactContainer,
  Heading,
  ContactFormWrapper,
  ContactForms,
  EmailInput,
  REInput,
  BodyInput,
  ContactSubmit,
} from "./ContactElements";
const ContactSectionView = () => {
  return (
    <>
      <ContactContainer id="contact">
        <Heading>CONTACT</Heading>
        <ContactFormWrapper>
          <ContactForms>
            <EmailInput placeholder="Your email"/>
            <REInput placeholder="Subject"/>
            <BodyInput placeholder="Body"/>
            <ContactSubmit>Get in touch</ContactSubmit>
          </ContactForms>
          
        </ContactFormWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSectionView;
