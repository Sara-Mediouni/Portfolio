import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from 'react-on-screen'
export default function Contact() {

  
  
  
  return (
    <section className="contacts" id="contacts">
    <Container>
        <Row>
            <Col>
                <div className="contact-bx">
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__bounceIn":""}><h2>Contacts</h2></div>}</TrackVisibility> 
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://github.com/Sara-Mediouni" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://github.com/Sara-Mediouni" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://github.com/Sara-Mediouni" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://github.com/Sara-Mediouni" ><img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://github.com/Sara-Mediouni" ><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" /></a></div>}</TrackVisibility>  
               
               
                </div>
            </Col>
        </Row>
    </Container>

</section>
  )
}
