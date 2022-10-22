import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
export default function Contact() {
  const formInitialDetails={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    message:''
  }
  const [formDetails, setFormDetails]=useState(formInitialDetails)
  const [buttonText, setButtonText]=useState('Send');
  const [status,setStatus]=useState({});
  
  
  return (
   <section className='contact' id='connect'>
    <Container>
        <Row className='align-items-center'> 
<Col md={6}>
    <img src={contactImg} alt="contactus"/>
</Col>
<Col md={6}>
    <h2>Get In Touch</h2>
    <form>
        <Row>
            <Col sm={6} className="px-1"></Col>
        </Row>
    </form>
</Col>
        </Row>
    </Container>
    
    
    
    </section>
  )
}
