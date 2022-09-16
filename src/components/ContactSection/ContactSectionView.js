import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
} from './ContactElements';

const ContactSectionView = () => {
  const handleSend = () => {
    notify();
    console.log('hndling');
    sendEmail();
  };

  const notify = () => toast.success('Email Sent!');
  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm(
        'service_wxxxmxg',
        'template_57tyaoh',
        form.current,
        'af56DOeaGgV914gA7'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('sent');
        },
        (error) => {
          console.log(error.text);
          console.log('rip');
        }
      );
    // e.target.reset();
  };

  return (
    <>
      <ContactContainer id='contact'>
        <ContactFormWrapper>
          <Heading>CONTACT</Heading>
          <ContactForms>
            <form ref={form}>
              <EmailInput name='from_name' placeholder='Your email' />
              <REInput name='subject' placeholder='Subject' />
              <BodyInput name='message' placeholder='Body' />
            </form>
            <ButtonLink>
              <ContactSubmit
                type='submit'
                onClick={() => {
                  // sendEmail();
                  handleSend();
                }}
              >
                Get in touch
              </ContactSubmit>
              <ToastContainer autoClose='2500' />
            </ButtonLink>
          </ContactForms>
        </ContactFormWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSectionView;
