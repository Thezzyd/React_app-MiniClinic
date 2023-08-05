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
                        <h1>UPPP - Operacja plastyczna gardła, podniebienia, języczka podniebienia u osób chrapiących i osób z bezdechem sennym </h1>
                        <span className='content-text'> Zabieg ten wykonywany jest zwykle w połączeniu z termoablacją podniebienia miękkiego i polega na wycięciu 
                            nożem elektrycznym nadmiaru tkanek gardła i podniebienia, skróceniu języczka podniebienia, wycięciu części 
                            łuków podniebienno-gardłowych czy zmniejszeniu objętości migdałków podniebiennych.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/uupp.webp'}
                                        imgWidth={'900'}
                                        imgHeight={'700'}
                                        altString={'Bezdech senny, chrapanie - operacja plastyczna gardła, podniebienia i języczka podniebienia w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg UPPP.</span> </span></h3>

            </div>
        </div>
    );
}