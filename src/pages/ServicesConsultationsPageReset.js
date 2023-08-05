import Consultations from '../components/Consultations.js';
import { Helmet } from 'react-helmet';

const ServicesConsultationsPage2 = (props) =>{
 if(props.card == 0){
    localStorage.setItem('consultation-card', '0');
  }

    return(
      <>
        <Helmet>
            <title>Mini Clinic | Konsultacje laryngologiczne Rzeszów</title>
            <meta name='description' content='Kompleksowe konsultacje z zakresu laryngologii dzieci jak i dorosłych. Umów się na wizytę.' />
        </Helmet>
          <Consultations />
      </>
    );
  }
  
  export default ServicesConsultationsPage2;