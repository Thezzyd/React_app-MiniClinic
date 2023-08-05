import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    useComponentDidMount
  } from "../scripts/Utils.js";

import {BiCheckCircle} from "react-icons/bi";
import Bottom_page_images from './Bottom_page_images';
import MiniClinic_baner from './MiniClinic_baner.js';
import Img_lazy_load from './Img_lazy_load.js';
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));

export default function SpecialNose(){

    useComponentDidMount(() => {
        window.scrollTo(0, 0);
      });

    return(
        <>
       
       
                <MiniClinic_baner />

        <div className='home-page-info'>
                    
            <div className='home-page-title'>
                <h1>Leczenie skrzywienia przegrody nosowej</h1>
                <hr className='separator-line' />
            </div>

            <div className='consultationBody'>
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>Skrzywiona przegroda nosowa</h2>
                        <span className='content-text'> Jama nosowa spełnia kluczową rolę w bardzo ważnym dla życia każdego człowieka procesie oddychania,
                            oczyszcza oraz ogrzewa wdychane powietrze zanim dotrze do płuc. Jeżeli <span className='bookmark-text'>posiadamy skrzywienie przegrody nosowej</span>,
                            cały ten proces zostaje w mniejszym lub większym stopniu utrudniony, sprawia to iż oddychanie przez nos przebiega w 
                            sposób nienaturalny. Najczęstszą dolegliwością wynikającą ze skrzywienia przegrody nosowej jest <span className='bookmark-text'>zmniejszona przepustowość
                            wdychanego przez nos powietrza</span>, co może prowadzić do <span className='bookmark-text'>niedotlenienia organizmu, powodować zawroty i bóle głowy, częste poczucie
                            zmęczenia oraz wymuszone oddychanie przez jamę ustną, co może prowadzić do chrapania</span>.
                        </span> <br /> <br />
                      
                        <span className='content-text'> Skrzywiona przegroda nosowa to stan, w którym <span className='bookmark-text'>kość i chrząstka, które dzielą nos na pół
                            są skrzywione</span>, co powoduje, że <span className='bookmark-text'>jeden kanał nosowy jest mniejszy</span>. Jeśli skrzywienie jest dość duże,
                            oddychanie przez nos może być utrudnione. Większość ludzi naturalnie ma pewne odchylenia, tylko osoby z poważnymi
                            odchyleniami skrzywienia wymagają leczenia.
                        </span>

                        <div className='consultationBody-content-only_text'>
                            <h4>Dolegliwości towarzyszące skrzywieniu przegrody nosowej:</h4>
                            <span className='consultationBody-content-check-list-parent content-text in-list-text'>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> trudność w oddychaniu przez nos,</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> bóle głowy,</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> irytujące uczucie zatkania jamy nosowej,</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> poczucie zmęczenia (wynikające z niedotlenienia organizmu),</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrapanie, </span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> bezdech senny, </span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> oddychanie przez jamę ustną w czasie snu, </span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> krwawienia z nosa, </span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zniekształcona mowa (tzw. mowa nosowa), </span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> częste pobudki nocne, </span>
                            </span>
                        </div>

                    </div>
                   
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/problemy-z-droznoscia-nosa.webp'}
                                        imgWidth={'740'}
                                        imgHeight={'640'}
                                        altString={'Leczenie skrzywienia przegrody nosowej w Rzeszowie'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <h3>Skąd bierze się problem skrzywienia przegrody nosowej?</h3>
                <span className='content-text'> 
                    <span className='bookmark-text'>Dla większości ludzi, problem skrzywionej przegrody nosowej jest przypadłością wrodzoną</span>.
                    Mniejsze skrzywienia przegrody nosowej są często nie rozpoznawane, zwłaszcza jeżeli nie powodują zauważalnych trudności
                    w oddychaniu przez jamę nosową. W niektórych przypadkach omawiany problem <span className='bookmark-text'>może się pojawić w skutek fizycznego urazu
                     nosa</span> w wyniku wypadku, bójki czy uprawianego sportu.
                </span>

                <h3 className='h2-margin-top'>Jak diagnozuje się skrzywienie przegrody nosowej?</h3>
                <span className='content-text'> 
                    Diagnozowanie wykonywane jest <span className='bookmark-text'>przez lekarza</span> po uprzednim umówieniu się na wizytę. 
                    Zazwyczaj przeprowadza się <span className='bookmark-text'>badanie z wykorzystaniem endoskopu do nosa</span> (długiej rurki z jasnym światłem
                    na jej końcu), aby móc zajrzeć dostatecznie daleko do jamy nosowej co pozwoli dokonać pewniejszej oceny.
                    <span className='bookmark-text'> Zdarza się, że objawy, które by wskazywały na przypadek skrzywienia przegrody nosowej są
                    spowodowane innymi wadami strukturalnymi wewnątrz nosa, alergią lub przewlekłym zapaleniem zatok</span>.
                    W rzadkich przypadkach krwawienie połączone z niedrożnością nosa mogą być objawami guza.
                </span>

                
                
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text-alt'>
                        <h3 className='h2-margin-top'>Leczenie skrzywionej przegrody nosowej</h3>
                        <span className='content-text'> 
                            Często <span className='bookmark-text'>zastosowanie odpowiednich leków może wystarczyć</span> aby trudności z oddychaniem znikły.
                            Stosuje się leki zmniejszające przekrwienie, leki przeciwhistaminowe, spraye kortykosteroidowe do nosa.
                            <span className='bookmark-text'> Gdy okaże się, że leki nie pomagają, może być konieczna operacja</span> znana jako septoplastyka. 
                            Wykonuje się ją w celu wyprostowania przegrody nosowej. <span className='bookmark-text'>Operacja przegrody nosowej jest zazwyczaj w całości 
                            bezpieczna</span>, ale istnieje niewielkie ryzyko wystąpienia powikłań takich jak krwawienia z nosa, infekcja,
                            drętwienie nosa lub przednich zębów.
                        </span>

                       


                    </div>
                   
                    <div className='consultationBody-content-img-container-alt'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/skrzywiona-przegroda-nosa.webp'}
                                        imgWidth={'900'}
                                        imgHeight={'383'}
                                        altString={'Septoplastyka w Rzeszowie - Mini Clinic'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <h3 className='h2-margin-top'>Septoplastyka - jak jest przeprowadzana?</h3>
                        <span className='content-text'> 
                            Septoplastyka jest zabiegiem zwykle wykonywanym w warunkach ambulatoryjnych, więc <span className='bookmark-text'>większość pacjentów wraca do domu w dniu
                            przeprowadzenia zabiegu
                            lub na drugi dzień</span>. Pacjent poddawany jest <span className='bookmark-text'>znieczuleniu ogólnemu i śpi podczas przeprowadzanego zabiegu</span>. 
                            Rzadko stosowaną opcją jest znieczulenie miejscowe, które znieczula część ciała przeznaczoną do zabiegu chirurgicznego. 
                        </span><br /><br />

                <span className='content-text'> 
                    Zabieg odbywa się w całości wewnątrz nosa, co oznacza, iż <span className='bookmark-text'>nie powstają żadne widoczne blizny</span>.
                    Lekarz nacina ścianę po jednej stronie nosa i unosi lub usuwa błonę śluzową,
                    (cienką błonę, która zakrywa i chroni przegrodę). Pozwala to lekarzowi <span className='bookmark-text'>dokonać plastyki kości i chrząstki przegrody</span>.
                    Czasami części kości i chrząstki są usuwane, a następnie przekształcane i repozycjonowane.
                    Następnie błonę śluzową ponownie umieszcza się nad przegrodą. <span className='bookmark-text'>Cały zabieg kończy się zazwyczaj po około 40 do 80 minutach</span>.<br /><br />

                    W fazie końcowej zabiegu lekarz umieszcza wewnątrz jam nosowych szyny lub miękkie wypełnienie,
                    aby w procesie gojenia utrzymać tkankę nosową na miejscu oraz
                    zapobiec krwotokom z nosa i tworzeniu się blizny. <span className='bookmark-text'>Zazwyczaj szyny są usuwane w ciągu jednego lub dwóch tygodni po zabiegu,
                    a tamponadę pooperacyjną utrzymuje się w nosie od 24 do 36 godzin</span>. 
                </span><br /><br />
               
                <h3 className='h2-margin-top center-text'><span className='bookmark-text '>Jeżeli dolegają Ci trudności z oddychaniem przez nos, nie zwlekaj i odwiedź Mini Clinic, 
                    aby raz na zawsze zażegnać problemem i zwiększyć swój komfort życia.</span></h3>


            </div>
        </div>
  
            

            <div className='home-page-info-specjalizacja' >
             <Bottom_page_images /> 
            </div>
        
        </div>
</>
    );
}


