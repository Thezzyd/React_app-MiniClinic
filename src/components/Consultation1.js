
  import {BiCheckCircle} from "react-icons/bi";
import Img_lazy_load from "./Img_lazy_load.js";
  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Consultation1(){



    return(
        <div className='consultationBody'>
            
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>Konsultacje w Mini Clinic</h2>
                        <span className='content-text'> W Mini Clinic stosujemy nowoczesne metody diagnostyczne i lecznicze w zakresie otolaryngologii zajmującej się chorobami gardła, uszu,
                            nosa i krtani u dzieci i dorosłych. Poza standardowym badaniem laryngologicznym do diagnostyki wykorzystujemy endoskopowy tor wizyjny dający możliwość dokładnej 
                            oceny (z dużym powiększeniem i doskonałą rozdzielczością) poszczególnych odcinków górnych dróg oddechowych oraz uszu. Nasza klinika dysponuje również specjalistycznym
                            sprzętem audiologicznym umożliwiającym diagnostykę narządu słuchu. Wszystko to sprawia, że konsultacja w Mini Clinic ma charakter kompleksowy.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/konsultacje/konsultacje-doroslych.webp'}
                                        imgWidth={'773'}
                                        imgHeight={'515'}
                                        altString={'Konsultacje laryngologiczne dzieci i dorosłych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <div className='consultationBody-content-only_text'>
                <h2>Konsultacje laryngologiczne dla dzieci i dorosłych</h2>
                    <span className='content-text'> Wskazana jest w przypadku chorób uszu, nosa, gardła, krtani, ślinianek oraz innych narządów głowy i szyi.
                        W trakcie konsultacji w Mini Clinic korzystamy z nowoczesnego, specjalistycznego sprzętu. Podczas jednej wizyty można przeprowadzić pełną endoskopową ocenę górnych dróg oddechowych.
                        Jednocześnie prawie wszystkie badania diagnostyczne z zakresu laryngologii zlecone podczas konsultacji można wykonać na miejscu.
                    </span>

                </div>
                <div className='consultationBody-content-only_text'>
                    <h2>Najczęstsze powody wizyt osób dorosłych u laryngologa:</h2>
                    <span className='consultationBody-content-check-list-parent content-text'>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ostre lub przewlekłe zapalenie zatok przynosowych, polipy nosa, skrzywienie przegrody nosa,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekłe zapalenie lub przerost migdałków podniebiennych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ostre lub przewlekłe zapalenie ucha środkowego, perlak ucha środkowego, perforacja błony bębenkowej, otoskleroza,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> kaszel,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrypka (zwłaszcza jeśli utrzymuje się ponad 4 tygodnie), osłabienie lub zanikanie głosu,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> porażenie strun głosowych, guzki głosowe, polip struny głosowej, obrzęk Reincke`go,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zawroty głowy i zaburzenia równowagi,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrapanie i zespół bezdechów sennych (OSA),</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> guz lub obrzęk okolicy szyi/ głowy/ twarzy,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> znamiona i inne zmiany skóry okolicy szyi/ głowy,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> alergia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nadkwasota i inne objawy refluksu żołądkowo-przełykowego (GERD),</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> profilaktyczne badanie osób palących papierosy.</span>

                    </span>
                </div>

                <div className='consultationBody-content-only_text'>
                    <h2>Najczęstszymi powodami wizyt dzieci i młodzieży u laryngologa są:</h2>
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

