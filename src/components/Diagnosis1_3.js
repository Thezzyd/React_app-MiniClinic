
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
import Img_lazy_load from "./Img_lazy_load.js"; // const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Diagnosis1_3(){

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
                        <h1>Audiometria tonalna</h1>
                       
                        <span className='content-text'>Audiometria tonalna popularnie określana jako „badanie słuchu”. Umożliwia określenie wielkości i rodzaju ubytku słuchu.
                             Dzięki niej lekarz może wstępnie ocenić czy powodem niedosłuchu jest dysfunkcja ucha zewnętrznego, środkowego,
                              wewnętrznego lub dalszych odcinków drogi słuchowej. Przez słuchawki badany słyszy dźwięki o określonej częstotliwości
                               (tj. wysokość tonu) i natężeniu (tj. głośności).
                        </span>
                        <br /><br />

                        <span className='content-text'>
                               Badanie przeprowadza się zarówno na drodze przewodnictwa powietrznego
                                (dźwięki podawane przez słuchawki zakładane na uszach Pacjenta), jak i przewodnictwa kostnego 
                                (dźwięki podawane za pomocą słuchawki kostnej zakładanej za uchem badanego). Celem badania jest ustalenie progu słuchu, 
                                tj. minimalnego natężenia dźwięku, które słyszy Pacjent. Wynikiem badania jest wykres audiogram z krzywą progową
                                 słyszenia dla przewodnictwa powietrznego i kostnego. Jest to jedno z prostszych i najczęściej wykonywanych badań słuchu,
                                  dostarczające cennych informacji na temat narządu słuchu. Nie jest wymagane specjalne przygotowanie pacjenta do badania.
                                   Badania nie udaje się przeprowadzić u małych dzieci, ponieważ wymaga ono współpracy ze strony pacjenta.
                        </span>

                      
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/audiometria-tonalna.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Audiometria tonalna w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy badanie audiometrii tonalnej.</span> </span></h3>

              
                

            </div>
        </div>
    );
}
// <h2>Co to jest audiometria tonalna?</h2>
/*  <h2>Kiedy wykonuje się audiometrię tonalną?</h2>
                <span className='content-text'>
                     Wskazaniami do wykonania badania są najczęściej:
                </span>
                <span className='consultationBody-content-check-list-parent content-text in-list-text'>
                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> podejrzenie ubytku słuchu,</span>
                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dla osób po 60 roku życia rekomendowane jest wykonywanie badania słuchu co trzy lata, aby wykryć ubytki słuchu związane z wiekiem,</span>
                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przebycie chorób które mogły uszkodzić słuch takie jak zapalenie opon mózgowo-rdzeniowych, tętniaki czy guz mózgu,</span>
                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> urazy głowy,</span>
                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> coroczna kontrola słuchu związana z wykonywanym zawodem.</span>
                </span>

                <h2 className='h2-margin-top'>Jak przebiega audiometria tonalna?</h2>
                <span className='content-text'>
                    Jak sama nazwa wskazuje, audiometria tonalna wykorzystuje czyste tony, aby określić, czy dana osoba może odbierać każdą z częstotliwości w słyszalnym spektrum u człowieka.
                    Test jest przeprowadzany z wykorzystaniem urządzenia zwanego audiometrem. Pacjent na początku badania zostaje zaproszony do wyciszonej kabiny/pomieszczenia i nakłada na
                    uszy słuchawki lub w przypadku słuchawki kostnej za uchem. Kolejno w obu słuchawkach (nie jednocześnie) będzie odtwarzany ton i za każdym razem będzie on coraz mniej słyszalny.
                    Jeśli badany pacjent słyszy ton w danym momencie, odtwarzany jest przez lekarza następny coraz cichszy. Badanie trwa do momentu aż uda się określić
                    najcichszy słyszalny niski i wysoki ton u pacjenta. Czas potrzebny na wykonanie badania zazwyczaj nie przekracza 10 minut.
                </span>

                <h2 className='h2-margin-top'>Audiometria tonalna - wyniki</h2>
                <span className='content-text'>
                    Wynik badania pacjenta są przedstawiane w formie audiogramu, czyli wykresu z naniesionymi dwiema krzywymi.
                    Krzywa w postaci linii ciągłej oznacza próg słyszenia przewodnictwa powietrznego, a krzywa w postaci linii przerywanej próg słyszenia przewodnictwa kostnego.
                    Im krzywe znajdują się bliżej siebie, tym lepiej, takie ułożenie linii wskazuje na prawidłowy słuch, gdy krzywe są widocznie rozbieżne lub gdy wskazują na 
                    wysoki próg słyszenia są oznakami zaburzeń słuchu u badanego. 
                </span>
                <br /><br />

                <h3 className='h2-margin-top center-text'><span className='bookmark-text '>Jeżeli podejrzewasz u siebie problemy ze słuchem, umów się na wizytę w Mini Clinic, aby zdiagnozować przyczynę i rozpocząć leczenie. 
                  </span></h3>*/