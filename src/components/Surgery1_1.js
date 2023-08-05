
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
                        <h1>Termoablacja podniebienia miękkiego u osób chrapiących i osób z bezdechem sennym </h1>
                        <span className='content-text'> Termoablacja podniebienia miękkiego urządzeniem Ra-Vor to bezkrwawy zabieg wykonywany ambulatoryjnie w znieczuleniu miejscowym.
                             Trwa zwykle 20-30 minut, a jego skutkiem jest wytworzenie malutkich blizn tkankowych w obrębie zbyt wiotkiego podniebienia, 
                             co usztywnia jego strukturę jak również skraca je zwiększając dystans pomiędzy tylną ścianą gardła, a brzegiem podniebienia. 
                             Dzięki zastosowaniu technologii fal radiowych, jak i niskich temperatur koagulacji nie następuje efekt poparzenia, 
                             a krwawienie jest minimalne. Nie ma ryzyka perforacji podniebienia, a okres rekonwalescencji jest szybszy.
                              Mimo to w okresie pooperacyjny chory musi liczyć się z dolegliwościami bólowymi, które trwają od 7 do 10 dni.
                               Ostatecznych efektów operacji spodziewamy się po około 6 tygodniach (jest okres potrzebny do wytworzenia się blizn).
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/termoablacja-podniebinia.webp'}
                                        imgWidth={'780'}
                                        imgHeight={'585'}
                                        altString={'Termoablacja podniebienia w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg termoablacji podniebienia miękkiego.</span> </span></h3>

            </div>
        </div>
    );
}

