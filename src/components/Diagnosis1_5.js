
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
import Img_lazy_load from "./Img_lazy_load.js"; // const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Diagnosis1_5(){

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
                        <h1>Audiometria impedancyjna</h1>
                        <span className='content-text'>Obejmuje tympanometrię uzupełnioną o pomiar odruchów z mięśnia strzemiączkowego, 
                            który jest najmniejszym mięśniem człowieka i znajduje się w uchu środkowym.
                             Pomiaru odruchu dokonuje się ipsilateralnie i kontralateralnie. Badanie wykonuje się przy użyciu specjalnego
                              urządzenia z sondą przykładaną do ucha pacjenta. Audiometria impedancyjna jest podobnie
                               jak sama tympanometria badaniem nieinwazyjnym, obiektywnym i niewymagającym aktywnego udziału osoby badanej.
                                Pozwala na określenie lokalizacji uszkodzenia drogi słuchowej, może być wykorzystywana
                                 do wyznaczenia progu słyszenia lub również w czynnościowej ocenie uszkodzeń nerwu twarzowego.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/audiometria-impedycyjna.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Audiometria impedancyjna w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy badanie audiometrii impedancyjnej.</span> </span></h3>


            </div>
        </div>
    );
}

