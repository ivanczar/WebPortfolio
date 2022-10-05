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
    if (
      form.current.from_name.value === '' ||
      form.current.message.value === ''
    ) {
      toast.error('Please fill out all fields');
    } else {
      sendEmail();
    }
  };

  const form = useRef();

  const sendEmail = () => {
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
          toast.success('Email Sent!');
        },
        (error) => {
          console.log(error.text);
          toast.error('Error: Please try again later or contact on LinkedIn');
        }
      );
  };

  return (
    <>
      <ContactContainer id='contact'>
        <ContactFormWrapper>
          <Heading>CONTACT</Heading>
          <ContactForms>
            <form ref={form}>
              <EmailInput name='from_name' placeholder='Your Email Address' />
              <REInput name='subject' placeholder='Email Subject' />
              <BodyInput name='message' placeholder='Email Body' />
            </form>
            <ButtonLink>
              <ContactSubmit
                type='submit'
                onClick={() => {
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
