import './Section5.css';
import color from '../Images/color.png'
import 'aos/dist/aos.css';

function Section5(){
   
     return(
          <>
             <div className='section5'>
               <h1 className='head15' data-aos="flip-right"> Turn your ideas to live web experiences</h1>
               <p className='paragrap7' data-aos="slide-down">Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat <br /> non proident.</p>
               <br />
               <button className='set-button' data-aos="slide-up">READ MORE</button>
               <div className='const-box'>
                    <div className='color-box' data-aos="slide-right"></div>
                    <div className='color-img'>
                       <img className='img-color-set' src={color} alt="png" data-aos="fade-up" />
                    </div>
               </div>
             </div>
          </>
     )
}
export default Section5;