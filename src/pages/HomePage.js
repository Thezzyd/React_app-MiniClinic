import Home from '../components/Home';
import { Helmet } from 'react-helmet';
 
 const HomePage = () =>{
    return(
     <>
       <Helmet>
            <title>Mini Clinic - Laryngologia | Leczenie chrapania Rzeszów</title>
            <meta name='description' content="Specjalizujemy się w leczeniu chrapania, bezdechu sennego, migdałków oraz wielu innych przypadłości z dziedziny otolaryngologii. Serdecznie zapraszamy!" />
        </Helmet>
        <Home />
       </>
    );
  }
  export default HomePage;