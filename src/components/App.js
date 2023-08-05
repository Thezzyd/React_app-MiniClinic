import '../css/App.css';

import Footer from './Footer';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

import HomePage from '../pages/HomePage.js';
import ServicesConsultationsPage from '../pages/ServicesConsultationsPage';
import ServicesConsultationsPageReset from '../pages/ServicesConsultationsPageReset';
import ServicesSurgeriesPage from '../pages/ServicesSurgeriesPage';
import ServicesSurgeriesPageReset from '../pages/ServicesSurgeriesPageReset';
import ServicesDiagnosisPage from '../pages/ServicesDiagnosisPage';
import SurgeryQualificationPage from '../pages/SurgeryQualificationPage';

import { BrowserRouter as Router,
  Routes,
  Route,
  Navigate} from 'react-router-dom';

import SpecialSnoringPage from '../pages/SpecialSnoringPage';
import SpecialNosePage from '../pages/SpecialNosePage';
import SpecialTonsilsPage from '../pages/SpecialTonsilsPage';

  function SetMode(){
    let getMode = localStorage.getItem('mode');
        if(getMode && getMode==='dark-mode'){
          const body = document.querySelector('body');
          body.classList.add('dark');
         
        }
    };

function App() {
  
  return (
    <Router>
      <div className="App">
        {SetMode()}
      
        <MobileNavbar />
        <Navbar />

        <section className='parent-page-content'>
       

          <Routes>

            <Route path='/' exact element={<HomePage />} />
            <Route path='/zabiegi' exact element={<ServicesSurgeriesPageReset card={0} title="Mini Clinic | Zabiegi operacyjne - Laryngologia Rzeszów" desc="Wykonujemy szereg zabiegów operacyjnych z zakresu laryngologii zarówno w znieczuleniu ogólnym jak i miejscowym. Zapraszamy!" />} /> 
            <Route path='/diagnostyka' exact element={<ServicesDiagnosisPage card={0} title="Mini Clinic | Diagnostyka - Laryngologia Rzeszów" desc="Zachowując najwyższe standardy medyczne oferujemy szereg badań diagnostycznych w zakresie laryngologii. Zapraszamy!" />} /> 

            <Route path='/konsultacje' exact element={<ServicesConsultationsPage />} />
           

            <Route path='/zabiegi-w-znieczuleniu-miejscowym' exact element={<ServicesSurgeriesPage card={1} surgery={0} title="Mini Clinic | Zabiegi operacyjne w znieczuleniu miejscowym" desc="Wykonujemy szereg zabiegów operacyjnych z zakresu laryngologii zarówno w znieczuleniu ogólnym jak i miejscowym. Zapraszamy do Mini Clinic!" />} />
            <Route path='/zabiegi-w-znieczuleniu-ogolnym' exact element={<ServicesSurgeriesPage card={2} surgery={0} title="Mini Clinic | Zabiegi operacyjne w znieczuleniu ogólnym" desc="Wykonujemy szereg zabiegów operacyjnych z zakresu laryngologii zarówno w znieczuleniu ogólnym jak i miejscowym. Zapraszamy do Mini Clinic!" />} />

            <Route path='/zabiegi-w-znieczuleniu-ogolnym/operacja-zatok-przynosowych' exact element={<ServicesSurgeriesPage card={2} surgery={5} title="Mini Clinic | Operacja zatok przynosowych Rzeszów" desc="Zabieg operacyjny zatok przynosowych, wskazania do operacji oraz zalecenia po zabiegu. Umów się na zabieg w naszej klinice." />} />
            <Route path='/zabiegi-w-znieczuleniu-ogolnym/usuniecie-polipow-nosa' exact element={<ServicesSurgeriesPage card={2} surgery={4} title="Mini Clinic | Usunięcie polipów nosa Rzeszów" desc="Polipektomia nosa, wskazania do zabiegu oraz zalecenia po zabiegu. Umów się na zabieg w Mini Clinic." />} />
            <Route path='/zabiegi-w-znieczuleniu-ogolnym/septoplastyka' exact element={<ServicesSurgeriesPage card={2} surgery={3} title="Mini Clinic | Korekta przegrody nosa Rzeszów" desc="Korekta przegrody nosowej (septoplastyka), poznaj wskazania do operacji oraz zalecenia po zabiegu. Umów się na wybrany zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-ogolnym/drenaz-jam-bebenkowych' exact element={<ServicesSurgeriesPage card={2} surgery={2} title="Mini Clinic | Drenaż jam bębenkowych Rzeszów" desc="Drenaż jam bębenkowych w wysiękowym zapaleniu uszu. Umów się na zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-ogolnym/zabiegi-operacyjne-migdalkow' exact element={<ServicesSurgeriesPage card={2} surgery={1} title="Mini Clinic | Zabiegi operacyjne migdałków Rzeszów" desc="Zabiegi operacyjne migdałków w Rzeszowie: adenotomia, tonsillektomia, adenotonsillotomia... Wskazania oraz zalecenia. Umów się na wybrany zabieg w Mini Clinic w Rzeszowie." />} />

            <Route path='/zabiegi-w-znieczuleniu-miejscowym/koagulacja' exact element={<ServicesSurgeriesPage card={1} surgery={6} title="Mini Clinic | Koagulacja naczyń krwionośnych nosa Rzeszów" desc="Koagulacja chemiczna lub elektryczna w przypadku nawracających krwawień z nosa... Umów się na zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-nos' exact element={<ServicesSurgeriesPage card={1} surgery={5} title="Mini Clinic | Termoablacja małżowin nosowych Rzeszów" desc="Termoablacja małżowin nosowych dolnych. Zabieg zmniejszenia masy dolnych małżowin nosowych wykonywany jest... Umów się na zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-migdalki' exact element={<ServicesSurgeriesPage card={1} surgery={4} title="Mini Clinic | Termoablacja migdałków podniebiennych Rzeszów" desc="Termoablacja migdałków podniebiennych wykonywana u osób z przerośniętymi migdałkami podniebiennymi wykorzystuje termoablację (radiochirurgię)... Umów się na zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-miejscowym/kryptoliza-migdalki' exact element={<ServicesSurgeriesPage card={1} surgery={3} title="Mini Clinic | Kryptoliza migdałków podniebiennych Rzeszów" desc="Kryptoliza migdałków podniebiennych - zabieg wykonywany u osób z nadmiernie wytwarzanymi i zalegającymi w migdałkach podniebiennych czopami retencyjnymi... Umów się na zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-miejscowym/uppp' exact element={<ServicesSurgeriesPage card={1} surgery={2} title="Mini Clinic | Zabieg plastyki podniebienia - UPPP Rzeszów" desc="Operacja plastyczna gardła, podniebienia, języczka podniebienia u osób chrapiących i osób z bezdechem sennym... Umów się na zabieg w Mini Clinic w Rzeszowie." />} />
            <Route path='/zabiegi-w-znieczuleniu-miejscowym/termoablacja-podniebienie' exact element={<ServicesSurgeriesPage card={1} surgery={1} title="Mini Clinic | Termoablacja podniebienia Rzeszów" desc="Termoablacja podniebienia miękkiego u osób chrapiących i osób z bezdechem sennym - bezkrwawy zabieg wykonywany ambulatoryjnie... Umów się na zabieg w Mini Clinic w Rzeszowie." />} />

            <Route path='/diagnostyka/badanie-poligraficzne' exact element={<ServicesDiagnosisPage examination={6} title="Mini Clinic | Badanie poligraficzne Rzeszów" desc="W celu określenia prawdopodobieństwa, czy cierpisz na obturacyjny bezdech senny niezbędnym elementem diagnostyki jest badanie poligraficzne... Umów się na badanie w Mini Clinic w Rzeszowie." />} />
            <Route path='/diagnostyka/audiometria-impedancyjna' exact element={<ServicesDiagnosisPage examination={5} title="Mini Clinic | Audiometria impedancyjna Rzeszów" desc="Audiometria impedancyjna obejmuje tympanometrię uzupełnioną o pomiar odruchów z mięśnia strzemiączkowego, który jest... Umów się na badanie w Mini Clinic w Rzeszowie." />} />
            <Route path='/diagnostyka/tympanometria' exact element={<ServicesDiagnosisPage examination={4} title="Mini Clinic | Tympanometria Rzeszów" desc="Tympanometria jest nieinwazyjnym badaniem, polegającym na ocenie ruchomości (podatności) błony bębenkowej. Pozwala to na określenie... Umów się na badanie w Mini Clinic w Rzeszowie." />} />
            <Route path='/diagnostyka/audiometria-tonalna' exact element={<ServicesDiagnosisPage examination={3} title="Mini Clinic | Audiometria tonalna Rzeszów" desc="Audiometria tonalna popularnie określana jako „badanie słuchu”. Umożliwia określenie wielkości i rodzaju ubytku słuchu... Umów się na badanie w Mini Clinic w Rzeszowie." />} />
            <Route path='/diagnostyka/endoskopia-migdalki' exact element={<ServicesDiagnosisPage examination={2} title="Mini Clinic | Endoskopia migdałka gardłowego u dzieci Rzeszów" desc="Endoskopowe badanie migdałka gardłowego u dziecka jest jedyną metodą diagnostyczną pozwalającą na jednoznaczne określenie wielkości i struktury migdałka gardłowego, nazywanego również trzecim migdałkiem..." />} />
            <Route path='/diagnostyka/endoskopia-nos-gardlo-krtan' exact element={<ServicesDiagnosisPage examination={1} title="Mini Clinic | Endoskopia nosa, gardła i krtani Rzeszów" desc="Badanie endoskopowe powinno być podstawą każdej solidnej konsultacji laryngologicznej u pacjenta z problemami od strony górnych dróg oddechowych. Pozwala na... Umów się na badanie w Mini Clinic w Rzeszowie." />} />

            <Route path='/chrapanie' exact element={<SpecialSnoringPage />} />
            <Route path='/leczenie-skrzywienia-przegrody' exact element={<SpecialNosePage />} />
            <Route path='/migdalki' exact element={<SpecialTonsilsPage />} />

           
          
            <Route path='*' element={<Navigate replace to='/' />} />
               

          </Routes>

        <Footer />
        </section>

      </div>
    </Router>
  );
}

export default App;


/* <Route path='/konsultacje-dorosli' exact element={<ServicesConsultationsPage card={1} />} />
            <Route path='/konsultacje-dzieci' exact element={<ServicesConsultationsPage card={2} />} />
            <Route path='/konsultacje-chrapanie' exact element={<ServicesConsultationsPage card={3} />} />*/

            /* <Route path='/kwalifikacja-do-zabiegow-operacyjnych' exact element={<SurgeryQualificationPage />} />*/