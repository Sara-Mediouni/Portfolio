import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from 'react-on-screen'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useAnimation} from 'framer-motion'
export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
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
      ,[animation, inView]);
    return (
        <section  ref={ref} className="skills" id="skills" >
            <Container>
                <Row>
                    <Col>
                    <motion.div 
animate={animation}  className="skill-bx">
                        <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__bounceIn":""}><h2>Skills</h2></div>}</TrackVisibility> 
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                                   
                                </div>
                                <div className="item">
                                    <img  alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"  />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"  />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"  />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                                    
                                </div>
                              
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg"  />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original-wordmark.svg" />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                                    
                                </div>
                                <div className="item">
                                    <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt=""/>
                                    
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt=""/>
                                    
                                </div>
                              
                            </Carousel>
                            </motion.div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}
