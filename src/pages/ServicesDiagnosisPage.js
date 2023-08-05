import Diagnosis from '../components/Diagnosis.js';
import { Helmet } from 'react-helmet';

const ServicesDiagnosisPage = (props) =>{
  SetLocalStorageValue('diagnosis-examination', props.examination);
    return(
      <>
        <Helmet>
            <title>{props.title}</title>
            <meta name='description' content={props.desc} />
          </Helmet>
          <Diagnosis />
      </>
    );
  }
  export default ServicesDiagnosisPage;

  function SetLocalStorageValue(varName, value){
    localStorage.setItem(varName, value);
  }

  /*  <title>{props.title}</title>
            <meta name='description' content={props.desc} />*/