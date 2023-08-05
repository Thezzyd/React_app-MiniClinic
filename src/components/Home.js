import { Link } from 'react-router-dom';

import { useComponentDidMount} from "../scripts/Utils.js";
import '../css/Home.css';
import '../css/newHome.css';

import {BiRightArrowAlt} from "react-icons/bi";
import {BsFillStarFill, BsClock, BsArrowReturnRight} from "react-icons/bs";
import {MdLocationOn, MdPhoneInTalk, MdOutlineAccessTimeFilled, MdEmail} from "react-icons/md";
import {FaFileMedical} from "react-icons/fa";
import {GiClick} from "react-icons/gi";
import {GoBook} from "react-icons/go";
import Bottom_page_images from './Bottom_page_images.js';
import MainBaner from './MainBaner';
import React, { Suspense } from 'react';
import Img_lazy_load from './Img_lazy_load';
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
//const MainBaner = React.lazy(() => import('./MainBaner'));
//const Google_map = React.lazy(() => import('./Google_map'))
import Google_map from './Google_map';
function GetMode(){
    let getMode = localStorage.getItem('mode');
        if(getMode && getMode==='dark-mode'){
          const body = document.querySelector('body');
          body.classList.add('dark');
  
        }
    };

function GoToCorrectSection(){
    if(localStorage.getItem('goTo')){
        let getSection = localStorage.getItem('goTo');
        var aboutElement = null;

        if(getSection === 'Home'){
            aboutElement = document.querySelector('.home_element');}
        else if(getSection === 'O nas'){
            aboutElement = document.querySelector('.about_element');
        }
        else if(getSection === 'Oferta'){
            aboutElement = document.querySelector('.services_element');
        }
        else if(getSection === 'Kontakt'){
            aboutElement = document.querySelector('.contact_element');
        }

        if(aboutElement){
        window.scrollTo(0, aboutElement.offsetTop);}
        else{
            window.scrollTo(0, 0);
        }
        localStorage.removeItem('goTo');
    }
}
 


