
 const Img_lazy_load = (props) =>{
    if(props.isSrcSet){
        return(
           
            <img 
                 srcSet={props.srcSetString}
                 src={props.srcString}
                 width={props.imgWidth}
                 height={props.imgHeight}
                 alt={props.altString}
                 className={props.classString}
                 loading="lazy"/>
            
     );
    }else{
        return(
           
            <img 
                src={props.srcString}
                width={props.imgWidth}
                height={props.imgHeight}
                alt={props.altString}
                className={props.classString}
                loading="lazy"/>
                
                
     );

    }
   
  }
  export default Img_lazy_load;


  /*                   srcSet='./images/home/rejestracja-400.webp 400w,
                  ./images/home/rejestracja-600.webp 600w,
                  ./images/home/rejestracja-800.webp 800w,
                  ./images/home/rejestracja-1000.webp 1000w,
                  ./images/home/rejestracja-1200.webp 1200w'
 
                 src='./images/home/rejestracja-1200.webp 1200w'
                 alt='Klinika laryngologiczna w Rzeszowie, posiadamy wieloletnie doświadczenie w leczeniu dzieci i dorosłych'
                 className='homeSectionCard-content-img'/>
                 */