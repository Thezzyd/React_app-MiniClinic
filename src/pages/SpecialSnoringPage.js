
import SpecialSnoring from '../components/SpecialSnoring';
import { Helmet } from 'react-helmet';

 const SpecialSnoringPage = () =>{
    return(
     <>
      <Helmet>
            <title>Mini Clinic | Leczenie chrapania i bezdechu sennego Rzeszów</title>
            <meta name='description' content='W Mini Clinic posiadamy wieloletnie doświadczenie i wysoką skuteczność w leczeniu chrapania i bezdechu sennego. Umów się na wizytę i napraw swój sen.' />
        </Helmet>
        <SpecialSnoring />
       </>
    );
  }
  export default SpecialSnoringPage;
 