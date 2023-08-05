
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    useComponentDidMount,
    useTitle
  } from "../scripts/Utils.js";
  import Bottom_page_images from './Bottom_page_images';
import {BiCheckCircle} from "react-icons/bi";
import Img_lazy_load from './Img_lazy_load.js';
import MiniClinic_baner from './MiniClinic_baner.js';
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function SpecialSnoring(){

    //useTitle("Pozbądź się problemu z chrapaniem!");

    useComponentDidMount(() => {
        window.scrollTo(0, 0);
      });

 

    return(
        <>
            <MiniClinic_baner />
      
        <div className='home-page-info'>
                    
            <div className='home-page-title'>
                <h1>Chrapanie i bezdech senny - objawy, przyczyny, metody leczenia</h1>
                <hr className='separator-line' />
            </div>
            
            <div className='consultationBody'>
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>Zespół obturacyjnego bezdechu sennego</h2>
                        <span className='content-text'>
                            
                            <span className='bookmark-text'>Zespół obturacyjnego bezdechu sennego</span> jest formą zaburzenia oddychania podczas snu
                            i poważnym potencjalnie <span className='bookmark-text'>zagrażającym życiu stanem zdrowia</span>, na który cierpi około 2 - 2,5 miliona Polaków.
                            Według badań z 2015 roku na zespół obturacyjnego bezdechu sennego cierpi <span className='bookmark-text'>prawie 50% mężczyzn i 23% kobiet w średnim wieku</span>.
                            W znacznej większości przypadki obturacyjnego bezdechu sennego są niezdiagnozowane, tylko 10% osób z tym zaburzeniem udaje się do specjalisty.
                            <br /><br />
                            Bardzo często zespół obturacyjnego bezdechu sennego wiąże się z <span className='bookmark-text'>głośnym chrapaniem</span> - ten objaw jest tym, który
                            najczęściej skłania
                            pacjentów do wizyty u specjalisty. Należy jednak pamiętać, iż <span className='bookmark-text'>chrapanie jest jednym z wielu występujących objawów 
                            obturacyjnego bezdechu sennego</span>, które pogarszają jakość życia nie tylko w nocy ale i w ciągu dnia.
                          
                            
                       </span>
                     
                    </div>
                   
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/problem-z-chrapaniem.webp'}
                                        imgWidth={'773'}
                                        imgHeight={'515'}
                                        altString={'Najlepszy sposób na leczenie chrapania i bezdechu sennego'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                <span className='content-text'> 
                            Bezdech senny <span className='bookmark-text'>charakteryzuje się krótkimi przerwami oddychania w trakcie snu</span>. Podczas epizodu obturacyjnego 
                            bezdechu próby wdychania powietrza wytwarzają ssanie, które powoduje zapadanie się tchawicy. Ten stan blokuje
                            przepływ powietrza na okres od 10 sekund do nawet jednej minuty, w tym czasie organizm śpiącej osoby próbuje zaczerpnąć
                            powietrza.
                            Kiedy poziom tlenu we krwi spada, mózg reaguje wybudzając osobę na tyle, aby mogła napiąć mięśnie
                            górnych dróg oddechowych i otworzyć tchawicę. <span className='bookmark-text'>Osoba po wybudzeniu próbuje zaczerpnąć tchu, po czym z powrotem zasypia</span>.
                            <span className='bookmark-text'> Cykl ten może powtórzyć się setki razy w ciągu jednej nocy</span>. Częste wybudzenia, których doświadczają osoby z
                            bezdechami, sprawiają, że są stale śpiące, a także prowadzą do zmian osobowości, takich jak drażliwość lub 
                            depresja. </span>

                <div className='consultationBody-content-only_text'>
                            <h2>Powikłania nieleczonego bezdechu sennego:</h2>
                            <span className='consultationBody-content-check-list-parent content-text in-list-text'>
                            <span className='consultationBody-content-check-list-child'>1) nadciśnienie tętnicze,</span>
                            <span className='consultationBody-content-check-list-child'>2) zaburzenia rytmu serca,</span>
                            <span className='consultationBody-content-check-list-child'>3) cukrzyca,</span>
                            <span className='consultationBody-content-check-list-child'>4) choroba niedokrwienna serca,</span>
                            <span className='consultationBody-content-check-list-child'>5) niewydolność serca,</span>
                            <span className='consultationBody-content-check-list-child'>6) udar mózgu,</span>
                            <span className='consultationBody-content-check-list-child'>7) wypadki komunikacyjne.</span>
                            </span>
                </div>

                <h2>Jak rozpoznać bezdech senny?</h2>
                <span className='content-text'>
                    <span className='bookmark-text'>Bezdechy powodują niedotlenienie organizmu</span>, co jest przyczyną objawów nocnych i dziennych.
                </span>
                        <div className='consultationBody-content-only_text-doubled-parent'>
                            <div className='consultationBody-content-only_text first'>
                                <h3>Nocne objawy bezdechu sennego :</h3>
                                <span className='consultationBody-content-check-list-parent in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chrapanie,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> bezdechy (obserwowane przez osoby z otoczenia chorego),</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> nykturia, czyli konieczność wyjścia do toalety,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zwiększona potliwość,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przebudzenia z uczuciem dławienia,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> duszność,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> suchość w jamie ustnej,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> kołatania serca,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> objawy refluksu żołądkowo-przełykowego,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> trudności z zaśnięciem, bezsenność.</span>
                                </span>
                            </div>

                            <div className='consultationBody-content-only_text'>
                                <h3>Dzienne objawy bezdechu sennego :</h3>
                                <span className='consultationBody-content-check-list-parent in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> senność dzienna,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> poranne zmęczenie,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> poranne bóle głowy,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zaburzenia pamięci i koncentracji,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> upośledzenie libido i impotencja,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zaburzenia psycho-emocjonalne, np. depresja.</span>
                                </span>
                            </div>
                        </div>

                <span>
                        <span className='bold-text'>Uwaga!</span> <br />
                        <span className='content-text'>Wykazano, że <span className='bookmark-text'>częstość incydentów sercowo-naczyniowych zakończonych zgonem</span> oraz niezakończonych zgonem w grupie 
                         Pacjentów <span className='bookmark-text'>z ciężkim zespołem obturacyjnego bezdechu sennego</span> <span className='bookmark-text'>była znacząco wyższa</span> niż w grupie kontrolnej 
                         zdrowych osób populacji ogólnej.</span>
                </span>
                <hr className='separator-line-simple'></hr>
                <h2 className='h2-margin-top'>Sen i jego znaczenie:</h2>
                <span><span className='bookmark-text'>Każdy z nas spędza 1/3 życia w czasie snu</span>. Dlatego też należy pamiętać, że czas na sen, nie jest czasem straconym!</span>
               


                <div className='consultationBody-content-img_text'>
                   
                    <div className='consultationBody-content-text'>
                        <div className='consultationBody-content-only_text-doubled-parent'>
                            <div className='consultationBody-content-only_text first'>
                                <h3>Sen przede wszystkim:</h3>
                                <span className='consultationBody-content-check-list-parent in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> daje odpoczynek, regeneruje,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> daje energię,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> poprawia nastrój,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> umożliwia koncentrację,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> konsoliduje pamięć.</span>
                                </span>
                            </div>

                            <div className='consultationBody-content-only_text'>
                                <h3>Zbyt krótki, bądź nieprawidłowy sen prowadzi do:</h3>
                                <span className='consultationBody-content-check-list-parent in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> chorób somatycznych,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zaburzeń psychicznych,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> wypadków komunikacyjnych,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> pogorszenia wyników w szkole/pracy,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> istotnego obniżenia jakości życia.</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/spokojny-sen-i-jego-znaczenie.webp'}
                                        imgWidth={'931'}
                                        imgHeight={'310'}
                                        altString={'leczenie chrapania rzeszów'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                

                <hr className='separator-line-simple'></hr>

                <h2 className='h2-margin-top' >Przyczyny chrapania i bezdechu sennego</h2>
                <span className='content-text'><span className='bookmark-text'>Dolegliwość chrapania, jak i zespół obturacyjnego bezdechu sennego są związane z utrudnionym przepływem powietrza przez gardło</span>. 
                            Najczęściej obserwuje się je u osób otyłych, po spożyciu większej porcji alkoholu albo kobiet po okresie menopauzy. 
                            Chrapanie nie zagraża zdrowiu jeżeli pojawia się sporadycznie, a powietrze jest w stanie swobodnie przepływać przez krtań.
                            <span className='bookmark-text'> Jeżeli jednak przerwy w oddychaniu pojawiają się ponad 10 razy na godzinę to znak, że masz do czynienia z bezdechem.</span>
                </span>

                    <div className='consultationBody-content-img_text'>
                        <div className='consultationBody-content-text'>
                     
                        <div className='consultationBody-content-only_text'>
                                <h2>Najczęstszymi przyczynami chrapania, jak i bezdechu sennego są:</h2>
                                <span className='consultationBody-content-check-list-parent content-text in-list-text'>
                                <span className='consultationBody-content-check-list-child'>1) wydłużone, wiotkie podniebienie miękkie,</span>
                                <span className='consultationBody-content-check-list-child'>2) skrócony dystans pomiędzy brzegiem podniebienia a tylną ścianą gardła,</span>
                                <span className='consultationBody-content-check-list-child'>3) wydatne łuki podniebienno-gardłowe,</span>
                                <span className='consultationBody-content-check-list-child'>4) przerośnięta nasada języka,</span>
                                <span className='consultationBody-content-check-list-child'>5) powiększone migdałki,</span>
                                <span className='consultationBody-content-check-list-child'>6) przerośnięty języczek,</span>
                                <span className='consultationBody-content-check-list-child'>7) skrzywiona przegroda nosowa.</span>
                                </span>
                        </div>
                       

                        </div>
                   
                        <div className='consultationBody-content-img-container'>
                       
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/wizualizacja-problemu-chrapania.webp'}
                                        imgWidth={'980'}
                                        imgHeight={'613'}
                                        altString={'leczenie bezdechu sennego rzeszów'}
                                        classString={'consultationBody-content-img'} />
                           
                        </div>
                    </div>

                    <h2>Metody leczenia chrapania i bezdechu sennego</h2>
                    <span className='content-text'>Jedną z najczęstszych przyczyn chrapania jest <span className='bookmark-text'>nieodpowiedni styl życia</span>. Zanim skorzystasz z porady specjalisty, 
                        spróbuj <span className='bookmark-text'>zmienić pozycję snu, zrezygnuj z używek, zacznij zdrowo się odżywiać, zredukuj masę ciała (w przypadku nadwagi)</span>.
                        Bardzo możliwe, że to wystarczy, by pożegnać się z uciążliwym problemem. 
                        Jeżeli nie – udaj się na wizytę do laryngologa bądź pulmonologa. Specjaliści zlecą odpowiednie badania takie jak <span className='bookmark-text'>polisomnografię </span> 
                        i ustalą dalsze kroki leczenia. W przypadku, gdy powody chrapania to wady anatomiczne konieczne może być ich<span className='bookmark-text'> chirurgiczne usunięcie</span>. Możliwe jest także
                        <span className='bookmark-text'> leczenie aparatem CPAP</span>, polegające na zakładaniu specjalnej maski podłączonej do aparatury ułatwiającej oddychanie każdej nocy.
                    </span>

                    <h2 className='h2-margin-top'>Leczenie chrapania i bezdechu sennego aparatem CPAP</h2>
                    <span className='content-text'>
                     Metoda leczenia chrapania występującego przy obturacyjnym bezdechu sennym  <span className='bookmark-text'>aparatem CPAP jest często uważana przez specjalistów za najlepszą i najbardziej skuteczną</span>.
                      Urządzenie generuje
                     strumień powietrza, który po przejściu przez specjalny filtr oczyszczający trafia do elastycznej rury. Rura prowadzi oczyszczone powietrze do szczelnie osadzonej maski na nosie lub ustach.
                    W trakcie snu urządzenie CPAP udrażnia wszelkie blokady, otwierając drogi oddechowe, dzięki czemu do płuc w czasie snu trafia optymalna ilość tlenu. W trakcie korzystania z aparatu CPAP
                    <span className='bookmark-text'> przepływ tlenu nie jest przez nic blokowany</span>, a więc oddech nie jest zatrzymywany, <span className='bookmark-text'>czego rezultatem jest brak nieprzyjemnych nocnych pobudek i chrapania</span>. 
                    </span>

                    <h2 className='h2-margin-top'>Leczenie chrapania i bezdechu sennego operacyjnie</h2>
                    <span className='content-text'>Oferujemy Państwu możliwość przeprowadzenia małoinwazyjnych operacji w znieczuleniu miejscowym, wykonywanych
                        <span className='bookmark-text'> w Mini Clinic</span>, w gabinecie zabiegowym. Natomiast większe operacje, wymagające znieczulenia ogólnego, przeprowadzane są w warunkach sali operacyjnej w szpitalu.
                    </span> <br /><br />

                    <h3 className='h2-margin-top center-text'><span className='bookmark-text '>Jeżeli Twoje chrapanie jest uciążliwe, nie zwlekaj odwiedź Mini Clinic i raz na zawsze pożegnaj się z problemem. <br />
                     Zapraszamy do rejestracji (Tel. 790 759 759). Oferujemy kompleksowe konsultacje, diagnostykę i zabiegi operacyjne z dziedziny otolaryngologii.</span></h3>

            </div>
        </div>

            <div className='home-page-info-specjalizacja' >
             <Bottom_page_images />
            </div>
        
        </div>
</>
    );
}