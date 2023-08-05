
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
import Img_lazy_load from "./Img_lazy_load.js";  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
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
                        <h1> Drenaż jam bębenkowych w wysiękowym zapaleniu uszu </h1>
                        <span className='content-text'> Drenaż jam bębenkowych jest to zabieg wykonywany w przypadku wysiękowego zapalenia ucha środkowego. 
                            Takie zapalenie szczególnie często dotyczy dzieci, polega ono na gromadzeniu się wysięku w jamie bębenkowej, 
                            którego obecność upośledza słyszenie, prowadząc do niedosłuchu przewodzeniowego. 
                            Przyczyną wysiękowego zapalenia ucha środkowego jest niedrożność trąbek słuchowych, 
                            czyli struktur, które łączą jamę bębenkową z jamą nosowo-gardłową. Najczęściej u dzieci ta
                             niedrożność jest powodowana przez przerost znajdującego się w okolicy ujścia trąbek słuchowych migdałka gardłowego.
                              W przypadku nieskuteczności leczenia zachowawczego (farmakologicznego) wysiękowych zapaleń ucha środkowego oraz postępującego niedosłuchu,
                               konieczna staje się ewakuacja zgromadzonego płynu poprzez nacięcie błony bębenkowej, a następnie wprowadzenie specjalnego dreniku wentylacyjnego, 
                               który umożliwi odpływanie wysięku. W przypadku stwierdzenia przerostu migdałka gardłowego wskazane jest także wykonanie adenotomii,
                                czyli jego podcięcia, aby zapobiegać nawracaniu zapaleń.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/drenaz-jam-bebenkowych.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'301'}
                                        altString={'Drenaż jam bębenkowych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg drenażu jam bębenkowych.</span> </span></h3>

            </div>
        </div>
    );
}

