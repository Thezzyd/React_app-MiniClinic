import Surgeries from '../components/Surgeries.js';
import { Helmet } from 'react-helmet';

const ServicesSurgeriesPageReset = (props) =>{
  if(props.card == 0){
    localStorage.setItem('surgery-card', '0');
    localStorage.setItem('surgery-card-surgery', '0');
  }
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
  export default ServicesSurgeriesPageReset;