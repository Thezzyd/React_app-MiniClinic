import React, { Suspense } from 'react';
import Img_lazy_load from './Img_lazy_load';

 const Bottom_page_images = () =>{

    let getMode = localStorage.getItem('mode');
    let hospitalPath = '';
    let nursePath = '';
    let stetoskopPath = '';

    if(getMode && getMode==='dark-mode'){
        hospitalPath = '/images/ikony/klinika-ciemny.webp';
        nursePath = '/images/ikony/doktor-specjalista-laryngolog-ciemny.webp';
        stetoskopPath = '/images/ikony/stetoskop-ciemny.webp';
    
    }else{
        hospitalPath = '/images/ikony/klinika.webp';
        nursePath = '/images/ikony/doktor-specjalista-laryngolog.webp';
        stetoskopPath = '/images/ikony/stetoskop.webp';
    }

    return(
        <div className='home-page-info-specjalizacja' >
                            <Suspense fallback={<span>Wczytywanie...</span>}>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={hospitalPath}
                                        imgWidth={'150'}
                                        imgHeight={'150'}
                                        altString={'Klinika laryngologiczna w Rzeszowie.'}
                                        classString={'icon-specjalization-img hospital-icon'} />
                            </Suspense>
                            <Suspense fallback={<span>Wczytywanie...</span>}>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={nursePath}
                                        imgWidth={'150'}
                                        imgHeight={'150'}
                                        altString={'Wieloletni zespół doświadczonych lekarzy z zakresu laryngologii.'}
                                        classString={'icon-specjalization-img nurse-icon'} />
                            </Suspense>
                            <Suspense fallback={<span>Wczytywanie...</span>}>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={stetoskopPath}
                                        imgWidth={'150'}
                                        imgHeight={'150'}
                                        altString={'Posiadamy specjalistyczny sprzęt medyczny renomowanych firm.'}
                                        classString={'icon-specjalization-img stetoskop-icon'} />
                            </Suspense>
        </div>
     );

  }

  export default Bottom_page_images;


  