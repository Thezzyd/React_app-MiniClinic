
  import {BiCheckCircle} from "react-icons/bi";
  import Img_lazy_load from "./Img_lazy_load.js";
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function Consultation4(){



    return(
        <div className='consultationBody'>
            
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>Kwalifikacja do zabiegów operacyjnych</h2>
                        <span className='content-text'> Dzieci i dorośli u których leczenie zachowawcze chorób nosa gardła,
                            krtani i uszu nie przynosi efektów są kwalifikowani w Mini Clinic do zabiegów operacyjnych wykonywanych najczęściej w znieczuleniu
                            ogólnym w warunkach sali operacyjnej.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/konsultacje/kwalifikacja-do-zabiegow.webp'}
                                        imgWidth={'420'}
                                        imgHeight={'200'}
                                        altString={'Kwalifikacja do zabiegów operacyjnych z zakresu laryngologii'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>


                <div className='consultationBody-content-only_text'>
                    <h2>Najczęściej wykonywane zabiegi operacyjne w Mini Clinic:</h2>
                    <span className='consultationBody-content-check-list-parent content-text'>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Usunięcie migdałka gardłowego – Adenotomia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Usunięcie migdałka gardłowego i przycięcie podniebiennych – Adenotonsillotomia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Operacja plastyczna przegrody nosa – Septopastyka,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Usunięcie migdałków podniebiennych – Tonsillectomia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Termoablacja migdałków podniebiennych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Kryptoliza migdałków podniebiennych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Drenaż jamy bębenkowej / nacięcie błony bębenkowej w przypadku wysiękowego zapalenia ucha środkowego,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Usunięcie polipów nosa – polipectomia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Termoablacja małżowin nosowych dolnych,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Koagulacja chemiczna / elektryczna w przypadku nawracających krwawień z nosa.</span>


                    </span>
                </div>
            </div>
        </div>
    );
}

