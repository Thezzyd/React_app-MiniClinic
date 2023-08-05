import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    useComponentDidMount
  } from "../scripts/Utils.js";
  import Bottom_page_images from './Bottom_page_images';
import {BiCheckCircle} from "react-icons/bi";
import MiniClinic_baner from './MiniClinic_baner.js';
import Img_lazy_load from './Img_lazy_load.js';
//const Img_lazy_load = React.lazy(() => import('./Img_lazy_load'));
export default function SpecialSnoring(){

    useComponentDidMount(() => {
        window.scrollTo(0, 0);
      });

    return(
        <>
        
            <MiniClinic_baner />

        <div className='home-page-info'>
                    
            <div className='home-page-title'>
                <h1>Migdałek gardłowy i migdałki podniebienne - objawy, wskazania do zabiegu</h1>
                <hr className='separator-line' />
            </div>
            <div className='consultationBody'>
            <div className='consultationBody-title'>
            </div>
            <div className='consultationBody-content'>
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2>Migdałek gardłowy</h2>
                        <span className='content-text'> Zwany trzecim migdałkiem, usytuowany jest w części nosowej gardła. 
                         Migdałki gardłowe u dzieci powiększają się często przy okazji infekcji zarówno bakteryjnych, jak i wirusowych.
                          Nie zawsze wymagają leczenia. </span>
                      
                       <div className='consultationBody-content-only_text'>
                            <h4>Migdałek gardłowy - Jakie objawy u dzieci powinny budzić niepokój?</h4>
                            <span className='consultationBody-content-check-list-parent content-text in-list-text'>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Oddychanie przez usta – dziecko ma otwartą buzię i „gapowaty” wyraz twarzy.</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Chrapanie, bezdech senny lub głośne oddychanie w czasie snu, dziecko budzi się zmęczone, w ciągu dnia jest apatyczne, nie ma apetytu.</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Nawracające zapalenia uszu lub niedosłuch.</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Częste i przedłużające się katary.</span>
                            <span className='consultationBody-content-check-list-child'><BiCheckCircle /> Zmiana głosu i brzmienia mowy – dziecko mów „przez nos” i jakby miało „kluski w buzi”.</span>
                            </span>
                        </div>
                    </div>
                   
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/badanie-migdalkow-u-dzieci-small.webp'}
                                        imgWidth={'552'}
                                        imgHeight={'370'}
                                        altString={'Trzeci migdał u dzieci (migdałek gardłowy)'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>




                <hr className='separator-line-simple'></hr>

               
                <div className='consultationBody-content-img_text'>
                    <div className='consultationBody-content-text'>
                        <h2 className='h2-margin-top'>Badanie endoskopowe migdałków</h2>
                        <span className='content-text'> 
                        <span className='bookmark-text'>Nowoczesną metodą oceny przerostu migdałka jest metoda endoskopowa</span> przy użyciu fiberoskopu, czyli giętkiego, cienkiego przewodu 
                            zawierającego światłowód i zakończonego kamerą, który wprowadza się przez nos lub przez jamę ustną, a obraz w 
                            powiększeniu widoczny jest na ekranie monitora. W przypadku takich endoskopii stosuje się czasami znieczulenie
                            miejscowe, polegające na rozpyleniu leku w obrębie gardła. <span className='bookmark-text'>Badanie endoskopowe jest bezbolesne</span>. 
                            Film z badania jest rejestrowany cyfrowo na komputerze. Na jego podstawie wybiera się <span className='bookmark-text'>klatki ze zdjęciami
                            przedstawiającymi stan miejscowy narządu</span>. Nagranie można odtwarzać wielokrotnie, bez konieczności 
                            powtarzania kolejny raz badania. <span className='bookmark-text'>Zdjęcia badanych endoskopowo narządów są zapisywane w pamięci komputera,
                            drukowane i wręczane pacjentowi</span>.
                        </span> 
                    </div>
                   
                    <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/zdrowe-i-chore-migdlaki-schemat.webp'}
                                        imgWidth={'2189'}
                                        imgHeight={'1150'}
                                        altString={'Endoskopia migdałków, 3 migdał'}
                                        classString={'consultationBody-content-img'} />
                    </div>
                </div>

                        <h2>Przerost migdałka gardłowego</h2>
                        <h4>Trzeci migdał - Leczenie zachowawcze:</h4>
                        <span className='content-text'> 
                            Polega na stosowaniu środków <span className='bookmark-text'>przeciwalergicznych</span> (u alergików), <span className='bookmark-text'>przeciwzapalnych</span>, zapobieganiu
                            nawracającym infekcjom poprzez stosowanie <span className='bookmark-text'>szczepionek</span> i leków zwiększających odporność.
                        </span> <br /><br />
                                   
                        <h4>Trzeci migdał - Postępowanie pooperacyjne:</h4>
                        <span className='content-text'> 
                            Ze względów bezpieczeństwa zalecany jest zwykle krótki,<span className='bookmark-text'> kilkugodzinny pobyt w oddziale 
                            szpitalnym</span> ze względu na możliwość wystąpienia wymiotów oraz krwawienia. <span className='bookmark-text'>Bezpośrednio 
                            po operacji nie można pić ani jeść</span>. Przez kolejne <span className='bookmark-text'>5-7 dni niewskazany jest wysiłek fizyczny 
                            oraz spożywanie gorących i drażniących pokarmów</span>. Zaleca się wypoczynek i ograniczenie kontaktów 
                            z innymi osobami celem zmniejszenia ryzyka infekcji.
                        </span><br /><br />

                        <h3 >Czy migdałek gardłowy odrasta?</h3>
                                <span className='content-text'> Operacja migdałka gardłowego <span className='bookmark-text'>nie jest zabiegiem doszczętnym</span> i 
                                    polega na usunięciu przerostu tkanki migdałkowej upośledzającej drożność nosa oraz funkcje trąbek
                                    słuchowych. <span className='bookmark-text'>Na skutek powtarzających się infekcji</span> górnych dróg oddechowych pozostawiona w 
                                    obrębie nosogardła niewielka ilość tkanki adenoidalnej <span className='bookmark-text'>może przerosnąć i wymagać kolejnego zabiegu</span>.
                                </span> <br /><br />
                                <hr className='separator-line-simple'></hr>
                    <div className='consultationBody-content-img_text'>
                        <div className='consultationBody-content-text'>
                            
                            <h2>Migdałki podniebienne – wskazania do usunięcia</h2>
                            <span className='content-text'> W ciągu dwóch pierwszych lat życia rodzice nie zdają sobie sprawy, że ich latorośl 
                                posiada migdałki podniebienne. Sen z oczu spędzają im wówczas <span className='bookmark-text'>zapalenia uszu będące przyczyną wielu nieprzespanych nocy</span>.
                                Migdałki <span className='bookmark-text'>powiększają się</span> fizjologicznie w okresie <span className='bookmark-text'>od 3 do 7 roku życia</span>. To właśnie w tym czasie dziecko najczęściej 
                                choruje na anginy i zapalenia gardła. To w tym okresie nabywa również odporność przeciwko większości bakterii, 
                                z którymi się styka w żłobku, przedszkolu i na podwórzu. <span className='bookmark-text'>Od 10 roku życia migdałki powinny się stopniowo zmniejszać</span>,
                                aż do prawie całkowitego <span className='bookmark-text'>zaniku w okresie pokwitania</span>. Po okresie pokwitania małe, prawie niewidoczne podczas badania
                                migdałki, nie spełniają żadnej istotnej funkcji. Niestety <span className='bookmark-text'>często migdałki zamiast zanikać stają się źródłem angin</span>. 
                                Pomimo stosowania antybiotyków dzieci chorują na anginy bardzo często, a kolejne niewyleczone do końca stany zapalne 
                                prowadzą do <span className='bookmark-text'>powiększania się migdałków</span>. W przypadku <span className='bookmark-text'>angin pojawiających się 4-5 razy w ciągu roku </span> 
                                (co dowodzi braku skuteczności antybiotykoterapii) należy bardzo poważnie rozważyć konieczność <span className='bookmark-text'>usunięcia migdałków</span>.<br /><br />
                                Czy usunięcie migdałków ma wpływ na system odpornościowy dziecka? W istocie <span className='bookmark-text'>migdałki są bardzo potrzebne do 4-5 roku
                                życia</span>. W tym okresie staramy się je usuwać tylko częściowo, wycinając chory fragment przerośniętej tkanki. 
                                Usunięcie części przerośniętych migdałków chroni dziecko przed <span className='bookmark-text'>kłopotami z jedzeniem, oddychaniem i zaburzeniami mowy</span>.
                                U starszych dzieci usunięcie migdałków nie niesie ze sobą żadnych zaburzeń odporności. 
                            </span>
                        
                        </div>
                    
                        <div className='consultationBody-content-img-container'>
                                    <Img_lazy_load
                                        isSrcSet={false}
                                        srcString={'/images/specjalnosci/chore-migdalki-ilustracja.webp'}
                                        imgWidth={'833'}
                                        imgHeight={'668'}
                                        altString={'Usunięcie migdałków (trzeci migdał wycięcie, migdałek podniebienny wycięcie)'}
                                        classString={'consultationBody-content-img'} />
                        </div>
                    </div>

                    <div className='consultationBody-content-only_text-doubled-parent'>
                            <div className='consultationBody-content-only_text first'>
                                <h4>Wskazania do operacji migdałków u dzieci:</h4>
                                <span className='consultationBody-content-check-list-parent in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> 4-5 angin w ciągu roku,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> naciek okołomigdałkowy,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ropień okołomigdałkowy,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekły charakter infekcji nieustępującej pomimo leczenia przez 3 miesiące.</span>
                                </span><br />

                                <span className='bold-text'>Uwaga!</span> <br />
                                <span className='content-text'>
                                <span className='bookmark-text'>Mitem jest opinia, że częste infekcje górnych dróg oddechowych są efektem operacji 
                                    usunięcia migdałków</span>.
                                </span>
                             
                            </div>

                            <div className='consultationBody-content-only_text'>
                                <h4>Wskazania do operacji migdałków u dorosłych:</h4>
                                <span className='consultationBody-content-check-list-parent in-list-text'>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> częste anginy,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> ropnie i nacieki okołomigdałkowe,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> przewlekły ropny proces zapalny tkanki migdałkowej z obecnością serowato-płynnej masy w migdałkach, z pobolewaniem gardła, powiększeniem węzłów chłonnych szyi, stanami podgorączkowymi i gorszym samopoczuciem,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> powikłania odogniskowe tj. bóle mięśni i stawów, zapalenie nerek, zapalenie mięśnia sercowego,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> zespół bezdechu śródsennego,</span>
                                <span className='consultationBody-content-check-list-child'><BiCheckCircle /> usunięcie migdałków połączone w części przypadków z plastyką podniebienia pozwala na poprawę oddychania pacjenta.</span>
                                </span>
                            </div>
                        </div>
                           
                                <h3 className='h2-margin-top'>Jaki typ znieczulenia stosujemy podczas operacji migdałków podniebiennych?</h3>
                                <span className='content-text'>Zarówno wcześniej jak i obecnie w większości szpitali zabieg operacyjny
                                    wykonuje się <span className='bookmark-text'>w znieczuleniu miejscowym</span>, jednak najbardziej komfortowym sposobem pozbycia się migdałków 
                                    jest <span className='bookmark-text'>operacja w narkozie</span>. Znieczulenie ogólne chroni pacjenta przed bólem i stresem, które nieodłącznie 
                                    towarzyszą zabiegowi. Leki przeciwbólowe pozwalają na skuteczne blokowanie bólu w pierwszej dobie po zabiegu.
                                </span>
                            

                        <h3 className='h2-margin-top' >Postępowanie pooperacyjne usunięcia migdałków</h3>
                            <span className='content-text'>
                                Pierwszą dobę po zabiegu pacjent powinien spędzić na oddziale szpitalnym. <span className='bookmark-text'>2 godziny po operacji 
                                podaje się chłodną wodę lub herbatę</span>. Od drugiej doby podaje się <span className='bookmark-text'>dietę półpłynną i papkowatą</span> unikając 
                                pokarmów szorstkich, ostrych, gorących, kwaśnych, gazowanych oraz kwaśnych płynów. Zaleca się stosowanie
                                diety półpłynnej (np. rzadki  kisiel, herbata, biszkopty, miksowane zupy, serki homogenizowane bez 
                                owoców). Stopniowo, w zależności od samopoczucia, należy przechodzić z diety półpłynnej na normalną.
                                <span className='bookmark-text'> Dolegliwości bólowe mogą utrzymywać się przez 2-3 tygodnie</span>. W 3-4 dobie zazwyczaj pojawiają się bóle
                                promieniujące do uszu.
                            </span><br /><br />

                        <h3 className='h2-margin-top center-text'><span className='bookmark-text '>Jeżeli Tobie lub Twojemu dziecku dolegają problemy z migdałkami serdecznie zapraszamy do rejestracji w Mini Clinic, aby podjąć odpowiednie środki leczenia i zażegnać problem na dobre. 
                        Oferujemy kompleksowe konsultacje i przeprowadzamy zabiegi operacyjne w tym zabiegi migdałków.</span></h3>

               
            </div>
        </div>

            <div className='home-page-info-specjalizacja' >
             <Bottom_page_images /> 
            </div>
        
        </div>
</>
    );
}


