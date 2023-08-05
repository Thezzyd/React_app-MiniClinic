
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
import Img_lazy_load from "./Img_lazy_load.js";  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
import {BiCheckCircle} from "react-icons/bi";
export default function Diagnosis1_4(){

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
                        <h1>Tympanometria</h1>
                      
                        <span className='content-text'>Tympanometria jest nieinwazyjnym badaniem, polegającym na ocenie ruchomości (podatności) błony bębenkowej. 
                            Pozwala to na określenie stanu ucha środkowego. Badanie ma szczególną przydatność u dzieci,
                             u których stosunkowo często dochodzi do dysfunkcji trąbki słuchowej lub ucha środkowego. 
                             Tympanometrię można wykonać u wszystkich dzieci, bez względu na wiek.
                             Jednocześnie jego przeprowadzenie nie wymaga aktywnej współpracy ze strony badanego. 
                             Badanie wykonuje się przy użyciu specjalnego urządzenia z sondą przykładaną do ucha pacjenta.
                             To bezinwazyjne i bezbolesne badanie ucha środkowego. Dzięki temu badaniu rozpoznanie patologii,
                              takich jak wysiękowe zapalenie ucha, czy upośledzenie funkcji trąbki słuchowej jest dużo łatwiejsze i szybsze. 
                              Badanie polega na wprowadzeniu do ucha pacjenta specjalnej gumowej oliwki. 
                              Podczas badania rejestrowane są zmiany ciśnienia w przewodzie słuchowym zewnętrznym,
                               które powodują wychylenia błony bębenkowej. Nieprawidłowości w wychyleniach rejestrowane są przez tympanometr,
                                bez konieczności współpracy z pacjentem. Badanie trwa około 5 minut, a po jego zakończeniu pacjent otrzymuje wydruk z wynikiem badania.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/tympanometria.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Tympanometria w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy badanie tympanometrii.</span> </span></h3>



            </div>
        </div>
    );
}
//  <h2>Co to jest tympanometria?</h2>
/*                <h2>Do czego służy i jak działa tympanometr?</h2>
                <span className='content-text'> 
                    Tympanometr wywołuje zmianę ciśnienia w przewodzie słuchowym. 
                    Wywołane podczas badania uczucie można porównać do zmian ciśnienia odczuwanych podczas startu i lądowania będąc w samolocie.
                    Podczas zmieniającego się ciśnienia rejestrowane są pomiary ruchu błony bębenkowej. Ważnym elementem podczas trwania badania
                    jest, aby zachować ciszę i spokój.
                </span>

                <h2 className='h2-margin-top'>Wyniki tympanometrii - tympanogram</h2>
                <span className='content-text'> 
                    Tympanogram to graficzne przedstawienie odczytów zarejestrowanych przez tympanometr ruchu błony bębenkowej w odpowiedzi na zmiany ciśnienia w przewodzie słuchowym.
                    W momencie gdy błona bębenkowa jest aktywowana przez falę dźwiękową, część dźwięku jest pochłaniana i przesyłana przez ucho środkowe, 
                    podczas gdy pozostała część fali dźwiękowej jest odbijana.
                    Informacje uzyskane z tympanometrii dostarczają dodatkowych informacji dotyczących funkcjonowania ucha środkowego, zwłaszcza funkcjonowania trąbki Eustachiusza.
                </span>
                <br /><br />
                <span className='content-text'> 
                    Jeśli tympanogram mieści się w normalnych przedziałach, linia na wykresie tworzy kształt "góry" i osiąga pik w okolicach wartości 0 daPa na poziomej osi wykresu.
                    Tympanogram wskazuje nieprawidłowości wtedy gdy linia na wykresie tworząca kształt "góry" osiąga pik wyraźnie przed lub po wartości 0 daPa lub
                    gdy jest wykreślona płaska linia, jeśli błona bębenkowa nie porusza się (z powodu perforacji) lub nie może się poruszać (z powodu płynu lub innej przyczyny).
                    Wspomniane oznaczenie "daPa" oznacza dekapaskal, czyli jednostkę miary ciśnienia powietrza.
                </span>

                <div className='consultationBody-content-only_text'>
                                <h2>Kiedy wykonuje się tymapnoetrię?</h2>
                                <span className='content-text'>
                                     Tympanometria jest zwykle stosowana do wykrycia lub wykluczania kilku rzeczy: 
                                </span>
                                <span className='consultationBody-content-check-list-parent content-text in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> obecności płynu w uchu środkowym,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> infekcji ucha środkowego,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dziury w błonie bębenkowej (perforacji),</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dysfunkcji trąbki Eustachiusza.</span>
                                </span>
                                <br />
                                <span className='content-text'>
                                    Tympanometria jest szczególnie ważna dla dzieci, u których jest podejrzenie problemów z uchem środkowym, ale badanie jest również wykonywane
                                    dorosłym w ramach rutynowego badania słuchu w celu ustalenia, czy występują jakiekolwiek problemy z uchem środkowym przyczyniające się do pogorszenia słuchu.
                                </span>
                                <br /><br />
                                <span className='content-text'> 
                                    Osoby starające się o zakup aparatu słuchowego (dorośli i dzieci), zazwyczaj są poddawane badaniu tympanometrycznemu. 
                                    Płyn za błoną bębenkową jest najczęstszą przyczyną nieprawidłowego tympanogramu, ponieważ uniemożliwia prawidłowe poruszanie się błony bębenkowej
                                    i prawidłowego przekazywania dźwięku. Ten stan jest prawie zawsze tymczasowy i można go leczyć medycznie. Jeśli masz płyn w uchu, możesz nie potrzebować
                                     aparatu słuchowego do naprawy ubytku słuchu, w takim wypadku skonsultuj się z lekarzem, aby ustalić najlepszy sposób postępowania.
                                </span>
                                <br /><br />
               
                <h3 className='h2-margin-top center-text'><span className='bookmark-text '>Jeżeli dolegają Ci lub Twojemu dziecku problemy z uchem środkowym, umów się na wizytę w Mini Clinic, aby zdiagnozować przyczynę i rozpocząć leczenie. 
                  </span></h3>
                </div>*/