import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../info/info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function certifText() {
        return <>    
      
          
          <p><span style={{color: info.baseColor}}>Sarra Mediouni <span
          className={Style.green}>(main)</span> $</span> cd certifications</p>
      <p style={{color: info.baseColor}}> Technologia Academy <span className={Style.white}>Full Stack Js Summer Camp</span></p>
      <p style={{color: info.baseColor}}> IEEE Student Chapter <span className={Style.white}>Problem Solving Division</span></p>
      <p><span style={{color: info.baseColor}}>Sarra Mediouni <span
          className={Style.green}>(main)</span> $</span> cd memberships</p>
      <p style={{color: info.baseColor}}> 4C ISSATSO  <span className={Style.white}>Ambassador</span></p>
      <p style={{color: info.baseColor}}> IEEE Student Chapter  <span className={Style.white}>Member</span></p>
        </>}

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box id="about"display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={miscText()}/>
            <Terminal text={certifText()}/>
        </Box>
    )
}