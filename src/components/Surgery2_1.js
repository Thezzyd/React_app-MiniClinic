
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
  import Img_lazy_load from "./Img_lazy_load.js"; 
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
                <h1>Zabiegi operacyjne migdałka gardłowego (trzeciego migdałka) i migdałków podniebiennych</h1>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>I. Usunięcie migdałka gardłowego – Adenotomia</h2>
                        <span className='content-text'> Adenotomia jest zabiegiem polegającym na usunięciu adenotomem przerośniętego migdałka gardłowego (trzeciego migdałka). Krwawienie zwykle ustępuje samoistnie.
                             Zabieg przeprowadza się głównie u dzieci. U dorosłych ze względu na samoistną inwolucję migdałka gardłowego wyżej wymieniony zabieg nie jest zwykle wykonywany. 
                             Znieczulenie ogólne jest preferowaną obecnie metodą. Znieczulenie ogólne umożliwia lepszy wgląd w pole operacyjne oraz kontrolę krwawienia,
                              ogranicza również stres operowanego dziecka, zapobiega aspiracji krwi oraz fragmentów usuniętej tkanki do dróg oddechowych.
                        </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/adenotomia.webp'}
                                        imgWidth={'1400'}
                                        imgHeight={'800'}
                                        altString={'Zabieg adenotomii - wycięcie migdałka gardłowego (trzeciego migdałka) w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                   
                    
                </div>
                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu adenotomii:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> utrudnione oddychanie przez nos,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nawracające infekcje górnych i dolnych dróg oddechowych,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrapanie,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zespół bezdechu sennego,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wysiękowe zapalenie ucha środkowego,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wada zgryzu.</span>
                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu adenotomii:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczyć przyjmowanie pokarmów i napojów w pierwszych godzinach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> w razie zatkanego nosa stosować w pierwszych dniach po zabiegu krople nawilżające i obkurczające do nosa,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczyć przyjmowanie gorących, pikantnych lub kwaśnych pokarmów,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dieta w pierwszych dniach po zabiegu powinna być półpłynna,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przez kolejne 5-7 dni wysiłek fizyczny jest niewskazany,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zaleca się ograniczenie kontaktów z innymi osobami celem zmniejszenia ryzyka infekcji.</span>
                        </span>
                    </div>
                </div>
                <hr className='separator-line-simple'></hr>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text-full'>
                        <h2>II. Usunięcie migdałka gardłowego i nacięcie błony bębenkowej - Adenotomia z paracentezą </h2>
                        <span>Jest to zabieg polegający na usunięciu adenotomem przerośniętego migdałka gardłowego (tzw. trzeci migdał). Krwawienie zwykle ustępuje samoistnie. 
                             Przerośnięty migdałek gardłowy może być również przyczyną wysiękowego zapalenia ucha. Struktury te są połączone ze sobą za pomocą trąbki Eustachiusza. 
                             Przerośnięte masy migdałka uciskając i blokując ją, są przyczyną przewlekłego wysiękowego zapalenia ucha środkowego. 
                             Potwierdzając tę diagnozę, konieczne jest wykonanie adenotomii - usunięciu (ścięciu) adenotomem przerośniętego migdałka gardłowego oraz paracentezy –
                              nakłucia błony bębenkowej celem usunięcia patologicznej wydzieliny zalegającej w uchu środkowym.
                               Zabieg ten wykonuje się przez kanał słuchowy zewnętrzny za pomocą specjalnego ostrego myringotomu. Adenotomię z paracentezą wykonuje się w znieczuleniu ogólnym.  
                       </span>
                    </div>
                    
                </div>
                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu adenotomii z paracentezą:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wysiękowe zapalenie ucha środkowego nie poddające się leczeniu zachowawczemu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> utrudnione oddychanie przez nos,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nawracające infekcje górnych i dolnych dróg oddechowych,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrapanie,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zespół bezdechu sennego,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wada zgryzu.</span>
                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu adenotomii z paracentezą:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczenie wysiłku fizycznego przez 5-7 dni,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> w razie zatkanego nosa stosować w pierwszych dniach po zabiegu krople nawilżające i obkurczające do nosa,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> unikanie przebywania w miejscach o bardzo wysokiej temperaturze otoczenia (np. gorące kąpiele, przebywanie na słońcu w upalne dni),</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> spożywanie lekkiej, płynnej lub półpłynnej diety w pierwszych dniach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> rezygnacja z gorących, pikantnych, kwaśnych potraw w pierwszych dniach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> kąpiel nie jest przeciwwskazana, ale należy ograniczyć zanurzanie głowy i zamoczenia uszu.</span>
                        </span>
                    </div>
                 </div>
                 <hr className='separator-line-simple'></hr>
                 <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>III. Usunięcie migdałków podniebiennych - Tonsillektomia </h2>
                        <span>Tonsillektomia jest zabiegiem laryngologicznym polegającym na usunięciu (wyłuszczeniu) migdałków podniebiennych.
                             Najczęściej wykonywany u dorosłych w znieczuleniu ogólnym. Okolicę migdałka ostrzykujemy lekiem znieczulającym i 
                             po nacięciu błony śluzowej oddzielamy od otaczających tkanek migdałek podniebienny wraz z torebką i ścinamy go specjalnym narzędziem zwanym pętlą,
                              bez naruszania ciągłości łuków podniebiennych.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/tonsillektomia.webp'}
                                        imgWidth={'1400'}
                                        imgHeight={'800'}
                                        altString={'Zabieg tonsillektomii - wycięcie migdałków podniebiennych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                    
                    
                </div>
                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu tonsillektomii:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekłe zapalenie migdałków i gardła,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nawracające anginy,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> uporczywe chrapanie,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przebycie ropnia okołomigdałkowego,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> objawy ogólnoustrojowe spowodowane infekcją toczącą się w migdałkach (choroba reumatyczna, zapalenie nerek, posocznica występująca po anginie),</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> podejrzenie nowotworu złośliwego migdałka,</span>
                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu tonsillektomii:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> stosować antybiotykoterapia przez 5-7 dni,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> stosowanie środków przeciwbólowych według zaleceń lekarza,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> regularne kontrole u lekarza w celu obserwacji rany pooperacyjnej,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dieta papkowata, półpłynna w pierwszych dniach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczenie gorących, pikantnych, kwaśnych potraw w pierwszych dniach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wypoczynek, ograniczenie wysiłku fizycznego,</span>
                        </span>
                    </div>
                 </div>
                 <hr className='separator-line-simple'></hr>
                 <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text-full'>
                        <h2>IV. Usunięcie migdałka gardłowego i przycięcie migdałków podniebiennych – Adenotonsillotomia </h2>
                        <span>Jest to zabieg chirurgii laryngologicznej polegający na jednoczesnym usunięciu lub ścięciu nadmiernej ilości tkanki limfatycznej migdałka gardłowego 
                            (trzeciego migdałka) i jednoczesnym podcięciu migdałków podniebiennych. W ten sposób zmniejszamy ich masę o około 30-60%. Operacja jest wykonywana,
                             technikami diatermii radiofalowej.
                       </span>
                    </div>
                    
                </div>
                <div className='consultationBody-content-only_text-doubled-parent'>
                    <div className='consultationBody-content-only_text first'>
                        <h3>Wskazanie do zabiegu adenotonsillotomii:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> stwierdzenie istotnego przerostu migdałków przez lekarza specjalistę,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekłe / nawracające zapalenie górnych dróg oddechowych,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> uporczywe chrapanie,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> bezdechy senne,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> problemy ze snem,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> gapowaty wyraz twarzy,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wada zgryzu.</span>

                        </span>
                    </div>

                    <div className='consultationBody-content-only_text'>
                        <h3>Zalecenia po zabiegu adenotonsillotomii:</h3>
                        <span className='consultationBody-content-check-list-parent'>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ograniczyć przyjmowanie pokarmów i napojów w pierwszych godzinach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> stosować antybiotyk przez 5-7 dni,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> w razie zatkanego nosa stosować w pierwszych dniach po zabiegu krople nawilżające i obkurczające do nosa,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przyjmowanie środków przeciwbólowych w razie potrzeby,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> unikanie przebywania w miejscach o bardzo wysokiej temperaturze otoczenia (np. gorące kąpiele, przebywanie na słońcu w upalne dni),</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> spożywanie lekkiej, płynnej lub półpłynnej diety w pierwszych dniach po zabiegu,</span>
                        <span className='consultationBody-content-check-list-child'><BiCheckCircle /> rezygnacja z gorących, pikantnych, kwaśnych potraw w pierwszych dniach po zabiegu,</span>

                        </span>
                    </div>
                 </div>

                 <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi przeprowadzamy zabiegi <span className="underscore">adenotomii, adenotomii z paracentezą, tonsillektomii i adenotonsillotomii.</span> </span></h3>

      
            </div>
        </div>
    );
}

