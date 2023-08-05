import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import {
    useComponentDidMount
  } from "../scripts/Utils.js";

import Diagnosis1_1 from './Diagnosis1_1';
import Diagnosis1_2 from './Diagnosis1_2';
import Diagnosis1_3 from './Diagnosis1_3';
import Diagnosis1_4 from './Diagnosis1_4';
import Diagnosis1_5 from './Diagnosis1_5';
import Diagnosis1_6 from './Diagnosis1_6';
import {BiRightArrowAlt} from "react-icons/bi";
import Img_lazy_load from './Img_lazy_load.js';
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Diagnosis1(){

    var isDiagnosis1_1 = false;
    var isDiagnosis1_2 = false;
    var isDiagnosis1_3 = false;
    var isDiagnosis1_4 = false;
    var isDiagnosis1_5 = false;
    var isDiagnosis1_6 = false;

    const location = useLocation();
    
    var  whichDiagnosis_ = 0;

    if(location.state){
        whichDiagnosis_ = (location.state.examination);
    }else{
        if(localStorage.getItem('diagnosis-examination')){
            whichDiagnosis_ = localStorage.getItem('diagnosis-examination');
        }
    }

  
    switch(whichDiagnosis_){
        case '1': isDiagnosis1_1 = true; break;
        case '2': isDiagnosis1_2 = true; break;
        case '3': isDiagnosis1_3 = true; break;
        case '4': isDiagnosis1_4 = true; break;
        case '5': isDiagnosis1_5 = true; break;
        case '6': isDiagnosis1_6 = true; break;
    }

    const [isDiagnosis1_1Visible, setIsDiagnosis1_1Visible] = useState(isDiagnosis1_1);
    const [isDiagnosis1_2Visible, setIsDiagnosis1_2Visible] = useState(isDiagnosis1_2);
    const [isDiagnosis1_3Visible, setIsDiagnosis1_3Visible] = useState(isDiagnosis1_3);
    const [isDiagnosis1_4Visible, setIsDiagnosis1_4Visible] = useState(isDiagnosis1_4);
    const [isDiagnosis1_5Visible, setIsDiagnosis1_5Visible] = useState(isDiagnosis1_5);
    const [isDiagnosis1_6Visible, setIsDiagnosis1_6Visible] = useState(isDiagnosis1_6);
  
    function SetAllDiagnosis_ActiveEffectOff(){
        const diagnosis1_1_div = document.querySelector('.diagnosis1_1');
        const diagnosis1_2_div = document.querySelector('.diagnosis1_2');
        const diagnosis1_3_div = document.querySelector('.diagnosis1_3');
        const diagnosis1_4_div = document.querySelector('.diagnosis1_4');
        const diagnosis1_5_div = document.querySelector('.diagnosis1_5');
        const diagnosis1_6_div = document.querySelector('.diagnosis1_6');

        diagnosis1_1_div.classList.remove('active');
        diagnosis1_2_div.classList.remove('active');
        diagnosis1_3_div.classList.remove('active');
        diagnosis1_4_div.classList.remove('active');
        diagnosis1_5_div.classList.remove('active');
        diagnosis1_6_div.classList.remove('active');
    }

    function SetAllDiagnosis_Off(){
        setIsDiagnosis1_1Visible(false);
        setIsDiagnosis1_2Visible(false);
        setIsDiagnosis1_3Visible(false);
        setIsDiagnosis1_4Visible(false);
        setIsDiagnosis1_5Visible(false);
        setIsDiagnosis1_6Visible(false);
    }

    function activateDiagnosis_(i){
        const diagnosis1_1_div = document.querySelector('.diagnosis1_1');
        const diagnosis1_2_div = document.querySelector('.diagnosis1_2');
        const diagnosis1_3_div = document.querySelector('.diagnosis1_3');
        const diagnosis1_4_div = document.querySelector('.diagnosis1_4');
        const diagnosis1_5_div = document.querySelector('.diagnosis1_5');
        const diagnosis1_6_div = document.querySelector('.diagnosis1_6');

        switch(i){
            case '1': diagnosis1_1_div.classList.add('active'); break;
            case '2': diagnosis1_2_div.classList.add('active'); break;
            case '3': diagnosis1_3_div.classList.add('active'); break;
            case '4': diagnosis1_4_div.classList.add('active'); break;
            case '5': diagnosis1_5_div.classList.add('active'); break;
            case '6': diagnosis1_6_div.classList.add('active'); break;
        }
    }

    function Diagnosis_1_1(e){
        if(e){ e.preventDefault();}
        SetAllDiagnosis_Off();
        SetAllDiagnosis_ActiveEffectOff();
        setIsDiagnosis1_1Visible(true);
        activateDiagnosis_('1');
    }
    
    function Diagnosis_1_2(e){
        if(e){ e.preventDefault();}
        SetAllDiagnosis_Off();
        SetAllDiagnosis_ActiveEffectOff();
        setIsDiagnosis1_2Visible(true);
        activateDiagnosis_('2');
    }
    function Diagnosis_1_3(e){
        if(e){ e.preventDefault();}
        SetAllDiagnosis_Off();
        SetAllDiagnosis_ActiveEffectOff();
        setIsDiagnosis1_3Visible(true);
        activateDiagnosis_('3');
    }
    function Diagnosis_1_4(e){
        if(e){ e.preventDefault();}
        SetAllDiagnosis_Off();
        SetAllDiagnosis_ActiveEffectOff();
        setIsDiagnosis1_4Visible(true);
        activateDiagnosis_('4');
    }
    function Diagnosis_1_5(e){
        if(e){ e.preventDefault();}
        SetAllDiagnosis_Off();
        SetAllDiagnosis_ActiveEffectOff();
        setIsDiagnosis1_5Visible(true);
        activateDiagnosis_('5');
    }
    function Diagnosis_1_6(e){
        if(e){ e.preventDefault();}
        SetAllDiagnosis_Off();
        SetAllDiagnosis_ActiveEffectOff();
        setIsDiagnosis1_6Visible(true);
        activateDiagnosis_('6');
    }

    useComponentDidMount(() => {
        //console.log("Component did mount!");
        activateDiagnosis_(whichDiagnosis_);

       // const targetElement = document.querySelector('.start-section-diagnosis');
       // if(whichDiagnosis_ == '-1'){
          //  console.log('przesowa nad karty');
      //      window.scrollTo(0, targetElement.offsetTop - 10);
      //  }

        if( location.state){
            location.state.examination = 0;
        }
      });

    return(
        <div className='consultationBody'>
            
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text-full'>
                        <h2>Badania diagnostyczne</h2>
                        <span className='content-text'> Zachowując najwyższe standardy medyczne wykonujemy zaawansowane badania diagnostyczne z wykorzystaniem 
                            sprzętu medycznego renomowanych firm. Dzięki temu konsultacje w Mini Clinic mają charakter kompleksowy.
                       </span>
                    </div>
                   
                </div>
               
                <div className='surgeries-box-parent start-section-diagnosis_menu'>
                    <Link to='/diagnostyka/endoskopia-nos-gardlo-krtan' onClick={() => Diagnosis_1_1()} className='surgery-link'> 
                        <div className='surgeries-box-item diagnosis1_1'>
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/diagnostyka/endoskopowe-badanie-nosa.webp'}
                                            imgWidth={'421'}
                                            imgHeight={'301'}
                                            altString={'Endoskopia nosa Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Endoskopowe badanie nosa, gardła i krtani</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>
                    <Link to='/diagnostyka/endoskopia-migdalki' onClick={() => Diagnosis_1_2()} className='surgery-link'> 
                        <div className='surgeries-box-item diagnosis1_2'>
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/diagnostyka/endoskopowe-badanie-migdalka.webp'}
                                            imgWidth={'421'}
                                            imgHeight={'301'}
                                            altString={'Endoskopia migdałków Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Endoskopowe badanie migdałka gardłowego u dzieci</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>
                    <Link to='/diagnostyka/audiometria-tonalna' onClick={() => Diagnosis_1_3()} className='surgery-link'> 
                    <div className='surgeries-box-item diagnosis1_3'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/audiometria-tonalna.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Audiometria tonalna Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Audiometria tonalna</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/diagnostyka/tympanometria' onClick={() => Diagnosis_1_4()} className='surgery-link'> 
                    <div className='surgeries-box-item diagnosis1_4'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/tympanometria.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Tympanometria Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Tympanometria</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/diagnostyka/audiometria-impedancyjna' onClick={() => Diagnosis_1_5()} className='surgery-link'> 
                    <div className='surgeries-box-item diagnosis1_5'>
                        <div className='surgeries-box-item-image-holder'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/audiometria-impedycyjna.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Audiometria impedycyjna Rzeszów'}
                                        classString={'surgeries-box-item-image'} />
                        </div>

                        <div className='surgeries-box-item-title-holder'>
                        <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                        <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Audiometria impedancyjna</h5></div>
                        </div>
                        <div></div>
                    </div>
                    </Link>
                    <Link to='/diagnostyka/badanie-poligraficzne' onClick={() => Diagnosis_1_6()} className='surgery-link'> 
                        <div className='surgeries-box-item diagnosis1_6'>
                            
                            <div className='surgeries-box-item-image-holder'>
                                        <Img_lazy_load
                                            isSrcSet={false}
                                            srcString={'/images/diagnostyka/badanie-poligraficzne.webp'}
                                            imgWidth={'421'}
                                            imgHeight={'301'}
                                            altString={'Poligrafia Rzeszów'}
                                            classString={'surgeries-box-item-image'} />
                            </div>

                            <div className='surgeries-box-item-title-holder'>
                            <div className='surgeries-box-item-icon-holder'><BiRightArrowAlt className='surgeries-box-item-title-icon'/></div>
                            <div className='surgeries-box-item-text-holder'><h5 className='surgeries-box-item-title'>Badanie poligraficzne</h5></div>
                            </div>
                            <div></div>
                        </div>
                    </Link>
                </div>

                {isDiagnosis1_1Visible ?
                    <Diagnosis1_1 /> :
                    null
                }

                {isDiagnosis1_2Visible ?
                    <Diagnosis1_2 /> :
                    null
                }

                {isDiagnosis1_3Visible ?
                    <Diagnosis1_3 /> :
                    null
                }

                {isDiagnosis1_4Visible ?
                    <Diagnosis1_4 /> :
                    null
                }

                {isDiagnosis1_5Visible ?
                    <Diagnosis1_5 /> :
                    null
                }

                {isDiagnosis1_6Visible ?
                    <Diagnosis1_6 /> :
                    null
                }


            </div>
        </div>
    );
}

