import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg'
import TrackVisibility from 'react-on-screen'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
export default function Contact() {
  const{ref, inView}=useInView({
    threshold:0.2
  });
  const animation=useAnimation();
  useEffect(()=>{
    
if (inView){
  animation.start({
    x:0,
    transition:{
      type:'spring',duration:1,bounce:0.3
    }
  });
}if (!inView){
  animation.start({x:'-100vw'})
}
  }
  ,[inView]);
  
  
  
  return (
    <section ref={ref} className="contacts" id="contacts">
    <Container>
        <Row>
            <Col>
            <motion.div 
animate={animation} className="contact-bx">
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__bounceIn":""}><h2>Contacts</h2></div>}</TrackVisibility> 
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://www.facebook.com/mediouni.sara" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://github.com/Sara-Mediouni" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="https://www.linkedin.com/in/sara-mediouni-726b87205/" ><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="mailto:mediounisarra99@gmail.com" ><img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" /></a></div>}</TrackVisibility>  
                <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__flash":""}>     <a href="tel:+21652080243" ><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" /></a></div>}</TrackVisibility>  
               
               
                </motion.div>
            </Col>
        </Row>
    </Container>

</section>
  )
}
