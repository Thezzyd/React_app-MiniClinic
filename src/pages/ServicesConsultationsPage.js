import Consultations from '../components/Consultations.js';
import { Helmet } from 'react-helmet';

const ServicesConsultationsPage = (props) =>{
  /*if(props.card == 1){
    localStorage.setItem('consultation-card', '1');
  }else if(props.card == 2){
    localStorage.setItem('consultation-card', '2');
  }else if(props.card == 3){
    localStorage.setItem('consultation-card', '3');
  }else if(props.card == 4){
    localStorage.setItem('consultation-card', '4');
  }else if(props.card == 0){
    localStorage.setItem('consultation-card', '0');
  }*/

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
  
  export default ServicesConsultationsPage;