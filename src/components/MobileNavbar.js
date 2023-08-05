import { Link } from 'react-router-dom';
import '../css/MobileNavbar.css';

import React from 'react';
import {BiHomeAlt, BiReceipt, BiInfoCircle, BiMoon} from "react-icons/bi";
import {MdOutlineKeyboardArrowRight, MdOutlinePermContactCalendar} from "react-icons/md";
import {BsSun} from "react-icons/bs";
import {TiContacts} from "react-icons/ti";

export default function MobileNavbar(){
    return(
       
            <nav className='mobile-navbar'>
                <div className='mobile-nav-menu'>
                    <ul className='mobile-nav-list'>
                        <li className='mobile-nav-item'>
                         
                             <Link to='/' className='mobile-nav-link' onClick={() => handleScrollToElement('Home')}>
                                <BiHomeAlt className=' mobile-nav-icon' />
                                <span className='mobile-nav-link-name'>Home</span>
                             </Link>
                         
                        </li>
                        <li className='mobile-nav-item'>
                            
                                <Link to='/' className='mobile-nav-link' onClick={() => handleScrollToElement('O nas')}>
                                    <BiInfoCircle className=' mobile-nav-icon' />
                                    <span className='mobile-nav-link-name'>O nas</span>
                                </Link>
                            
                        </li>
                        <li className='mobile-nav-item'>
                            <Link to='/' className='mobile-nav-link' onClick={() => handleScrollToElement('Oferta')}>
                                <BiReceipt className=' mobile-nav-icon' />
                                <span className='mobile-nav-link-name'>Oferta</span>
                            </Link>
                        </li>
                        <li className='mobile-nav-item'>
                            <Link to='/' className='mobile-nav-link' onClick={() => handleScrollToElement('Kontakt')}>
                                <MdOutlinePermContactCalendar className=' mobile-nav-icon' />
                                <span className='mobile-nav-link-name'>Kontakt</span>
                            </Link>
                        </li>
                      
                        <li className='mobile-nav-item dark-mode' onClick={handleClickToggleSwitch}>
                            <a href='#' className='mobile-nav-link'>
                                <BiMoon className='mobile-nav-icon moon' />
                                <BsSun className='mobile-nav-icon sun'/>
                            
                                 <span className='mobile-nav-link-name mobile-mode-text'>Ciemny Tryb</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>  
     
    );
}

function handleScrollToElement(value) {
    try{
        var aboutElement = null;

        if(value === 'Home'){
            aboutElement = document.querySelector('.home_element');}
        else if(value === 'O nas'){
            aboutElement = document.querySelector('.about_element');
        }
        else if(value === 'Oferta'){
            aboutElement = document.querySelector('.services_element');
        }
        else if(value === 'Kontakt'){
            aboutElement = document.querySelector('.contact_element');
        }
        window.scrollTo(0, aboutElement.offsetTop);
    }catch(err){
        localStorage.setItem('goTo',value);
    }
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

        localStorage.setItem('mode','light-mode');

        hospitalIcon.src = '/images/ikony/klinika.webp';
        nurseIcon.src = '/images/ikony/doktor-specjalista-laryngolog.webp';
        stetoskopIcon.src = '/images/ikony/stetoskop.webp';


    }
  }
