import {
    useComponentDidMount
  } from "../scripts/Utils.js";
 import Img_lazy_load from "./Img_lazy_load.js";
 // const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
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
                        <h1>Kryptoliza migdałków podniebiennych </h1>
                        <span className='content-text'> Jest to zabieg wykonywany u osób z nadmiernie wytwarzanymi i zalegającymi w migdałkach podniebiennych czopami retencyjnymi
                             (nazywanymi przez pacjentów kamieniami migdałkowymi). Zabieg wykonywany jest urządzeniem Ra-Vor, w jego trakcie elektrodami
                              igłowymi wytwarzającymi prąd o częstotliwości fal radiowych zamykane są krypty migdałków, w których wytwarzane są czopy retencyjne.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/zabiegi-operacyjne/kryptoliza.webp'}
                                        imgWidth={'900'}
                                        imgHeight={'700'}
                                        altString={'Kryptoliza migdałków podniebiennych w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <h3 className='h2-margin-top center-text'><span className='bookmark-text'>Zapraszamy do rejestracji w Mini Clinic (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii, między innymi <span className="underscore">przeprowadzamy zabieg kryptolizy migdałków podniebiennych.</span> </span></h3>

            </div>
        </div>
    );
}