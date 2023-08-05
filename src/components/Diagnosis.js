import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiRightArrowAlt} from "react-icons/bi";
import Diagnosis1 from './Diagnosis1';
import Bottom_page_images from './Bottom_page_images';
import MiniClinic_baner from './MiniClinic_baner.js';

export default function Diagnosis(props){
    const location = useLocation();
    
    useComponentDidMount(() => {
     

      if( location.state){
        if(!location.state.examination){
            window.scrollTo(0, 0);
        }
      }
      

      });
   
    return(
        <>
        
        <MiniClinic_baner />

        <div className='home-page-info'>
                    
        <div className='home-page-title'>

            
            <h2>Oferta - Badania diagnostyczne</h2>
            <hr className='separator-line' />
        </div>

           <Diagnosis1 />

        <div className='home-page-info-specjalizacja' >
        <Bottom_page_images />
        </div>
        
        </div>
</>
    );
}


