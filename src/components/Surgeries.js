import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
    useComponentDidMount
  } from "../scripts/Utils.js";

import '../css/Surgeries.css';
import Surgery1 from './Surgery1';
import Surgery2 from './Surgery2';

import {BiRightArrowAlt} from "react-icons/bi";
import Bottom_page_images from './Bottom_page_images';
import MiniClinic_baner from './MiniClinic_baner.js';

export default function Surgeries(props){

    var isSurgery1 = false;
    var isSurgery2 = false;

    var whichSurgery = -1

    const location = useLocation();
    if(location.state){
        whichSurgery = (location.state.item);
    }else{
        if(localStorage.getItem('surgery-card')){
            if(localStorage.getItem('surgery-card') == '1'){
                whichSurgery = '1';
            }else if(localStorage.getItem('surgery-card') == '2'){
                whichSurgery = '2';
            }
        }
    }
  
    switch(whichSurgery){
        case '1': isSurgery1 = true; break;
        case '2': isSurgery2 = true; break;
    }

    const [isSurgery1Visible, setIsSurgery1Visible] = useState(isSurgery1);
    const [isSurgery2Visible, setIsSurgery2Visible] = useState(isSurgery2);
  
    function SetAllSurgeriesActiveEffectOff(){
        const surgery1_div = document.querySelector('.surgery1');
        const surgery2_div = document.querySelector('.surgery2');

        surgery1_div.classList.remove('active');
        surgery2_div.classList.remove('active');
    }

    function SetAllSurgeriesOff(){
        setIsSurgery1Visible(false);
        setIsSurgery2Visible(false);
    }

    function activateSurgery(i){
        const surgery1_div = document.querySelector('.surgery1');
        const surgery2_div = document.querySelector('.surgery2');

        switch(i){
            case '1': surgery1_div.classList.add('active'); break;
            case '2': surgery2_div.classList.add('active'); break;
        }
    }

    function Surgery_1(e){
       // if(e){ e.preventDefault();}
        SetAllSurgeriesOff();
        SetAllSurgeriesActiveEffectOff();
        setIsSurgery1Visible(true);
        activateSurgery('1');
    }
    
    function Surgery_2(e){
       // if(e){ e.preventDefault();}
        SetAllSurgeriesOff();
        SetAllSurgeriesActiveEffectOff();
        setIsSurgery2Visible(true);
        activateSurgery('2');
    }

    useComponentDidMount(() => {
        //console.log("Component did mount!");
        activateSurgery(whichSurgery);
      });

   
    return(
        <>
       
                <MiniClinic_baner />

        <div className='home-page-info'>
                    
        <div className='home-page-title'>

            
            <h2>Oferta - Zabiegi Operacyjne</h2>
            <hr className='separator-line' />
        </div>
        



     
        <div className='home-page-info-card4'>
                 <div className='card4-items-container'>
                      
                            <div className='card4-item-box-text-services'>
                            <Link to='/zabiegi-w-znieczuleniu-miejscowym' onClick={Surgery_1}>
                                <div className='card4-item-box-text-position-services surgery1'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><BiRightArrowAlt className='arrow-icon-listing' /></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Zabiegi operacyjne w znieczuleniu miejscowym</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/zabiegi-w-znieczuleniu-ogolnym' onClick={Surgery_2}>
                                <div className='card4-item-box-text-position-services surgery2'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><BiRightArrowAlt className='arrow-icon-listing' /></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                             <h5>Zabiegi operacyjne w znieczuleniu ogólnym</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                              
                            </div>
                       
                        </div>
                        </div>

        {isSurgery1Visible ?
           <Surgery1 /> :
           null
        }
         {isSurgery2Visible ?
           <Surgery2 /> :
           null
        }

            <Bottom_page_images />

        
        </div>
</>
    );
}


