
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import Img_lazy_load from "./Img_lazy_load.js";
  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Diagnosis1_1(){

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
                        <h1>Endoskopowe badanie nosa, gardła i krtani </h1>
                        <span className='content-text'> Badanie endoskopowe powinno być podstawą każdej solidnej konsultacji laryngologicznej u pacjenta z problemami ze
                             strony górnych dróg oddechowych. Pozwala na wnikliwe obejrzenie wnętrza jam nosa, nosogardła, gardła dolnego, krtani
                              oraz początkowego odcinka tchawicy. Jego wielką zaletą w odniesieniu do badania z użyciem tradycyjnych instrumentów
                               laryngologicznych jest znacznie większa precyzja, zarówno w zakresie oceny morfologicznej jak i czynnościowej powyższych okolic.
                               Badanie przeprowadza się przy użyciu cienkiego, giętkiego lub sztywnego endoskopu 
                                 wprowadzanego przez nozdrza i/lub jamę ustną. W zależności od potrzeby, przed badaniem 
                                 można znieczulić błonę śluzową nosa oraz gardło lekami w postaci sprayu, żelu lub maści.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/diagnostyka/endoskopowe-badanie-nosa.webp'}
                                        imgWidth={'421'}
                                        imgHeight={'301'}
                                        altString={'Endoskopia nosa podkarpacie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>
                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy endoskopowe badanie nosa, gardła i krtani.</span> </span></h3>

            </div>
        </div>
    );
}

