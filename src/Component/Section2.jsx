import './Section2.css'
import 'aos/dist/aos.css';
import com from '../Images/computer.jpg'
import mac from '../Images/mac.jpg'
import mob from '../Images/phone.jpg'

function Section2() {
     return(
          <>
               <div className='section2' id='B'>
                    <h1 className='head4' data-aos="fade-up-right">Capabilities</h1>
                    <p className='paragrap1' data-aos="flip-down">The result of our company branding process is a comprehensive brand guideline that can be used to design a marketing website and other design assets like brand illustrations that reflect the new brand.</p>
                    <div className='three-box'>
                         <div className='boxes' data-aos="fade-right">
                             <img className='img-size-set' src={com} alt="jpg" />
                             <h2 className='head5'>BRAND STRATEGY</h2>
                             <ul className='ul-design'>
                              <li className='li-design'>Brand equity audit</li>
                              <li className='li-design'>Audience analysis</li>
                              <li className='li-design'>Competitive review</li>
                              <li className='li-design'>Strategic direction</li>
                             </ul>
                         </div>
                         <div className='boxes' data-aos="flip-right">
                             <img className='img-size-set' src={mac} alt="jpg" />
                             <h2 className='head5'>BRAND IDENTITY</h2> 
                             <ul className='ul-design'>
                              <li className='li-design'>Visual positioning</li>
                              <li className='li-design'>Visual identity system</li>
                              <li className='li-design'>Icon & illustrations guides</li>
                              <li className='li-design'>Brand application</li>
                             </ul>     
                         </div>
                    </div>
                    <div className='one-box'>
                         <div className='boxes' data-aos="slide-right">
                           <img className='img-size-set' src={mob} alt="jpg" />
                           <h2 className='head5'>TOP STRATEGY</h2>
                           <ul className='ul-design'>
                              <li className='li-design'>Verbal identity</li>
                              <li className='li-design'>Tagline exploration</li>
                              <li className='li-design'>Communication style guide</li>
                              <li className='li-design'>Brand Icons</li>
                           </ul>
                         </div>
                    </div>
               </div>
          </>
     )
}
export default Section2;