export default function Home(){
  
    useComponentDidMount(() => {
        GoToCorrectSection();
       
      });
     
        return(
        <>
      
                    <MainBaner />
                   
           
            <div className='home-page-info'>
            
                <div className='home-page-title'>
               
                    <h1 className='clinic-text'>Laryngologia Dzieci i Dorosłych</h1>
                    <h2>Zapraszamy Do Naszej Kliniki!</h2>
                </div>
                       
              
               <div className='homeSectionCard'>
                    <div className='homeSectionCard-content'>
                    <h2 className='about_element'>O nas</h2>
                    <hr className='separator-line' />

                   
                        <div className='homeSectionCard-content-img_text'>
                            
                            <div className='homeSectionCard-content-img-container'>

                                
                          
                                    <Img_lazy_load
                                        isSrcSet={true}
                                        srcSetString={`/images/home/rejestracja-400.webp 400w,
                                                        /images/home/rejestracja-600.webp 600w,
                                                        /images/home/rejestracja-800.webp 800w,
                                                        /images/home/rejestracja-1000.webp 1000w,
                                                        /images/home/rejestracja-1200.webp 1200w`}
                                        srcString={'/images/home/rejestracja-1200.webp'}
                                        imgWidth={'1200'}
                                        imgHeight={'801'}
                                        altString={'Klinika laryngologiczna w Rzeszowie, leczenie dzieci i dorosłych'}
                                        classString={'homeSectionCard-content-img'} />
                            
                            </div>

                            <div className='homeSectionCard-content-text'>
                              
                                <span className='content-text'>
                                    Dbając o najwyższe standardy medyczne, do Państwa dyspozycji mamy, <span className='bookmark-text'>precyzyjny sprzęt zabiegowy i endoskopowy renomowanych firm</span>.
                                    W ten sposób możemy wykonywać <span className='bookmark-text'>zaawansowaną diagnostykę</span>, jak również prowadzić <span className='bookmark-text'>ambulatoryjne leczenie operacyjne</span>.
                                    Doktor Paweł Białogłowski i jego personel ma <span className='bookmark-text'>ponad 10 letnie doświadczenie</span> w przeprowadzaniu mało inwazyjnych, ambulatoryjnych zabiegów likwidujących przyczyny <span className='bookmark-text'>zaburzeń snu pod postacią chrapania i bezdechów śródsennych</span>.
                                    Naszymi pacjentami są nie tylko osoby dorosłe, dbamy również o zdrowie najmłodszych pacjentów. Tych z Państwa, którzy borykają się z problemami laryngologicznymi, <span className='bookmark-text'>zachęcamy do zapoznania się z naszą ofertą</span>.
                                </span>                           
                            </div>

                        </div>

                    </div>
                </div>
              

               
                           <div className='special-about-section-title'>
                                <h3>Dowiedz się więcej o <span className='bookmark-text'>najczęściej leczonych problemach </span>
                                 w Mini Clinic:</h3>    
                            </div>

                                    <div className='special-about-section-element'>
                                        <div className='click-on-div-icon-try'>
                                            <GiClick className='hand-click-icon' />
                                        </div>
                                        <Link to='/chrapanie' className='home-special-link-a' >
                                            <div className='star-container'>
                                                <i className='bx bxs-star small-star'><BsFillStarFill /></i>
                                                <i className='bx bxs-star'><BsFillStarFill /></i>
                                                <i className='bx bxs-star small-star'><BsFillStarFill /></i>
                                            </div>
                                            <div className='special-about-section-element-link'>
                                                
                                                <h4 className='home-speciality-text'><i className='arrow-icon special-section-arrow' ><BiRightArrowAlt /></i>
                                                 Leczenie chrapania i bezdechu sennego</h4>
                                            </div>
                                            <span className='click-for-more-text'>Kliknij aby dowiedzieć się więcej...</span>
                                        </Link>
                                    </div>
                                
                                    <div className='special-about-section-element'>
                                    <div className='click-on-div-icon-try'>
                                            <GiClick className='hand-click-icon' />
                                        </div>
                                        <Link to='/migdalki' className='home-special-link-a'>
                                            <div className='star-container'>
                                                <i className='bx bxs-star small-star'><BsFillStarFill /></i>
                                                <i className='bx bxs-star'><BsFillStarFill /></i>
                                                <i className='bx bxs-star small-star'><BsFillStarFill /></i>
                                            </div>
                                            <div className='special-about-section-element-link'>
                                            
                                                <h4 className='home-speciality-text'><i className='arrow-icon special-section-arrow' ><BiRightArrowAlt /></i>
                                                 Migdałek gardłowy i migdałki podniebienne u dzieci</h4>
                                                
                                            </div>
                                            <span className='click-for-more-text'>Kliknij aby dowiedzieć się więcej...</span>
                                        </Link>
                                    </div>
                                
                                    <div className='special-about-section-element'>
                                    <div className='click-on-div-icon-try'>
                                            <GiClick className='hand-click-icon' />
                                        </div>
                                        <Link to='/leczenie-skrzywienia-przegrody' className='home-special-link-a'>
                                            <div className='star-container'>
                                                <i className='bx bxs-star small-star'><BsFillStarFill /></i>
                                                <i className='bx bxs-star'><BsFillStarFill /></i>
                                                <i className='bx bxs-star small-star'><BsFillStarFill /></i>
                                            </div>
                                            <div className='special-about-section-element-link'>
                                                
                                                <h4 className='home-speciality-text'><i className='arrow-icon special-section-arrow' ><BiRightArrowAlt /></i>
                                                 Skrzywiona przegroda nosowa</h4>
                                            </div>
                                            <span className='click-for-more-text'>Kliknij aby dowiedzieć się więcej...</span>
                                        </Link>
                                    </div>     

               


                

                <div className='homeSectionCard'>
                    <div className='homeSectionCard-content'>
                    <h2 className='services_element'>Oferta</h2>
                    <hr className='separator-line' />
                   
                       
                    </div>
                </div>
                


                <div className='home-page-info-card4'>
                <div className='home-free-text'>
                <span className='content-text'> W <span className='bookmark-text'>Mini Clinic</span> oferujemy <span className='bookmark-text'>kompleksowe konsultacje, </span>
                 podczas których wykonujemy <span className='bookmark-text'>badania diagnostyczne. </span> 
                Przeprowadzamy <span className='bookmark-text'>szeroki wachlarz zabiegów operacyjnych z zakresu laryngologii</span>, zarówno w znieczuleniu miejscowym jak i ogólnym.

                <span className='bookmark-text'> Zadzwoń do nas i umów się na wizytę lub wybrany zabieg! </span>
                 <Link to='/' onClick={() => handleScrollToContact()} ><span className='click-for-more-link-text'>(kontakt)</span></Link>

                       </span>


                    </div>
                    <div className='info-card-new-parent'>
                        <Link to='/konsultacje' className='link-to-div-home'>
                            <div className='info-card-new'>
                                <div className='click-on-div-icon-try'>
                                    <GiClick className='hand-click-icon' />
                                </div>

                                <div className='star-container2'>
                                        <GoBook className='bx bxs-star' />
                                </div>


                                <div className='info-card-new2'>
                                    <div className='special-about-section-element-link'>
                                                                
                                        <h4 className='home-speciality-text'><i className='arrow-icon special-section-arrow' ><BiRightArrowAlt /></i>
                                            Konsultacje w Mini Clinic</h4>

                                    </div>
                                    <span className='click-for-more-text'>Kliknij aby dowiedzieć się więcej...</span>
                                </div>

                            

                            </div> 
                        </Link>
                    </div>
                 <div className='card4-items-container'>


                        <div className = 'card4-item-box-services'>
                            <div className='card4-item-title'><h2>Zabiegi operacyjne</h2></div>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/home/zabiegi-operacyjne.webp'}
                                        imgWidth={'800'}
                                        imgHeight={'438'}
                                        altString={'Zabiegi operacyjne - laryngologia'}
                                        classString={'card4_img'} />

                            <div className='card4-item-box-text-services'>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym'>
                                <div className='card4-item-box-text-position-services'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Zabiegi operacyjne
                                                w znieczuleniu miejscowym</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-podniebienie'> 
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Termoablacja podniebienia</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym/uppp'> 
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>UPPP - Uwulopalatofaryngoplastyka</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym/kryptoliza-migdalki'> 
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Kryptoliza migdałków podniebiennych</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-migdalki'> 
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Termoablacja migdałków podniebiennych</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-nos'> 
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Termoablacja małżowin nosowych dolnych</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-miejscowym/koagulacja'> 
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Koagulacja chemiczna lub elektryczna nosa</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>

                                <Link to='/zabiegi-w-znieczuleniu-ogolnym'>
                                <div className='card4-item-box-text-position-services'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Zabiegi operacyjne
                                                w znieczuleniu ogólnym</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-ogolnym/zabiegi-operacyjne-migdalkow'>
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Zabiegi operacyjne migdałków</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-ogolnym/drenaz-jam-bebenkowych'>
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Drenaż jam bębenkowych</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-ogolnym/septoplastyka'>
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Operacja plastyczna przegrody nosa</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-ogolnym/usuniecie-polipow-nosa'>
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Usunięcie polipów nosa</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/zabiegi-w-znieczuleniu-ogolnym/operacja-zatok-przynosowych'>
                                <div className='card4-item-box-text-position-services sub-link'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon-to-center' ><BsArrowReturnRight /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Operacja zatok szczękowych</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                

                            </div>
                        </div>

                        <div className = 'card4-item-box-services'>
                            <div className='card4-item-title'><h2>Badania diagnostyczne</h2></div>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/home/diagnostyka.webp'}
                                        imgWidth={'800'}
                                        imgHeight={'438'}
                                        altString={'Diagnostyka - laryngologia'}
                                        classString={'card4_img'} />
                            <div className='card4-item-box-text-services'>
                                <Link to='/diagnostyka/endoskopia-nos-gardlo-krtan' >
                                    <div className='card4-item-box-text-position-services'>
                                        <div className='card4-item-box-text-position-merger'>
                                        <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                            <div className='card4-item-box-text-position-colum'>
                                                <h5>
                                                Endoskopowe badanie nosa, gardła i krtani</h5>
                                            </div>
                                        </div>
                                    </div>
                               </Link>
                               <Link to='/diagnostyka/endoskopia-migdalki'>
                                    <div className='card4-item-box-text-position-services'>
                                        <div className='card4-item-box-text-position-merger'>
                                        <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                            <div className='card4-item-box-text-position-colum'>
                                                <h5>
                                                Endoskopowe badanie migdałka gardłowego u dzieci</h5>
                                            </div>
                                        </div>
                                    </div>
                               </Link>
                               <Link to='/diagnostyka/audiometria-tonalna' >
                                    <div className='card4-item-box-text-position-services'>
                                        <div className='card4-item-box-text-position-merger'>
                                        <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                            <div className='card4-item-box-text-position-colum'>
                                                <h5>
                                                Audiometria tonalna</h5>
                                            </div>
                                        </div>
                                    </div>
                               </Link>
                               <Link to='/diagnostyka/tympanometria'>
                                    <div className='card4-item-box-text-position-services'>
                                        <div className='card4-item-box-text-position-merger'>
                                        <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                            <div className='card4-item-box-text-position-colum'>
                                                <h5>
                                                Tympanometria</h5>
                                            </div>
                                        </div>
                                    </div>
                               </Link>
                               <Link to='/diagnostyka/audiometria-impedancyjna' >
                                    <div className='card4-item-box-text-position-services'>
                                        <div className='card4-item-box-text-position-merger'>
                                        <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                            <div className='card4-item-box-text-position-colum'>
                                                <h5>
                                                Audiometria impedancyjna</h5>
                                            </div>
                                        </div>
                                    </div>
                               </Link>
                               <Link to='/diagnostyka/badanie-poligraficzne' >
                                    <div className='card4-item-box-text-position-services'>
                                        <div className='card4-item-box-text-position-merger'>
                                        <h2><i className='arrow-icon-to-center' ><BiRightArrowAlt /></i></h2>
                                            <div className='card4-item-box-text-position-colum'>
                                                <h5>
                                                Badanie poligraficzne</h5>
                                            </div>
                                        </div>
                                    </div>
                               </Link>
                              
                            </div>
                            
                        </div>

                </div>
               </div>

               <div className='homeSectionCard'>
                    <div className='homeSectionCard-content'>
                    <h2 className='contact_element'>Kontakt</h2>
                    <hr className='separator-line' />
                   
                       
                    </div>
                </div>

             
                   
               <div className='home-page-info-card'>
                    <i className='card-icon'><MdLocationOn /></i>
                    <span className='box-card-text'>
                        <h3>Adres MiniClinic</h3>
                        <h5>ul. Litewska 4b/10,<br />
                         35-330 Rzeszów</h5>
                    </span>
                </div>
                
               
                <div className='home-page-info-card'>
                    <i className='card-icon'><MdOutlineAccessTimeFilled /></i>
                    <span className='box-card-text'>
                        <h3>Rejestracja czynna</h3>
                        <h5>Poniedziałek - Piątek <br />
                         9:00-18:00</h5>
                    </span>
                </div>

                <div className='home-page-info-card'>
                    <i className='card-icon'><MdPhoneInTalk /></i>
                    <span className='box-card-text'>
                        <h3>Rejestracja telefoniczna</h3>
                        <h5>Tel. 790 759 759</h5>
                        <h5>(W razie nieudanego kontaktu staramy się oddzwaniać)</h5>
                    </span>
                </div>


        <div className='home-page-info-specjalizacja'>
          
                <Google_map />
            
        </div>
       
               
            
            <Bottom_page_images />
              
           
            </div>
        
            
        </>
        );
    
}

