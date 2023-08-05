
import '../css/MainBaner.css';
import React, { Suspense } from 'react';

var interval = null;
var counter = 2;
var firstcycle = true;


export default function MainBaner(){
    clearInterval(interval)
    interval=null;
    let getMode = localStorage.getItem('mode');
   
        return(
        <div className='main-baner home_element'>

            <div className='slider' onLoad={AutomaticNavigation}>
                <div className='slides'>
                
                    <input type = 'radio' name='radio-btn' id='radio1' onClick={RadioClicked}/>
                    <input type = 'radio' name='radio-btn' id='radio2' onClick={RadioClicked}/>
                    <input type = 'radio' name='radio-btn' id='radio3' onClick={RadioClicked}/>
                    <input type = 'radio' name='radio-btn' id='radio4' onClick={RadioClicked}/>

                    <div className='slide first'>
                   
                        <picture>
                                <source className='img-baner1' width='1400' height='700' media="(max-width: 1000px)"  
                                srcSet="/images/banery/mobile/wizytowka-miniclinic-mobile-400.webp 400w,
                                        /images/banery/mobile/wizytowka-miniclinic-mobile-600.webp 600w,
                                        /images/banery/mobile/wizytowka-miniclinic-mobile-800.webp 800w,
                                        /images/banery/mobile/wizytowka-miniclinic-mobile-1000.webp 1000w,
                                        /images/banery/mobile/wizytowka-miniclinic-mobile-1200.webp 1200w,
                                        /images/banery/mobile/wizytowka-miniclinic-mobile-1400.webp 1400w" />

                                <source className='img-baner1' width='2200' height='701' media="(min-width: 1000px)"
                                srcSet="/images/banery/pc/wizytowka-miniclinic-1600.webp 1600w,
                                        /images/banery/pc/wizytowka-miniclinic-1800.webp 1800w,
                                        /images/banery/pc/wizytowka-miniclinic-2000.webp 2000w,
                                        /images/banery/pc/wizytowka-miniclinic-2200.webp 2200w" />

                                <img className='img-baner1' width='2200' height='701' src='/images/banery/pc/wizytowka-miniclinic-2200.webp'
                                 alt='Klinika specjelistyczna w Rzeszowie - MiniClinic' /> 
                        </picture>
                   
                      
                    </div>
                    <div className='slide'>

                        <picture>
                                <source className='img-baner1' width='1400' height='700' media="(max-width: 1000px)"  
                                srcSet="/images/banery/mobile/problem-z-chrapaniem-miniclinic-mobile-400.webp 400w,
                                        /images/banery/mobile/problem-z-chrapaniem-miniclinic-mobile-600.webp 600w,
                                        /images/banery/mobile/problem-z-chrapaniem-miniclinic-mobile-800.webp 800w,
                                        /images/banery/mobile/problem-z-chrapaniem-miniclinic-mobile-1000.webp 1000w,
                                        /images/banery/mobile/problem-z-chrapaniem-miniclinic-mobile-1200.webp 1200w,
                                        /images/banery/mobile/problem-z-chrapaniem-miniclinic-mobile-1400.webp 1400w" />

                                <source className='img-baner1' width='2200' height='701' media="(min-width: 1000px)"
                                srcSet="/images/banery/pc/problem-z-chrapaniem-miniclinic-1600.webp 1600w,
                                        /images/banery/pc/problem-z-chrapaniem-miniclinic-1800.webp 1800w,
                                        /images/banery/pc/problem-z-chrapaniem-miniclinic-2000.webp 2000w,
                                        /images/banery/pc/problem-z-chrapaniem-miniclinic-2200.webp 2200w" />

                                <img loading="lazy" className='img-baner1' width='2200' height='701' src='/images/banery/pc/problem-z-chrapaniem-miniclinic-2200.webp'
                                 alt='Bezdech senny, leczenie chrapania, problemy z chrapaniem Rzeszów' /> 
                        </picture>

                    </div>
                    <div className='slide'>

                        <picture>
                                <source className='img-baner1' width='1400' height='700' media="(max-width: 1000px)"  
                                srcSet="/images/banery/mobile/prostowanie-przegrody-nosa-miniclinic-mobile-400.webp 400w,
                                        /images/banery/mobile/prostowanie-przegrody-nosa-miniclinic-mobile-600.webp 600w,
                                        /images/banery/mobile/prostowanie-przegrody-nosa-miniclinic-mobile-800.webp 800w,
                                        /images/banery/mobile/prostowanie-przegrody-nosa-miniclinic-mobile-1000.webp 1000w,
                                        /images/banery/mobile/prostowanie-przegrody-nosa-miniclinic-mobile-1200.webp 1200w,
                                        /images/banery/mobile/prostowanie-przegrody-nosa-miniclinic-mobile-1400.webp 1400w" />

                                <source className='img-baner1' width='2200' height='701' media="(min-width: 1000px)"
                                srcSet="/images/banery/pc/prostowanie-przegrody-nosa-miniclinic-1600.webp 1600w,
                                        /images/banery/pc/prostowanie-przegrody-nosa-miniclinic-1800.webp 1800w,
                                        /images/banery/pc/prostowanie-przegrody-nosa-miniclinic-2000.webp 2000w,
                                        /images/banery/pc/prostowanie-przegrody-nosa-miniclinic-2200.webp 2200w" />

                                <img loading="lazy" className='img-baner1' width='2200' height='701' 
                                src='/images/banery/pc/prostowanie-przegrody-nosa-miniclinic-2200.webp'
                                alt='Prostowanie przegrody nosa, problemy z drożnością nosa Rzeszów' />
                        </picture>

                    </div>
                    <div className='slide'>
                        <picture>
                                <source className='img-baner1' width='1400' height='700' media="(max-width: 1000px)"  
                                srcSet="/images/banery/mobile/chore-migdalki-miniclinic-mobile-400.webp 400w,
                                        /images/banery/mobile/chore-migdalki-miniclinic-mobile-600.webp 600w,
                                        /images/banery/mobile/chore-migdalki-miniclinic-mobile-800.webp 800w,
                                        /images/banery/mobile/chore-migdalki-miniclinic-mobile-1000.webp 1000w,
                                        /images/banery/mobile/chore-migdalki-miniclinic-mobile-1200.webp 1200w,
                                        /images/banery/mobile/chore-migdalki-miniclinic-mobile-1400.webp 1400w" />

                                <source className='img-baner1' width='2200' height='701' media="(min-width: 1000px)"
                                srcSet="/images/banery/pc/chore-migdalki-miniclinic-1600.webp 1600w,
                                        /images/banery/pc/chore-migdalki-miniclinic-1800.webp 1800w,
                                        /images/banery/pc/chore-migdalki-miniclinic-2000.webp 2000w,
                                        /images/banery/pc/chore-migdalki-miniclinic-2200.webp 2200w" />

                                <img loading="lazy" className='img-baner1' width='2200' height='701' 
                                src='/images/banery/pc/chore-migdalki-miniclinic-2200.webp'
                                alt='Leczenie migdałków u dzieci Rzeszów' />
                        </picture>

                       
                    </div>
                </div>

                <div className='navigation-manual'>
                    <label htmlFor='radio1' className='manual-btn' id='radio1-label'></label>
                    <label htmlFor='radio2' className='manual-btn' id='radio2-label'></label>
                    <label htmlFor='radio3' className='manual-btn' id='radio3-label'></label>
                    <label htmlFor='radio4' className='manual-btn' id='radio4-label'></label>
                </div>  
            </div>
        </div>

        );
    }



