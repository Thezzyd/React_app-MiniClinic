import SpecialNose from '../components/SpecialNose';
import { Helmet } from 'react-helmet';

 const SpecialNosePage = () =>{
    return(
     <>
      <Helmet>
            <title>Mini Clinic | Septoplastyka Rzeszów</title>
            <meta name='description' content='Trudności z oddychaniem często są skutkiem krzywej przegrody nosowej. Oferujemy konsultacje, diagnostykę i zabiegi operacyjne. Serdecznie zapraszamy do rejestracji.' />
        </Helmet>
        <SpecialNose />
       </>
    );
  }
  export default SpecialNosePage;