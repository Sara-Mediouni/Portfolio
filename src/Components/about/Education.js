import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../info/info";


export default function Education() {
    

  

    function skillsText() {
        return <>
            
            <p><span style={{color: info.baseColor}}>Education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> 2018 <span className={Style.white}>Bachelors's degree High school Elbattan-Manouba</span></p>
            <p style={{color: info.baseColor}}> 2018-2020 <span className={Style.white}>Preparatory cycle MPI at Higher Institute of Applied Sciences and Technology of Sousse</span></p>
           
          
            <p style={{color: info.baseColor}}> 2020-2023 <span className={Style.white}>Software Engineering at
Higher Institute of Applied Sciences and Technology of Sousse</span></p>
           
          
          
        </>;
    }

    

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            
            <Terminal text={skillsText()}/>
           
        </Box>
    )
}