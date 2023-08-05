import SpecialTonsils from '../components/SpecialTonsils';
import { Helmet } from 'react-helmet';

 const SpecialTonsilsPage = () =>{
    return(
     <>
      <Helmet>
            <title>Mini Clinic | Migdałek gardłowy, migdałki podnniebienne Rzeszów</title>
            <meta name='description' content='Od wielu lat zajmujemy się leczeniem migdałków u dzieci jak i u dorosłych (trzeci migdał, migdałki podniebienne i inne...). Serdecznie zapraszamy do rejestracji!' />
        </Helmet>
        <SpecialTonsils />
       </>
    );
  }
  export default SpecialTonsilsPage;