function handleScrollToContact() {
    try{
       
        var contactElement = document.querySelector('.contact_element');
        window.scrollTo(0, contactElement.offsetTop);

    }catch(err){
        localStorage.setItem('goTo','contact');
    }
  }

/**/

//           <GoogleMap zoom ={10} center={{lat:40, lng: -80}} mapContainerClassName='google-map'></GoogleMap>
/* const{isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCejrOJ6mzkTD3bTwEboa1P-7SRKSFOmzI",
    });*/
    // if(!isLoaded) return <div>Loading...</div>;
//style={{ backgroundImage: `url("./images/pattern.png")` }}
//  <img className='img-baner1' src='./images/baner1_dark.jpg' alt='baner1' />
//                    <img className='img-baner1' src='./images/baner1.jpg'  alt='baner1' />

/* <div className='home-page-info-icon-container'>
                    <img src='./images/icons/plus_icon3.png' className='plus-icon-img' />
                </div>
                <div className='home-page-info-icon-container2'>
                    <img src='./images/icons/arrow_icon.png' className='plus-icon-img2' />
                </div>*/
                /* <span className='neutral-text'>Nasza klinika oferuje profesjonalne usługi w dziedzinie <span className='bookmark-text'>laryngologii dzieci i dorosłych</span>.
                    Wieloletni w doświadczeniu zespół lekarzy oferuje <span className='bookmark-text'>konsultacje</span>, przeprowadzenie <span className='bookmark-text'>diagnostyki<span></span>, wykonywanie <span className='bookmark-text'></span>zabiegów operacyjnych</span> z zakresu laryngologii w znieczuleniu ogólnym jak i miejscowym.
                    </span>*/



                    /* <div className='home-page-info-card2'>
                    <div className='icon-img-container'>
                        <img className='icon-img' src='./images/icons/consultation_ready1.png' alt='consultation-img' />
                    </div>
                    <div className='column-card-content'>
                        <h6>KOMPLEKSOWE</h6>
                        <h2>Konsultacje</h2>
                        <span>
                             Konsultacje w Mini Clinic mają charakter <span className='bookmark-text'>kompleksowy</span>. 
                             Wskazane są w przypadku chorób uszu,
                              nosa, gardła, krtani, ślinianek oraz innych narządów głowy i szyi. W trakcie konsultacji
                               w Mini Clinic korzystamy z <span className='bookmark-text'>nowoczesnego, specjalistycznego
                                sprzętu</span>.
                                Podczas jednej wizyty można przeprowadzić <span className='bookmark-text'>pełną endoskopową ocenę </span>
                                 górnych dróg oddechowych.
                                 Jednocześnie prawie <span className='bookmark-text'>wszystkie badania diagnostyczne</span> z zakresu laryngologii zlecone podczas 
                                 konsultacji można wykonać  <span className='bookmark-text'>na miejscu</span>...
                        </span>
                        <a>Więcej...</a>
                    </div>
                </div>*/


