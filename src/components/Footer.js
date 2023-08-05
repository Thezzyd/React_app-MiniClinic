import '../css/Footer.css';
import { Link } from 'react-router-dom';
import Img_lazy_load from './Img_lazy_load';//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Footer(){
            return(
                <section className='footer'>
        
                    <div className='footer-column'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/banery/logo-miniclinic-400.webp'}
                                        imgWidth={'400'}
                                        imgHeight={'200'}
                                        altString={'Klinika laryngologiczna MiniClinic w Rzeszowie'}
                                        classString={''} />

                        <h2>Mini<span className='clinic-text'>Clinic</span></h2>
                        <h4>Mała klinika specjalistyczna</h4>
                    </div>
                    <div className='footer-column'>
                        <h4>MiniClinic</h4>
                        <span>Mała klinika specjalistyczna</span>
                        <span>Litewska 4b/10, 35-330 Rzeszów</span>
                        <hr className='horizontal-footer-hr' />
                        <span>Serdecznie zapraszamy do rejestracji pod telefonem:</span>
                        <span>Tel. 790 759 759</span>
                        <span>(W razie nieudanego kontaktu staramy się oddzwaniać)</span>
                    </div>
                    <div className='footer-column'>
                        <Link to='/' className='footer-link' onClick={() => handleScrollToElement('Home')}>Home</Link>
                        <Link to='/' className='footer-link' onClick={() => handleScrollToElement('O nas')}>O nas</Link>
                        <Link to='/' className='footer-link' onClick={() => handleScrollToElement('Oferta')}>Oferta</Link>
                        <Link to='/' className='footer-link' onClick={() => handleScrollToElement('Kontakt')}>Kontakt</Link>
                    </div>
        
                </section>
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