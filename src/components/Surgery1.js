import '../css/Surgeries.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiRightArrowAlt} from "react-icons/bi";
import Surgery1_1 from './Surgery1_1';
import Surgery1_2 from './Surgery1_2';
import Surgery1_3 from './Surgery1_3';
import Surgery1_4 from './Surgery1_4';
import Surgery1_5 from './Surgery1_5';
import Surgery1_6 from './Surgery1_6';
import Img_lazy_load from './Img_lazy_load';//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Surgery1(){

    var isSurgery1_1 = false;
    var isSurgery1_2 = false;
    var isSurgery1_3 = false;
    var isSurgery1_4 = false;
    var isSurgery1_5 = false;
    var isSurgery1_6 = false;

    const location = useLocation();
    var whichSurgery_ = 0;

    if(location.state){
        whichSurgery_ = (location.state.surgery);
    }else{
        if(localStorage.getItem('surgery-card-surgery')){
                whichSurgery_ = localStorage.getItem('surgery-card-surgery');
            
        }
    }

    switch(whichSurgery_){
        case '1': isSurgery1_1 = true; break;
        case '2': isSurgery1_2 = true; break;
        case '3': isSurgery1_3 = true; break;
        case '4': isSurgery1_4 = true; break;
        case '5': isSurgery1_5 = true; break;
        case '6': isSurgery1_6 = true; break;
    }

    const [isSurgery1_1Visible, setIsSurgery1_1Visible] = useState(isSurgery1_1);
    const [isSurgery1_2Visible, setIsSurgery1_2Visible] = useState(isSurgery1_2);
    const [isSurgery1_3Visible, setIsSurgery1_3Visible] = useState(isSurgery1_3);
    const [isSurgery1_4Visible, setIsSurgery1_4Visible] = useState(isSurgery1_4);
    const [isSurgery1_5Visible, setIsSurgery1_5Visible] = useState(isSurgery1_5);
    const [isSurgery1_6Visible, setIsSurgery1_6Visible] = useState(isSurgery1_6);
  
    function SetAllSurgeries_ActiveEffectOff(){
        const surgery1_1_div = document.querySelector('.surgery1_1');
        const surgery1_2_div = document.querySelector('.surgery1_2');
        const surgery1_3_div = document.querySelector('.surgery1_3');
        const surgery1_4_div = document.querySelector('.surgery1_4');
        const surgery1_5_div = document.querySelector('.surgery1_5');
        const surgery1_6_div = document.querySelector('.surgery1_6');

        surgery1_1_div.classList.remove('active');
        surgery1_2_div.classList.remove('active');
        surgery1_3_div.classList.remove('active');
        surgery1_4_div.classList.remove('active');
        surgery1_5_div.classList.remove('active');
        surgery1_6_div.classList.remove('active');
    }

    function SetAllSurgeries_Off(){
        setIsSurgery1_1Visible(false);
        setIsSurgery1_2Visible(false);
        setIsSurgery1_3Visible(false);
        setIsSurgery1_4Visible(false);
        setIsSurgery1_5Visible(false);
        setIsSurgery1_6Visible(false);
    }

    function activateSurgery_(i){
        const surgery1_1_div = document.querySelector('.surgery1_1');
        const surgery1_2_div = document.querySelector('.surgery1_2');
        const surgery1_3_div = document.querySelector('.surgery1_3');
        const surgery1_4_div = document.querySelector('.surgery1_4');
        const surgery1_5_div = document.querySelector('.surgery1_5');
        const surgery1_6_div = document.querySelector('.surgery1_6');

        switch(i){
            case '1': surgery1_1_div.classList.add('active'); break;
            case '2': surgery1_2_div.classList.add('active'); break;
            case '3': surgery1_3_div.classList.add('active'); break;
            case '4': surgery1_4_div.classList.add('active'); break;
            case '5': surgery1_5_div.classList.add('active'); break;
            case '6': surgery1_6_div.classList.add('active'); break;
        }
    }

    function Surgery_1_1(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery1_1Visible(true);
        activateSurgery_('1');
    }
    
    function Surgery_1_2(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery1_2Visible(true);
        activateSurgery_('2');
    }
    function Surgery_1_3(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery1_3Visible(true);
        activateSurgery_('3');
    }
    function Surgery_1_4(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery1_4Visible(true);
        activateSurgery_('4');
    }
    function Surgery_1_5(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery1_5Visible(true);
        activateSurgery_('5');
    }
    function Surgery_1_6(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery1_6Visible(true);
        activateSurgery_('6');
    }

    
    useComponentDidMount(() => {
        //console.log("Component did mount!");
        activateSurgery_(whichSurgery_);

        const targetElement = document.querySelector('.start-section-surgeries');
        if(whichSurgery_ == '0'){
           // console.log('przesowa nad karty');
            window.scrollTo(0, targetElement.offsetTop - 10);
        }
        if( location.state){
            location.state.surgery = 0;
         }
      });

    return(
        <div className='consultationBody'>
             <hr className='separator-line start-section-surgeries' />
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text-full'>
                        <h2>Zabiegi operacyjne w znieczuleniu miejscowym</h2>
                        <span className='content-text'> W Mini Clinic wykonujemy zabiegi operacyjne w znieczuleniu miejscowym tzw. zabiegi ambulatoryjne.
                             Pacjent zgłasza się po uprzedniej kwalifikacji z wynikami wcześniej zleconych badań laboratoryjnych. 
                             Zabieg zwykle trwa 20-30 minut, a po nim chory wraca do domu.
                       </span>
                    </div>
                   
                </div>
               
                <div className='surgeries-box-parent start-section-surgery_menu'>
                <Link to='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-podniebienie' onClick={() => Surgery_1_1()} className='surgery-link'> 
                    <div className='surgeries-box-item surgery1_1'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/termoablacja-podniebinia.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Termoablacja podniebienia Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Termoablacja podniebienia</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/zabiegi-w-znieczuleniu-miejscowym/uppp' onClick={() => Surgery_1_2()} className='surgery-link'> 
                    <div className='surgeries-box-item surgery1_2'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/uupp.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'301'}
                                        altString={'Bezdech senny, chrapanie - operacja plastyczna gardła, podniebienia, języczka podniebienia rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Plastyka gardła, podniebienia, języczka podniebienia</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/zabiegi-w-znieczuleniu-miejscowym/kryptoliza-migdalki' onClick={() => Surgery_1_3()} className='surgery-link'> 
                    <div className='surgeries-box-item surgery1_3'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/kryptoliza.webp'}
                                        imgWidth={'419'}
                                        imgHeight={'300'}
                                        altString={'Kryptoliza Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Kryptoliza migdałków podniebiennych</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-migdalki' onClick={() => Surgery_1_4()} className='surgery-link'> 
                    <div className='surgeries-box-item surgery1_4'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/termoablacja-migdalkow-podniebiennych.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Termoablacja migdałków podniebiennych Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Termoablacja migdałków podniebiennych</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-nos' onClick={() => Surgery_1_5()} className='surgery-link'> 
                    <div className='surgeries-box-item surgery1_5'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/termoablacja-malzowin-nosowych-dolnych.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Termoablacja nosowych małżowin dolnych Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Termoablacja małżowin nosowych dolnych</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/zabiegi-w-znieczuleniu-miejscowym/koagulacja' onClick={() => Surgery_1_6()} className='surgery-link'> 
                        <div className='surgeries-box-item surgery1_6'>
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/zabiegi-operacyjne/koagulacja.webp'}
                                            imgWidth={'421'}
                                            imgHeight={'301'}
                                            altString={'Koagulacja chemiczna lub elektryczna Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Koagulacja chemiczna lub elektryczna</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>
                </div>

                {isSurgery1_1Visible ?
                    <Surgery1_1 /> :
                    null
                }

                {isSurgery1_2Visible ?
                    <Surgery1_2 /> :
                    null
                }

                {isSurgery1_3Visible ?
                    <Surgery1_3 /> :
                    null
                }

                {isSurgery1_4Visible ?
                    <Surgery1_4 /> :
                    null
                }

                {isSurgery1_5Visible ?
                    <Surgery1_5 /> :
                    null
                }

                {isSurgery1_6Visible ?
                    <Surgery1_6 /> :
                    null
                }


            </div>
        </div>
    );
}

