import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import {ProjectCard} from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import TrackVisibility from 'react-on-screen'
export default function Projects() {
    const projects=[
        {
            title:"t",
            description:"t",
            imgURL:projImg1
        },
        {
            title:"t",
            description:"t",
            imgURL:projImg2
        },
        {
            title:"t",
            description:"t",
            imgURL:projImg3
        }
    ]
  return (
 <section className="project" id="project">
    <Container>
        <Row>
            <Col>
            <TrackVisibility>{({isVisible})=><div className={isVisible?" animate__animated animate__tada":""}><h2>Projects</h2></div>}</TrackVisibility>  
            <p></p>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
           <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
             <Nav.Item>
                <Nav.Link eventKey="first">tab 1</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link eventKey="second">tab 2</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link eventKey="third">tab 3</Nav.Link>
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
                <p>content</p>
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
