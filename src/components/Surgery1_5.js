import {
    useComponentDidMount
  } from "../scripts/Utils.js";
import Img_lazy_load from "./Img_lazy_load.js";  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Surgery1_1(){
    
    useComponentDidMount(() => {
        const targetElement = document.querySelector('.start-section-surgery');
        window.scrollTo(0, targetElement.offsetTop);
      });

    return(
        <div className='consultationBody'>
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content start-section-surgery'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h1>Termoablacja małżowin nosowych dolnych </h1>
                        <span className='content-text'> Zabieg zmniejszenia masy małżowin nosowych dolnych wykonywany jest zarówno w znieczuleniu miejscowym jak i w ogólnym
                             (krótkotrwałym uśpieniu). Do zabiegu kwalifikowani sa pacjenci z zaburzeniami drożności nosa 
                             wynikającymi z przewlekłego przerostowego zapalenia błony śluzowej nosa. Wskazania indywidualnie ustala lekarz laryngolog.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/termoablacja-malzowin-nosowych-dolnych.webp'}
                                        imgWidth={'900'}
                                        imgHeight={'700'}
                                        altString={'Termoablacja małżowin nosowych dolnych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg termoablacji małżowin nosowych dolnych.</span> </span></h3>

            </div>
        </div>
    );
}

/*  setTimeout(function(){
            const targetElement = document.querySelector('.start-section-surgery');
            window.scrollTo(0, targetElement.offsetTop); },
             100);*/