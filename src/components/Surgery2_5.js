
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
  import Img_lazy_load from "./Img_lazy_load.js";
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
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
                        <h1>Operacja zatok szczękowych - Operacja Caldwella-Luca</h1>
                        <span className='content-text'> Zabieg otolaryngologiczny, polegający na zewnątrznosowym otwarciu zatoki szczękowej przez dół nadkłowy. Wykonywany jest w znieczuleniu ogólnym.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/operacja-zatok-przynosowych-small.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'301'}
                                        altString={'Operacja zatok przynosowych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu:</h3>
                        <span className='consultationBody-content-check-list-parent content-text'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekłe ropne zapalenie zatoki szczękowej, także zębopochodne zapalenie zatoki szczękowej nie poddające się leczeniu endoskopowemu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> polipy błony śluzowej zatoki szczękowej przy nieefektywnym leczeniu drogą wewnątrznosową,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> rozpoczynające się zatokopochodne powikłanie wewnątrzczaszkowe,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> małe guzy niezłośliwe (np. kostniak),</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> urazy takie jak: złamanie ścian zatoki, złamanie stropu zatoki, złamanie typu blow-out,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dostęp przezzatokowy do dołu skrzydłowo-podniebiennego,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wstępna rewizja zatoki, w celu pobrania wycinka do badania histopatologicznego,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przezzatokowy drenaż ropowicy oczodołu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ciała obce zatoki szczękowej,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wstępny zabieg do operacji na innych zatokach przynosowych: przezszczękowy dostęp do zatok sitowych, zatoki klinowej.</span>
                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zimne okłady na policzek, celem zmniejszenia obrzęku,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przepłukiwanie zatoki szczękowej,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> antybiotykoterapia,</span>
                        </span>
                    </div>
                 </div>
                 <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy operacje zatoki szczękowej.</span> </span></h3>

            </div>
        </div>
    );
}

