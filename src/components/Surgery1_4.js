import {
    useComponentDidMount
  } from "../scripts/Utils.js";
import Img_lazy_load from "./Img_lazy_load.js"; // const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
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
                        <h1>Termoablacja migdałków podniebiennych </h1>
                        <span className='content-text'> Zabieg wykonywany u osób z przerośniętymi migdałkami podniebiennymi wykorzystuje termoablację (radiochirurgię).
                             Elektrody igłowe wprowadzane w tkankę migdałków powodują redukcję ich objętości przez koagulację i powstawanie blizny 
                             w trakcie gojenia.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/termoablacja-migdalkow-podniebiennych.webp'}
                                        imgWidth={'900'}
                                        imgHeight={'700'}
                                        altString={'Termoablacja migdałków podniebiennych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg termoablacji migdałków podniebiennych.</span> </span></h3>

            </div>
        </div>
    );
}