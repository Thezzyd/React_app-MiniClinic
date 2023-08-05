import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
    useComponentDidMount
  } from "../scripts/Utils.js";

import '../css/Consultations.css';
import Consultation4 from './Consultation4';

import {BiRightArrowAlt} from "react-icons/bi";
import Bottom_page_images from './Bottom_page_images';

import MiniClinic_baner from './MiniClinic_baner.js';

export default function Surgery_qualification(props){


   
      
    

    useComponentDidMount(() => {
        //console.log("Component did mount!");
        //setTimeout(goTop, 0)
        //setTimeout( activateConsultation(whichConsultationn), 500);
      //  activateConsultation(whichConsultationn);
      window.scrollTo(0, 0);

      });
  
    return(
        <>
      
        <MiniClinic_baner />
                       
        <div className='home-page-info'>
                    
        <div className='home-page-title'>

            
            <h2>O nas - Kwalifikacja do zabiegów operacyjnych</h2>
            <hr className='separator-line' />
        
        </div>
        
        <div className='home-page-info-card4'>
                 <div className='card4-items-container'>
                      

                       
                        </div>
        </div>

                       

      
           <Consultation4 /> 
          

         <Bottom_page_images />


        
        </div>
</>
    );
}


