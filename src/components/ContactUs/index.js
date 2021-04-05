import React from 'react';
import emailjs from "emailjs-com";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  TextArea,
  FormButton,
  Text
} from './ContactUsElements';
import Swal from 'sweetalert2'

const ContactUs = () => {

  function opensweetalert()
  {
    Swal.fire({
      title: '',
      text: "Thank you for reaching out to us. We will get back to you shortly.",
      type: 'success',
      
    })
  }



  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3coqm38', 'template_ex5aada', e.target, 'user_elemesRZhjLVOQ8OWfUw4')
        .then((result) => {
            console.log(result.text);
            opensweetalert();
            // onShowAlert("Thank you for reaching out to us. We will get back to you shortly.");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to='/'>capturebay</Icon>
          <FormContent>
            <Form onSubmit={sendEmail} action='#'>
              <FormH1>Contact Us</FormH1>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <FormInput type='text' name="name" required />
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type='email' name="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" required />
              <FormLabel htmlFor='subject'>Subject</FormLabel>
              <FormInput type='text' name="subject" required />
              <FormLabel htmlFor='message'>Message</FormLabel>
              <TextArea type='textarea' name="message" required />
              <FormButton type='submit'>Continue</FormButton>
              
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
     
     
    </div>
  );
};

export default ContactUs;
