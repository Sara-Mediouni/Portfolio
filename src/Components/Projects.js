import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import {ProjectCard} from './ProjectCard'
import projImg1 from '../assets/img/sportify.PNG'
import projImg2 from '../assets/img/182489549-c80e5fc6-d6a8-48c7-8c60-76ffc5858447.png'
import projImg3 from '../assets/img/Capture.PNG'
import projImg4 from '../assets/img/c.PNG'
import projImg5 from '../assets/img/portfolio.PNG'
import projImg6 from '../assets/img/sportifyadmin.PNG'
import projImg7 from '../assets/img/chatbot.PNG'
import projImg8 from '../assets/img/Blank 2 Grids Collage.png'
import TrackVisibility from 'react-on-screen'
export default function Projects() {
    const projects=[
        {
            title:"Puppify",
            description:"PetStore Swagger.io, ReactJS",
            imgURL:projImg3,
            liengit:"https://github.com/Sara-Mediouni/Puppify"
        },
        {
            title:"Readify",
            description:"Books Store NodeJS, ExpressJS, MongoDB, ReactJS, Google Books API",
            imgURL:projImg2,
            liengit:"https://github.com/Sara-Mediouni/ReadifyFront"
        },
        {
            title:"Sportify",
            description:"Tunisian sports clubs NodeJS, ExpressJS, MongoDB, ReactJS",
            imgURL:projImg1,
            liengit:"https://github.com/Sara-Mediouni/SportifyApplication"
        },
     {
          title:"Spotify 2.0",
          description:"",
          imgURL:projImg4,
          liengit:"https://github.com/Sara-Mediouni/Spotify2.0/tree/master/Spotify2.0"
      },
      {
        title:"Portfolio",
        description:"",
        imgURL:projImg5,
        liengit:"https://github.com/Sara-Mediouni/Portfolio"
    },
    {
      title:"Dashboard Admin Sportif",
      description:"",
      imgURL:projImg6,
      liengit:"https://github.com/Sara-Mediouni/SportifyAdminDashboard"
  }]
    const projects2=[
      {
        title:"Bookstore",
        description:"",
        imgURL:projImg8,
        liengit:"https://github.com/Sara-Mediouni/BooksStore"
    }
  ]
  const projects3=[
    {
        title:"ChatBot",
        description:"PyTorch, Flask, ReactJS",
        imgURL:projImg7,
        liengit:"https://github.com/Sara-Mediouni/Chatbot-Pytorch"
    }
 
]
  return (
 <section className="project" id="projects">
    <Container>
        <Row>
            <Col>
            <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__tada":""}><h2>Projects</h2></div>}</TrackVisibility>  
            <p></p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
           <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
             <Nav.Item>
                <Nav.Link eventKey="first">Web</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link eventKey="second">Mobile</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link eventKey="third">AI</Nav.Link>
             </Nav.Item>
           </Nav>
           <Tab.Content id="slideInUp">
           <Tab.Pane eventKey="first">
              <Row> 
                 {projects.map((project, index) =>{                
               return(
                <ProjectCard 
                key={index} 
                {...project}/>
               )
                })
                 }
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row> 
                 {projects2.map((project, index) =>{                
               return(
                <ProjectCard 
                key={index} 
                {...project}/>
               )
                })
                 }
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
            <Row> 
                 {projects3.map((project, index) =>{                
               return(
                <ProjectCard 
                key={index} 
                {...project}/>
               )
                })
                 }
              </Row>
            </Tab.Pane>
           </Tab.Content>
           </Tab.Container>
           
           
            </Col>
        </Row>
    </Container>
    </section>
  )
}
