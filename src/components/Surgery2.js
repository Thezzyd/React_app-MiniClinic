import '../css/Surgeries.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
    useComponentDidMount
  } from "../scripts/Utils.js";

import Surgery2_1 from './Surgery2_1';
import Surgery2_2 from './Surgery2_2';
import Surgery2_3 from './Surgery2_3';
import Surgery2_4 from './Surgery2_4';
import Surgery2_5 from './Surgery2_5';
import {BiRightArrowAlt} from "react-icons/bi";
import Img_lazy_load from './Img_lazy_load';//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Surgery2(){

    var isSurgery2_1 = false;
    var isSurgery2_2 = false;
    var isSurgery2_3 = false;
    var isSurgery2_4 = false;
    var isSurgery2_5 = false;

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
        case '1': isSurgery2_1 = true; break;
        case '2': isSurgery2_2 = true; break;
        case '3': isSurgery2_3 = true; break;
        case '4': isSurgery2_4 = true; break;
        case '5': isSurgery2_5 = true; break;
    }

    const [isSurgery2_1Visible, setIsSurgery2_1Visible] = useState(isSurgery2_1);
    const [isSurgery2_2Visible, setIsSurgery2_2Visible] = useState(isSurgery2_2);
    const [isSurgery2_3Visible, setIsSurgery2_3Visible] = useState(isSurgery2_3);
    const [isSurgery2_4Visible, setIsSurgery2_4Visible] = useState(isSurgery2_4);
    const [isSurgery2_5Visible, setIsSurgery2_5Visible] = useState(isSurgery2_5);
  
    function SetAllSurgeries_ActiveEffectOff(){
        const surgery2_1_div = document.querySelector('.surgery2_1');
        const surgery2_2_div = document.querySelector('.surgery2_2');
        const surgery2_3_div = document.querySelector('.surgery2_3');
        const surgery2_4_div = document.querySelector('.surgery2_4');
        const surgery2_5_div = document.querySelector('.surgery2_5');

        surgery2_1_div.classList.remove('active');
        surgery2_2_div.classList.remove('active');
        surgery2_3_div.classList.remove('active');
        surgery2_4_div.classList.remove('active');
        surgery2_5_div.classList.remove('active');
    }

    function SetAllSurgeries_Off(){
        setIsSurgery2_1Visible(false);
        setIsSurgery2_2Visible(false);
        setIsSurgery2_3Visible(false);
        setIsSurgery2_4Visible(false);
        setIsSurgery2_5Visible(false);
    }

    function activateSurgery_(i){
        const surgery2_1_div = document.querySelector('.surgery2_1');
        const surgery2_2_div = document.querySelector('.surgery2_2');
        const surgery2_3_div = document.querySelector('.surgery2_3');
        const surgery2_4_div = document.querySelector('.surgery2_4');
        const surgery2_5_div = document.querySelector('.surgery2_5');

        switch(i){
            case '1': surgery2_1_div.classList.add('active'); break;
            case '2': surgery2_2_div.classList.add('active'); break;
            case '3': surgery2_3_div.classList.add('active'); break;
            case '4': surgery2_4_div.classList.add('active'); break;
            case '5': surgery2_5_div.classList.add('active'); break;
        }
    }

    function Surgery_2_1(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery2_1Visible(true);
        activateSurgery_('1');
    }
    
    function Surgery_2_2(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery2_2Visible(true);
        activateSurgery_('2');
    }
    function Surgery_2_3(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery2_3Visible(true);
        activateSurgery_('3');
    }
    function Surgery_2_4(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery2_4Visible(true);
        activateSurgery_('4');
    }
    function Surgery_2_5(e){
        if(e){ e.preventDefault();}
        SetAllSurgeries_Off();
        SetAllSurgeries_ActiveEffectOff();
        setIsSurgery2_5Visible(true);
        activateSurgery_('5');
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
                        <h2>Zabiegi operacyjne w znieczuleniu ogólnym</h2>
                        <span className='content-text'> W Mini Clinic zabiegi operacyjne w znieczuleniu ogólnym przeprowadzamy najczęściej w trybie chirurgii jednego dnia
                             w szpitalach, w których nasi lekarze mają podpisane umowy o wykonywaniu świadczeń medycznych.
                              Pacjent po uprzedniej kwalifikacji zgłasza się do wyznaczonego szpitala najczęściej o godz. 7 rano
                               na czczo z wynikami wcześniej zleconych badań laboratoryjnych. 
                               W przypadku operacji dzieci konieczna jest obecność obojga rodziców w celu podpisania zgody 
                               na zabieg. Dziecku przez cały pobyt w szpitalu może towarzyszyć jeden z rodziców 
                               (z wyjątkiem sali operacyjnej). Zabieg w zależności od typu trwa od 20 do 60 min. 
                               Chory po zabiegu, jeżeli nie obserwujemy powikłań, wraca do domu zwykle po 24 godzinach od przyjęcia.
                       </span>
                    </div>
                   
                </div>

                <div className='surgeries-box-parent start-section-surgery_menu'>

                    <Link to='/zabiegi-w-znieczuleniu-ogolnym/zabiegi-operacyjne-migdalkow' onClick={() => Surgery_2_1()} className='surgery-link'> 
                        <div className='surgeries-box-item surgery2_1' >
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/zabiegi-operacyjne/operacja-migdalkow-podniebiennych.webp'}
                                            imgWidth={'420'}
                                            imgHeight={'301'}
                                            altString={'Operacja migdałków podniebiennych Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div> 
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Zabiegi operacyjne migdałków</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                    <Link to='/zabiegi-w-znieczuleniu-ogolnym/drenaz-jam-bebenkowych' onClick={() => Surgery_2_2()} className='surgery-link'> 
                        <div className='surgeries-box-item surgery2_2'>
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/zabiegi-operacyjne/drenaz-jam-bebenkowych.webp'}
                                            imgWidth={'420'}
                                            imgHeight={'301'}
                                            altString={'Drenaż jamy bębenkowej Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Drenaż jam bębenkowych</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                    <Link to='/zabiegi-w-znieczuleniu-ogolnym/septoplastyka' onClick={() => Surgery_2_3()} className='surgery-link'> 
                        <div className='surgeries-box-item surgery2_3'>
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/zabiegi-operacyjne/operacja-plastyczna-przegrody-nosa.webp'}
                                            imgWidth={'420'}
                                            imgHeight={'301'}
                                            altString={'Operacja plastyczna przegrody nosowej Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Operacja plastyczna przegrody nosa</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                    <Link to='/zabiegi-w-znieczuleniu-ogolnym/usuniecie-polipow-nosa' onClick={() => Surgery_2_4()} className='surgery-link'> 
                    <div className='surgeries-box-item surgery2_4'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/usuwanie-polipow-nosa.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'301'}
                                        altString={'Usuwanie polipów z nosa Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Usunięcie polipów nosa</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>

                    <Link to='/zabiegi-w-znieczuleniu-ogolnym/operacja-zatok-przynosowych' onClick={() => Surgery_2_5()} className='surgery-link'> 
                        <div className='surgeries-box-item surgery2_5' >
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/zabiegi-operacyjne/operacja-zatok-przynosowych.webp'}
                                            imgWidth={'420'}
                                            imgHeight={'301'}
                                            altString={'Operacja zatok przynosowych Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Operacja zatok przynosowych</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                </div>
               
                {isSurgery2_1Visible ?
                    <Surgery2_1 /> :
                    null
                }

                {isSurgery2_2Visible ?
                    <Surgery2_2 /> :
                    null
                }

                {isSurgery2_3Visible ?
                    <Surgery2_3 /> :
                    null
                }

                {isSurgery2_4Visible ?
                    <Surgery2_4 /> :
                    null
                }

                {isSurgery2_5Visible ?
                    <Surgery2_5 /> :
                    null
                }



            </div>
        </div>
    );
}

