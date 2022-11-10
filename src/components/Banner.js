import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Box} from "@mui/material";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import headerImg from '../assets/img/61e7040706211fef317619fe_UI_UX Design.svg'
import { useState,useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
   
    const toRotate = [ "Full Stack Developer" ];
    const period = 2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta);
        return()=>clearInterval(ticker);
    })
    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
    
    setText(updatedText);
    if (isDeleting){
    setDelta(prevDelta=>prevDelta/2);}
    if (!isDeleting&&updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
    }
    else if (isDeleting&&updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    
    }

    return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi!, i'm <span class="name"style={{textShadow: "5px 5px #558ABB"}}>Sara </span> Mediouni <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>Turning ideas into real life <TrackVisibility>{({isVisible})=><div className={isVisible?"products animate__animated animate__flash":"products"}><span >products</span></div>}</TrackVisibility> is my calling.</p>
           
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row><a className="btn-resume" href="https://drive.google.com/file/d/18XCCQzpWPVOKBB6LMf_YA5km2GvMZcMg/view?usp=sharing">
              See my Resume
            </a>
        <Box display={'flex'} gap={'1rem'} justifyContent={'left'} fontSize={{xs: '2rem', md: '1.2rem'}}>
        <SiGmail color="#05336c"/> mediounisarra@gmail.com
        <BsGithub color="#05336c"/> Sara-Mediouni
            </Box>
            
      </Container>
    </section>
  );
}
