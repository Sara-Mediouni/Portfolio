import React from 'react'
import { Col } from 'react-bootstrap'

export const ProjectCard=({title, description, imgURL}) => {
  return (
<Col sm={6} md={4}>
    <div className="proj-imgbx">
        <img style={{height:"280px"}}src={imgURL}/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <a href="" className='btn-git'>Lien Github</a>
        </div>
        </div>
</Col>
  )
}
