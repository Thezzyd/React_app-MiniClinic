
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
import Img_lazy_load from "./Img_lazy_load.js";//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
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
                        <h1>Usunięcie polipów nosa – Polipektomia </h1>
                        <span className='content-text'> Polipektomia nosa jest zabiegiem bezpiecznym, mającym na celu usunięcie polipów nosa. 
                            Wykonywana jest zazwyczaj w znieczuleniu ogólnym. Wprowadzamy do jamy nosowej specjalistyczne narzędzie (pętlę lub kleszczyki)
                             i usuwamy przy jego pomocy zmianę polipowatą. Kolejnym krokiem jest kontrola wnętrza jamy nosowej. 
                             Po wykonaniu zabiegu założona może być tamponada przednia nosa, w celu zapobiegnięcia krwawieniom pooperacyjnym.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/usuwanie-polipow-nosa-small.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'301'}
                                        altString={'Usunięcie polipów nosa w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> obecność polipów nosa i/lub zatok nie poddające się leczeniu zachowawczemu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> obecność polipów neutrofilowych,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zaburzenia powonienia,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> upośledzona drożność nosa do całkowitej blokady włącznie,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> uporczywe chrapanie wywołane obecnością polipów,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> bóle głowy wywołane blokadą ujść zatok przez obecność polipów,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nawracające zapalenia zatok , spowodowane upośledzoną drożnością jamy nosowej i zatok.</span>
                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczenie wysiłku fizycznego przez 14 dni,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zapewnienie prawidłowej wilgotności jamy nosowej (stosować preparaty nawilżające),</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> podczas kichania otwierać usta, by zminimalizować ciśnienie wytwarzane w jamie nosowej,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> unikanie przebywania w miejscach o bardzo wysokiej temperaturze otoczenia (np. gorące kąpiele, przebywanie na słońcu w upalne dni).</span>
                        </span>
                    </div>
                 </div>
                 <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg polipektomii jamy nosowej.</span> </span></h3>

            </div>
        </div>
    );
}

