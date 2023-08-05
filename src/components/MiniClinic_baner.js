import '../css/MainBaner.css';

const MiniClinic_baner = () =>{

    return(
        <div className='main-baner '>
            <div className='slider'>
                <div className='slides'>
                    <div className='slide first'>
                        <picture>
                            <source  width='1400' height='350' media="(max-width: 1000px)"  
                            srcSet="/images/banery/mobile/wizytowka-miniclinic-mala-mobile-400.webp 400w,
                                    /images/banery/mobile/wizytowka-miniclinic-mala-mobile-600.webp 600w,
                                    /images/banery/mobile/wizytowka-miniclinic-mala-mobile-800.webp 800w,
                                    /images/banery/mobile/wizytowka-miniclinic-mala-mobile-1000.webp 1000w,
                                    /images/banery/mobile/wizytowka-miniclinic-mala-mobile-1200.webp 1200w,
                                    /images/banery/mobile/wizytowka-miniclinic-mala-mobile-1400.webp 1400w" />

                            <source  width='2200' height='350' media="(min-width: 1000px)"
                            srcSet="/images/banery/pc/wizytowka-miniclinic-mala-1600.webp 1600w,
                                    /images/banery/pc/wizytowka-miniclinic-mala-1800.webp 1800w,
                                    /images/banery/pc/wizytowka-miniclinic-mala-2000.webp 2000w,
                                    /images/banery/pc/wizytowka-miniclinic-mala-2200.webp 2200w" />

                            <img loading="lazy" width='2200' height='350' 
                            src='/images/home/banery/pc/wizytowka-miniclinic-mala-2200.webp'
                            alt='MiniClinic - konsultacje laryngologiczne dzieci i dorosłych' /> 
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );

}
   

  export default MiniClinic_baner;

/* <picture>   <Suspense fallback={<span>Wczytywanie...</span>}>
                                    <Img_lazy_load
                                        isSrcSet={true}
                                        srcSetString={`./images/banery/mobile/wizytowka-miniclinic-mala-mobile-400.webp 400w,
                                                        ./images/banery/mobile/wizytowka-miniclinic-mala-mobile-600.webp 600w,
                                                        ./images/banery/mobile/wizytowka-miniclinic-mala-mobile-800.webp 800w,
                                                        ./images/banery/mobile/wizytowka-miniclinic-mala-mobile-1000.webp 1000w,
                                                        ./images/banery/mobile/wizytowka-miniclinic-mala-mobile-1200.webp 1200w,
                                                        ./images/banery/mobile/wizytowka-miniclinic-mala-mobile-1400.webp 1400w,
                                                        ./images/banery/pc/wizytowka-miniclinic-mala-1600.webp 1600w,
                                                        ./images/banery/pc/wizytowka-miniclinic-mala-1800.webp 1800w,
                                                        ./images/banery/pc/wizytowka-miniclinic-mala-2000.webp 2000w,
                                                        ./images/banery/pc/wizytowka-miniclinic-mala-2200.webp 2200w`}
                                        srcString={'./images/home/banery/pc/wizytowka-miniclinic-mala-2200.webp'}
                                        altString={'MiniClinic - konsultacje laryngologiczne dzieci i dorosłych'}
                                        classString={'img-rejestracja'} />
                            </Suspense>*/