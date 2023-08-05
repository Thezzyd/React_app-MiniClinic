import '../css/Navbar.css';
import React from 'react';
import NavbarLink from './NavbarLink';
import {BiHomeAlt, BiReceipt, BiInfoCircle, BiMoon} from "react-icons/bi";
import {MdOutlineKeyboardArrowRight, MdOutlinePermContactCalendar} from "react-icons/md";
import {GoBook} from "react-icons/go";
import {BsSun} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";
import Img_lazy_load from './Img_lazy_load';
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
let sidebarMode= 'sidebar';
function SetSidebar(){
    let getSidebar = localStorage.getItem('sidebar');
        if(getSidebar && getSidebar==='close'){
            sidebarMode = 'sidebar close';
          //console.log(sidebarMode);

        //  sidebar.classList.add('close');
  
        }
    };

SetSidebar();

export default function Navbar(){
// toggleRef = React.createRef();

    return(
      <nav className={sidebarMode}>
          <header>
              <div className='image-text'>
                  <span className='image'>
                  
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/logo200.webp'}
                                        imgWidth={'200'}
                                        imgHeight={'200'}
                                        altString={'Klinika laryngologiczna podkarpacie - MiniClinic'}
                                        classString={''} />
                            
                     
                  </span>

                <div className='header-text'>
                    <span className='name text'>MiniClinic</span>
                    <span className='profession text'>Mała klinika </span>
                    <span className='profession text'>specjalistyczna</span>
                </div>
               
              </div>
              
              <i className='toggle' onClick={handleClickToggle}><MdOutlineKeyboardArrowRight /></i>

          </header>

         

            <div className='menu-bar'>
                <div className='menu'>
               
              

                <ul className='nav-links'>

                <NavbarLink 
                    key= {1}
                    boxIcon = {<BiHomeAlt />}
                    mainName = 'Home'
                    navLink = '/'
                />

                 <NavbarLink 
                    key= {2}
                    boxIcon = {<BiInfoCircle />}
                    mainName = 'O nas'
                    navLink = '/'
                    subLinks = {
                        [{
                             subLinkName: 'Leczenie chrapania i bezdechu sennego',
                             subLinkPath: '/chrapanie',
                        },
                        {
                            subLinkName: 'Migdałek gardłowy i migdałki podniebienne',
                            subLinkPath: '/migdalki',
                        },
                        {
                            subLinkName: 'Korekra przegrody nosowej',
                            subLinkPath: '/leczenie-skrzywienia-przegrody',
                        }
                        ]
                    }

                />
                

                <NavbarLink 
                    key= {3}
                    boxIcon = {<BiReceipt />}
                    mainName = 'Oferta'  
                    navLink = '/'
                    subLinks = {
                        [
                        {
                            subLinkName: 'Zabiegi operacyjne',
                            subLinkPath: '/zabiegi',
                        },
                        {
                            subLinkName: 'Badania diagnostyczne',
                            subLinkPath: '/diagnostyka',
                        },
                        {
                            subLinkName: 'Konsultacje',
                            subLinkPath: '/konsultacje',
                        }
                        ]
                    }
                    

                />

              




                <NavbarLink 
                    key= {5}
                    boxIcon = {<MdOutlinePermContactCalendar />}
                    mainName = 'Kontakt'
                    navLink = '/'
                   
                />

            </ul>

                </div>

                <div className='bottom-content'>
               
                    <li className='mode no-link-li'>
                       <div className='moon-sun'>
                           <i className='icon moon'> <BiMoon /> </i>
                           <i className='icon sun'> <BsSun /></i>
                       </div>
                       <span className='mode-text text'>Ciemny Tryb</span>

                       <div className='toggle-switch' onClick={handleClickToggleSwitch} >
                           <span className='switch'></span>
                       </div>
                    </li>
                </div>
            </div>
      </nav>  
    );
}

function handleClickToggleSwitch(e) {
    e.preventDefault();
    //console.log('The link was clicked.');
    const body = document.querySelector('body');
    const modeText = document.querySelector('.mode-text');
    const mobileModeText = document.querySelector('.mobile-mode-text');
    const home = document.querySelector('.parent-page-content');
    body.classList.toggle('dark');
    home.classList.toggle('dark');

    const hospitalIcon = document.querySelector('.hospital-icon');
    const nurseIcon = document.querySelector('.nurse-icon');
    const stetoskopIcon = document.querySelector('.stetoskop-icon');

    if(body.classList.contains('dark')){
        modeText.innerText = 'Jasny Tryb';
        mobileModeText.innerText = 'Jasny Tryb';

        hospitalIcon.src = '/images/ikony/klinika-ciemny.webp';
        nurseIcon.src = '/images/ikony/doktor-specjalista-laryngolog-ciemny.webp';
        stetoskopIcon.src = '/images/ikony/stetoskop-ciemny.webp';

        localStorage.setItem('mode','dark-mode');

     
    }else{
        modeText.innerText = 'Ciemny Tryb';
        mobileModeText.innerText = 'Ciemny Tryb';

        hospitalIcon.src = '/images/ikony/klinika.webp';
        nurseIcon.src = '/images/ikony/doktor-specjalista-laryngolog.webp';
        stetoskopIcon.src = '/images/ikony/stetoskop.webp';

        localStorage.setItem('mode','light-mode');
    }
  }

function handleClickToggle(e) {
    e.preventDefault();
    //console.log('The link was clicked.');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('close');

    if(sidebar.classList.contains('close')){
        localStorage.setItem('sidebar','close')
    }else{
        localStorage.setItem('sidebar','open')
    }

    const liMenuShown = document.querySelectorAll('.showMenu');
    liMenuShown.forEach(element => {
        element.classList.toggle("showMenu");
    });
        
  }
/*
function handleClickSearchBox(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('close');
    localStorage.setItem('sidebar','open')
  }
*/

/*  <NavbarLink 
                    key= {4}
                    boxIcon = {<GoBook />}
                    mainName = 'Informacje'  
                    navLink = '/'
                    subLinks = {
                        [{
                             subLinkName: 'Leczenie chrapania',
                             subLinkPath: '/chrapanie',
                        },
                        {
                            subLinkName: 'Leczenie migdałków',
                            subLinkPath: '/migdalki',
                        },
                        {
                            subLinkName: 'Korekra przegrody',
                            subLinkPath: '/leczenie-skrzywienia-przegrody',
                        },
                        {
                            subLinkName: 'Konsultacje',
                            subLinkPath: '/konsultacje',
                        },
                        {
                            subLinkName: 'Kwalifikacja do operacji',
                            subLinkPath: '/kwalifikacja-do-zabiegow-operacyjnych',
                        }
                        ]
                    }
                   
                    

                />*/