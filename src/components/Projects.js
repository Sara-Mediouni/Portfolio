import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import {ProjectCard} from './ProjectCard'
import projImg1 from '../assets/img/sportify.PNG'
import projImg2 from '../assets/img/182489549-c80e5fc6-d6a8-48c7-8c60-76ffc5858447.png'
import projImg3 from '../assets/img/Capture.PNG'
import projImg4 from '../assets/img/c.PNG'
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
        }
    ]
    const projects2=[
      {
          title:"Spotify 2.0",
          description:"",
          imgURL:projImg4,
          liengit:"https://github.com/Sara-Mediouni/Spotify2.0/tree/master/Spotify2.0"
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
                <Nav.Link eventKey="second">Web</Nav.Link>
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
                <p>content</p>
            </Tab.Pane>
           </Tab.Content>
           </Tab.Container>
           
           
            </Col>
        </Row>
    </Container>
    </section>
  )
}
