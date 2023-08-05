import Surgery_qualification from '../components/Surgery_qualification.js';
import { Helmet } from 'react-helmet';

const SurgeryQualificationPage = (props) =>{
 /* if(props.card == 1){
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
            <title>Mini Clinic | Kwalifikacja do zabiegu operacyjnego</title>
            <meta name='description' content='Procedura kwalifikacji do zabiegów operacyjnych w Mini Clinic dla dzieci i dorosłych.' />
        </Helmet>
          <Surgery_qualification />
      </>
    );
  }
  
  export default SurgeryQualificationPage;