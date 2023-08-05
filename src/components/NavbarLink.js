import { Link } from 'react-router-dom';
import '../css/NavbarLink.css';
import {MdOutlineKeyboardArrowDown, MdArrowRight} from "react-icons/md";

export default function NavbarLink(props){
    
    if(!props.subLinks){
    return(
        <li>
           
             <Link to={props.navLink} onClick={() => handleScrollToElement(props.mainName)}>
                <i className='icon'>{props.boxIcon}</i>
                <span className='link_name'>{props.mainName}</span>
             </Link>
          
    </li>
    );}else{
        return(
         <li className='menu-Li'>
            <div className="iocn-link">
           
                <Link to={props.navLink} onClick={() => handleScrollToElement(props.mainName)}>
                <i className='icon'>{props.boxIcon}</i>
                        <span className="link_name">{props.mainName}</span>
                </Link>
                <i className='arrow icon' onClick={LinkArrowOnClickEvent}> <MdOutlineKeyboardArrowDown /> </i>
                
            </div>
            <ul className="sub-menu">
                <li>
                    <Link to={props.navLink} onClick={() => handleScrollToElement(props.mainName)} className="link_name">{props.mainName}</Link>
                    </li>
                {props.subLinks.map(items =>{
                    
                    return(<li key={items.subLinkName}><Link to={items.subLinkPath} ><i className='sub-link'><MdArrowRight /></i>{items.subLinkName}</Link></li>);
                })}
                
               
            </ul>
         </li>
        );
    }
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

function LinkArrowOnClickEvent(e){
    e.preventDefault();
    //console.log('The link was clicked.');

    let arrowParent = e.target.parentElement.parentElement.parentElement; // document.querySelector('.arrow-icon-toogle-OnClick');// //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");

    let arrowParent2 = e.target.parentElement.parentElement; // document.querySelector('.arrow-icon-toogle-OnClick');// //selecting main parent of arrow
    arrowParent2.classList.toggle("showMenu");
}
/* */