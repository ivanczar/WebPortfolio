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
  ButtonLink,
} from "./ContactElements";

const ContactSectionView = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactFormWrapper>
          <Heading>CONTACT</Heading>
          <ContactForms>
            <EmailInput placeholder="Your email" />
            <REInput placeholder="Subject" />
            <BodyInput placeholder="Body" />
            <ButtonLink href="mailto:ivanczar2013@gmail.com">
              <ContactSubmit>Get in touch</ContactSubmit>
            </ButtonLink>
          </ContactForms>
        </ContactFormWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSectionView;