function RadioClicked(e){
    // e.preventDefault();
 
     for(var i=1; i<=4; i++){
         if(document.getElementById('radio'+i) ){
             if( document.getElementById('radio'+i).checked){
                ColorRadioLabelBg(i);
                counter = i+1;
                if(counter > 4){
                    counter = 1;
                }
                break;
            }
         }
     }
     
     clearInterval(interval);
     interval = null;
     AutomaticNavigation();
 
 }
 
 function ColorRadioLabelBg(num){
    
 
     for(var i =1;i<=4;i++){
       //  if(i != num){
         document.getElementById('radio'+i+'-label').style.background = 'transparent';
         //}
     }
 
     document.getElementById('radio'+num+'-label').style.background = 
     getComputedStyle(document.documentElement)
     .getPropertyValue('--text-color');;
     
 }
 
 function AutomaticNavigation(){
    
     if(firstcycle){
         
         ColorRadioLabelBg(counter-1);
         firstcycle = false;
     }
 
     //console.log('navigacjaa');
    
     if(interval ){
         //do nothing
     }else{
         interval = setInterval(function(){
             if(document.getElementById('radio'+counter)){
                document.getElementById('radio'+counter).checked = true;
                ColorRadioLabelBg(counter);
    
                counter++;
                
                if(counter > 4){
                    counter = 1;
                }
            }
         }, 5000);
     }
 }
