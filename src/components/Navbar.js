import { useState ,useEffect} from 'react'
import React from 'react'
import '../App.css'
import {Navbar,Container,Nav} from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import img1 from '../assets/img/logo.png'

export default function Navbarcomponent(){
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onSroll=()=>{
            if (window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll',onSroll);
        return ()=>
            window.removeEventListener('scroll',onSroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value)}
  return (
    <Navbar className={scrolled?"scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
           <img src={img1} alt="" style={{height:"30px",width:"50px",marginTop:"5px"}}/>
          </Navbar.Brand>
         <Navbar.Toggle >
            <span className="navbar-toggler-icon"></span>
         </Navbar.Toggle>
         <Navbar.Collapse>
            <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink==='about'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects'?'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
           
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/sara-mediouni-726b87205"><img src={navIcon1} alt=""/></a>
             
           
              </div>
          <button className="vvd" href="#contacts"><span>Let's connect</span></button>
          </span>
         </Navbar.Collapse>
          
        </Container>
      </Navbar>
     
  )
}
