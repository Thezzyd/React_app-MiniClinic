import Surgeries from '../components/Surgeries.js';
import { Helmet } from 'react-helmet';

const ServicesSurgeriesPage = (props) =>{

    SetLocalStorageValue('surgery-card', props.card);
    SetLocalStorageValue('surgery-card-surgery', props.surgery);

    return(
      <>
        <Helmet>
            <title>{props.title}</title>
            <meta name='description' content={props.desc} />
          </Helmet>
          <Surgeries />
      </>
    );
  }
  export default ServicesSurgeriesPage;


  function SetLocalStorageValue(varName, value){
    localStorage.setItem(varName, value);
  }