
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
import Img_lazy_load from "./Img_lazy_load.js";  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Diagnosis1_6(){

    useComponentDidMount(() => {
        const targetElement = document.querySelector('.start-section-diagnosis_');
        window.scrollTo(0, targetElement.offsetTop);
      });

    return(
        <div className='consultationBody'>
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content start-section-diagnosis_'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h1>Badanie poligraficzne</h1>
                        <span className='content-text'>W celu określenia prawdopodobieństwa, czy cierpisz na obturacyjny bezdech senny niezbędnym 
                            elementem diagnostyki jest badanie poligraficzne. W Mini Clinic w diagnostyce stosujemy zaawansowany 
                            technologicznie, przenośny aparat AliceNightOne. Urządzenie przystosowane jest do diagnozowania 
                            zaburzeń oddechu podczas snu w warunkach domowych bez konieczności pobytu w szpitalu, co dodatkowo
                             pomaga w zredukowaniu stresu związanego z procedurą diagnostyczną. Badanie jest bezbolesne i bezpieczne. 
                             Polega na całonocnym monitorowaniu w czasie snu, takich parametrów jak: przepływ powietrza przez nos,
                              utlenowanie krwi, ruchy klatki piersiowej, pozycję ciała w trakcie snu, rejestruje epizody chrapania,
                               monitoruje częstość akcji serca. Poligrafia pozwala na szybkie wykrycie lekkiej, średniej i ciężkiej postaci bezdechu sennego.
                                Pacjent jest instruowany w naszym ośrodku, a badanie wykonuje w domu. Wszystkie zapisane podczas snu 
                                parametry są szczegółowo analizowane przez lekarza specjalistę i na ich podstawie zostaje wdrożona odpowiednia terapia.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/badanie-poligraficzne.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Badanie poligraficzne w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy badanie poligraficzne.</span> </span></h3>

            </div>
        </div>
    );
}

