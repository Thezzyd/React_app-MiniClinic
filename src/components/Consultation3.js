import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import {BiCheckCircle} from "react-icons/bi";
  import Img_lazy_load from "./Img_lazy_load.js";
  //const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function Consultation3(){

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
                        <h2>Chrapanie i bezdech senny:</h2>
                        <span className='content-text'> W Mini Clinic specjalizujemy się w leczeniu operacyjnym chrapania i obturacyjnego bezdechu sennego.
                            Chrapanie jest problemem rodzinno-społecznym, nie mającym wpływu na zdrowie pacjenta, jednak u części osób chrapiących pojawiają
                            się bezdechy w trakcie snu, które są już problemem zdrowotnym wymagającym diagnostyki i leczenia. Zanim podejmiemy decyzje o
                            leczeniu operacyjnym należy spróbować zmienić pozycję snu, zrezygować z używek, ale przede wszystkim zredukować masę ciała 
                            w przypadku nadwagi. Jeśeli to nie wystarczy należy wykonać badania polisomnograficzne potwierdzające bezdech i okreśające 
                            jego stopień dzięki którym bęziemy mogli ustalić plan leczenia. W przypadku, gdy powody chrapania to wady anatomiczne konieczne może
                            być ich chirurgiczne usunięcie. Możliwe jest także leczenie szyną protruzyjną TAP-T czli aparatem wewnątrzustnym utrzymującym 
                            żuchwę wysuniętą do przodu, czy też aparatem CPAP, polegające na zakładaniu specjalnej maski podłączonej do aparatury zapobiegającej
                                powstawaniu bezdechów.
                       </span>
                    </div>
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/konsultacje/chrapanie-bezdech-senny.webp'}
                                        imgWidth={'577'}
                                        imgHeight={'431'}
                                        altString={'Problemy z chrapaniem i bezdechem sennym'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <div className='consultationBody-content-only_text'>
                <h2>Ważna uwaga:</h2>
                    <span className='content-text'>Aby uzyskać sukces w leczeniu chrapania i obturacyjnego bezdechu sennego musimy poprawić drożność górnych dróg oddechowych. Nie zawsze udaje się uzyskać dobry efekt wykonując jeden zabieg np. na podniebieniu i gardle często należy w kolejnym etapie pomyśleć o operacjach poprawiających drożność nosa.</span>
                </div>
                <div className='consultationBody-content-only_text'>
                    <h2>Zabiegi operacyjne w leczeniu chrapania:</h2>
                    <span className='consultationBody-content-check-list-parent content-text'>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Tremoablacja podniebienia - Ra-Vor (radiochirurgia),</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Plastyka języczka, podniebienia, gardła - UPPP (uvulopalatopharyngoplastyka),</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Termoablacja nasady języka,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Przycięcie migdałków podniebiennch - tonsillotomia,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Operacja plastyczna przegrody nosa - septoplastyka,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Plastyka małżowin nosowych - konchoplastyka,</span>
                    <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Usuniecie polipów nosa - polipectomia.</span>


                    </span>
                </div>
            </div>
        </div>
    );
}