/* <div className='home-page-info-card2'>
                    <div className='icon-img-container'>
                        <img className='icon-img' src='./images/icons/diagnosis_ready1.png' alt='consultation-img' />
                    </div>
                    <div className='column-card-content'>
                        <h6>PROFESJONALNA</h6>
                        <h2>Diagnostyka</h2>
                        <span>
                              W Mini Clinic stosujemy  <span className='bookmark-text'>nowoczesne metody </span>
                               diagnostyczne i lecznicze w zakresie otolaryngologii u
                               <span className='bookmark-text'> dzieci i dorosłych</span>. Poza standardowym 
                              badaniem laryngologicznym do diagnostyki wykorzystujemy <span className='bookmark-text'>endoskopowy
                               tor wizyjny</span> dający możliwość 
                              dokładnej <span className='bookmark-text'>oceny z dużym powiększeniem i doskonałą rozdzielczością</span> poszczególnych odcinków górnych
                               dróg oddechowych oraz uszu. Nasza klinika dysponuje również <span className='bookmark-text'>
                                   specjalistycznym sprzętem audiologicznym</span>
                                umożliwiającym diagnostykę narządu słuchu...
                        </span>
                        <a>Więcej...</a>
                    </div>
                    
                </div>
               */


                /*  <div className='home-page-info-card2'>
                    <div className='icon-img-container'>
                        <img className='icon-img' src='./images/icons/surgeon_ready1.png' alt='consultation-img' />
                    </div>
                    <div className='column-card-content'>
                        <h6>PRZEPROWADZAMY</h6>
                        <h2>Zabiegi operacyjne</h2>
                        <span>
                             W Mini Clinic przeprowadzmy zabiegi operacyjne zarówno w <span className='bookmark-text'>znieczuleniu miejscowym (20-30 min)</span> 
                             jak i w <span className='bookmark-text'>znieczuleniu
                            całkowitym (w zależności od typu trwa od 20 do 60 min)</span>. Zabiegi wykonywane są po uprzedniej kwalifikacji pacjęta podczas
                            konsultacji i diagnostyki. Wszystkie operacje wykonywane są przez <span className='bookmark-text'>doświadczonych
                             lekarzy</span>, wspierając się <span className='bookmark-text'>najaktualniejszą
                             wiedzą</span> ze świata medycyny...
                           
                        </span>
                        <a>Więcej...</a>
                    </div>
                </div>*/

                // <img src='./images/mini-clinic.png' className='title-logo-img' />


                /* <div className='home-page-info-card'>
                <i className='bx bx-calendar card-icon' ></i>
                    <span className='box-card-text'>
                     <h1>Umów wizytę online - To proste!</h1>
                     <h3>Wypełnij formularz i zatwierdź</h3>
                     </span>
                </div>*/

                /*                <div className='home-page-info-card4'>
                 <div className='card4-items-container'>
                        <div className = 'card4-item-box'>
                            <img src='./images/icons/nose_icon.png' alt='nose_icon' className='card4_img_icon'/>
                            <div className='card4-item-box-text'>
                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Septoplastyka nosa</span></h4>
                                            <h5>Korekcja skrzywienia przegrody</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>
                               
                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                        <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Polipectomia</span></h4>
                                            <h5>Usówanie polipów nosa</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                        <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Koagulacja chemiczna lub elektryczna</span></h4>
                                            <h5>Przeciwdziałanie krawieniom z nosa</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                   
                                </div>

                               
                               
                                <div className='card-4-item-box-more-div'>
                                  <a>Więcej...</a>
                                </div>
                            </div>
                        </div>
                        <div className = 'card4-item-box'>
                            <img src='./images/icons/ear_icon.png' alt='ear_icon' className='card4_img_icon'/>
                            <div className='card4-item-box-text'>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Drenaż jam bębenkowych</span> </h4>
                                            <h5>Usunięcie zalegającej w jamie bębenkowej wydzieliny</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Audiometria tonalna</span></h4>
                                            <h5>Określenie wielkości i rodzaju ubytku słuchu</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Tympanometria</span></h4>
                                            <h5>Ocena ruchomości (podatności) błony bębenkowej</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>
                             
                                <div className='card-4-item-box-more-div'>
                                  <a>Więcej...</a>
                                </div>
                            </div>
                        </div>
                        <div className = 'card4-item-box'>
                            <img src='./images/icons/tonsils_icon.png' alt='tonsils_icon' className='card4_img_icon'/>
                            <div className='card4-item-box-text'>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Adenotomia</span></h4>
                                            <h5>Usunięcie migdałka gardłowego</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Tonsillectomia</span></h4>
                                            <h5>Usunięcie migdałków podniebiennych</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>

                                <div className='card4-item-box-text-position'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <i className='bx bxs-star circle-icon' ></i>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h4><span className='bookmark-text'>Termoablacja podniebienia</span></h4>
                                            <h5>Plastyka podniebienia miękkiego i języczka</h5>
                                        </div>
                                    </div>
                                    <div className='arrow-icon-div'>
                                         <i className='bx bx-right-arrow-alt arrow-icon'></i>
                                    </div>
                                </div>
                              
                                <div className='card-4-item-box-more-div'>
                                  <a>Więcej...</a>
                                </div>
                            </div>
                        </div>
                </div>
               </div>
               
                 <img src='./images/bracket3.png' alt='bracket-img' className='bracket-img' />
               */


                 /*                        <div className = 'card4-item-box-services'>
                            <div className='card4-item-title'><h2>Konsultacje</h2></div>
                           
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/home/konsultacje.webp'}
                                        imgWidth={'500'}
                                        imgHeight={'271'}
                                        altString={'Konsultacje laryngologiczne'}
                                        classString={'card4_img'} />
                            
                           
                            <div className='card4-item-box-text-services'>
                                <Link to='/konsultacje-dorosli' >
                                <div className='card4-item-box-text-position-services'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon' ><BiRightArrowAlt /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Konsultacje laryngologiczne dorosłych</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/konsultacje-dzieci'>

                                <div className='card4-item-box-text-position-services'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon' ><BiRightArrowAlt /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Konsultacje laryngologiczne dzieci i młodzieży</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/konsultacje-chrapanie'>
                                <div className='card4-item-box-text-position-services'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon' ><BiRightArrowAlt /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Kwalifikacje do zabiegów operacyjnych u osób
                                                z chrapaniem i bezdechem sennym</h5>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                <Link to='/konsultacje-kwalifikacja'>
                                <div className='card4-item-box-text-position-services'>
                                    <div className='card4-item-box-text-position-merger'>
                                    <h2><i className='arrow-icon' ><BiRightArrowAlt /></i></h2>
                                        <div className='card4-item-box-text-position-colum'>
                                            <h5>Kwalifikacje do zabiegów operacyjnych
                                                z zakresu laryngologii</h5>
                                        </div>
                                    </div>
                                </div> 
                                </Link>
                            </div>
                        </div>*/




                        /* <div className='home-page-info-card4'>

                    <div className='info-card-new-parent'>
                        <div className='info-card-new'>

                            <div className='star-container'>
                                    <i className='bx bxs-star'><FaFileMedical /></i>
                            </div>

                            <div className='special-about-section-element-link'>
                                                        
                                <h4 className='home-speciality-text'><i className='arrow-icon special-section-arrow' ><BiRightArrowAlt /></i>
                                    Konsultacje w Mini Clinic</h4>

                            </div>

                            <span className='click-for-more-text'>Kliknij aby dowiedzieć się więcej...</span>

                        </div>

                        <div className='info-card-new'>

                            <div className='star-container'>
                                    <i className='bx bxs-star'><FaFileMedical /></i>
                            </div>

                            <div className='special-about-section-element-link'>
                                                            
                                <h4 className='home-speciality-text'><i className='arrow-icon special-section-arrow' ><BiRightArrowAlt /></i>
                                    Kwalifikacja do zabiegów operacyjnych</h4>
                            </div>

                            <span className='click-for-more-text'>Kliknij aby dowiedzieć się więcej...</span>
                        
                        </div>
                    </div>

                </div>
*/