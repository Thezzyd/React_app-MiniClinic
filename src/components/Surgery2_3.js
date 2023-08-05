
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
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
                        <h1>Operacja plastyczna przegrody nosa – Septoplastyka</h1>
                        <span className='content-text'> Septoplastyka ma na celu wyprostowanie skrzwionych fragmentow przegrody nosa. Przegroda powinna przebiegać wzdłuż środka nosa. 
                              Kiedy przegroda zachodzi na jedną z jam nosowych, wtedy zwęża ją i utrudnia przepływ powietrza. Zabieg odbywa się w znieczuleniu ogólnym,
                               wewnątrznosowo, w związku z tym na skórze twarzy nie powstają żadne blizny oraz operacja nie powoduje zmiany kształtu nosa. Lekarz odwarstwia błonę śluzową nosa w części
                                chrzęstnej i kostnej. Następnie przywraca prawidłowy kształt przegrodzie, poprzez usuniecie niektórych jej fragmentów lub
                                 przebudowę jej struktury. Niekiedy konieczna jest redukcja objetości małżowin nosowych metodą radiochirurgii. Standardowo
                                  przyszywane są do przegrody płytki silastikowe stabilizujące przegrodę i ułatwiające prawidłowe gojenie. 
                                  Setony uniemożliwiajace oddychanie przez nos, usuwane są następnego dnia po zabiegu, natomiast płytki i szwy między
                                   7 a 10 dniem po zabiegu i zwykle dopiero wtedy drożność nosa jest już wyraźnie lepsza. Cały proces gojenia trwa od 4 do 6
                                    tygodni po tym czasie funkcja nosa całkowicie wraca do normy.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/operacja-plastyczna-przegrody-nosa.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'301'}
                                        altString={'Operacja plastyczna przegrody nosowej (septoplastyka) w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> istotne skrzywienie przegrody nosowej, rozwojowe lub pourazowe, prowadzące do zaburzeń oddychania przez nos,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nawracające zapalenie zatok przynosowych, i górnych dróg oddechowych,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> uczucie spływania wydzieliny po tylnej ścianie gardła,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> znaczne upośledzenie węchu jedno lub obustronne,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekłe lub nawracające wysiękowe zapalenie ucha środkowego.</span>
                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> antybiotykoterapia przez 5-7 dni,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczenie wysiłku fizycznego przez 14 dni,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zapewnienie prawidłowej wilgotności jamy nosowej (stosować preparaty nawilżające),</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> podczas kichania otwierać usta, by zminimalizować ciśnienie wytwarzane w jamie nosowej,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> unikanie przebywania w miejscach o bardzo wysokiej temperaturze otoczenia (np. gorące kąpiele, przebywanie na słońcu w upalne dni).</span>
                        </span>
                    </div>
                 </div>
                 <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg septoplastyki.</span> </span></h3>

            </div>
        </div>
    );
}

