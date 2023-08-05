
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
import Img_lazy_load from "./Img_lazy_load.js";  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Diagnosis1_2(){

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
                        <h1>Endoskopowe badanie migdałka gardłowego u dzieci</h1>
                        <span className='content-text'> Endoskopia migdałka gardłowego u dziecka jest jedyną metodą diagnostyczną pozwalającą na jednoznaczne
                             określenie wielkości i struktury migdałka gardłowego, nazywanego również trzecim migdałkiem. Dodatkowo podczas
                              badania oceniany jest również stan błony śluzowej jam nosa oraz drożność i funkcja ujść gardłowych trąbek słuchowych 
                              (Eustachiusza). Głównym wskazaniem do przeprowadzenia badania są objawy niedrożności nosa, dłużej utrzymujący się katar,
                               zaburzenia oddychania w trakcie snu, problemy ze słuchem, nawracające zapalenia ucha środkowego, 
                               wysiękowe zapalenie ucha środkowego, wady wymowy oraz wady zgryzu. Badanie przeprowadza się przy 
                               użyciu cienkiego (poniżej 3mm), giętkiego endoskopu wprowadzanego przez nozdrza. 
                               W zależności od potrzeby błonę śluzową nosa przed badaniem można znieczulić lekami w postaci sprayu, żelu lub maści.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/endoskopowe-badanie-migdalka.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Endoskopia migdałka gardłowego (trzeciego migdałka) w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <div className='consultationBody-content-only_text'>
                    <h2>Przy endoskopii migdałka gardłowego u dzieci zaleca się:</h2>
                    <span className='consultationBody-content-check-list-parent content-text'>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> bycie na czczo około 1-2 godziny aby zmniejszyć ryzyko odruchów wymiotnych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> na 15 min przed badaniem należy podać dziecku krople obkurczające do nosa (np. Nasivin, Thisine itp),</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> dziecko powinno być bez intensywnego kataru (katar utrudnia lub uniemożliwia oglądanie struktur gardła),</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> najlepiej badanie wykonać około 2 tygodnie po infekcji (w trakcie infekcji, występuje obrzęk i nie będzie możliwa dokładna ocena).</span>
                    </span>
                </div>

            </div>
            <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy endoskopowe badanie migdałka gardłowego u dzieci.</span> </span></h3>


        </div>
    );
}

