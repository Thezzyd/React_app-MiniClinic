import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
import Img_lazy_load from "./Img_lazy_load.js";
//  const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Consultation2(){

    useComponentDidMount(() => {
        const targetElement = document.querySelector('.start-section-consultation');
        window.scrollTo(0, targetElement.offsetTop - 10);
      });

    return(
        <div className='consultationBody'>
             <hr className='separator-line start-section-consultation' />
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>Konsultacje w naszej klinice</h2>
                        <span className='content-text'> W Mini Clinic stosujemy nowoczesne metody diagnostyczne i lecznicze w zakresie otolaryngologii zajmującej się chorobami gardła, uszu, nosa i krtani u dzieci i dorosłych. Poza standardowym badaniem laryngologicznym do diagnostyki wykorzystujemy endoskopowy tor wizyjny dający możliwość dokładnej oceny (z dużym powiększeniem i doskonałą rozdzielczością) poszczególnych odcinków górnych dróg oddechowych oraz uszu. Nasza klinika dysponuje również specjalistycznym sprzętem audiologicznym umożliwiającym diagnostykę narządu słuchu. Wszystko to sprawia, że konsultacja w Mini Clinic ma charakter kompleksowy.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/konsultacje/konsultacje-dzieciece.webp'}
                                        imgWidth={'773'}
                                        imgHeight={'515'}
                                        altString={'Konsultacje laryngologiczne dzieci i młodzieży'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <div className='consultationBody-content-only_text'>
                <h2>Konsultacje laryngologiczne dla dzieci i młodzieży</h2>
                    <span className='content-text'>Wskazana jest w przypadku chorób uszu, nosa, gardła, krtani, ślinianek oraz innych narządów głowy i szyi u dzieci i młodzieży. W trakcie konsultacji w Mini Clinic korzystamy z nowoczesnego, specjalistycznego sprzętu, co pozwala zwiększyć precyzję rozpoznania i ułatwia późniejsze leczenie. Dodatkowym atutem placówki jest fakt, że prawie wszystkie badania diagnostyczne zlecone podczas konsultacji można wykonać na miejscu.</span>
                </div>
                <div className='consultationBody-content-only_text'>
                    <h2>Najczęstszymi powodami wizyt dzieci u laryngologa są:</h2>
                    <span className='consultationBody-content-check-list-parent content-text'>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przerost migdałka gardłowego,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> choroby migdałków podniebiennych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wysiękowe zapalenie ucha środkowego,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ostre lub przewlekłe zapalenie ucha środkowego,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> podejrzenie niedosłuchu,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ostry lub przewlekły katar, ból zatok/ ból głowy, problemy z drożnością nosa/ oddychaniem przez nos,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ostry lub przewlekły kaszel,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrapanie,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nawracające infekcje górnych i dolnych dróg oddechowych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> alergia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wady wrodzone okolic głowy, szyi a zwłaszcza krótkie wędzidełko języka lub warg,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> guz lub obrzęk okolicy szyi/ głowy/ twarzy.</span>

                    </span>
                </div>
            </div>
        </div>
    );
}
