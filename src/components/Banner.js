import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/61e7040706211fef317619fe_UI_UX Design.svg'
import { useState,useEffect } from "react";
export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full Stack Developer", "Mobile Developor" ];
    const period = 2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta);
        return()=>clearInterval(ticker);
    },[text])
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
              {`Hi!, i'm Sara `}
              <span className="wrap">{text}</span>
            </h1>
            <p>about self causing</p>
            <button onClivk={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25}/>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
