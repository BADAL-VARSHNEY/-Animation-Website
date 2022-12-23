import './Header.css';
import bg from '../Images/roll.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link} from "react-router-dom";
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';


function Header() {
     useEffect(()=>{
          AOS.init({ duration: 2000});
     }, [])
     return(
          <>
     
          <Navbar2 />
          <Navbar />
          <div className='contain' id='A'>
                         <img className='img-width-siz' src={bg} alt="jpg" />
               <div className='textarea'>
                         <h1 className='head' data-aos="fade-right">Creative agency</h1>
                         <div className='menubar'>
                              <ul className='ul-size' data-aos="slide-right">
                                   <li className='li-desing'>
                                   <Link className='link-desing' to="/About">About-us</Link>
                                   </li>
                                   <li className='li-desing'>
                                   <Link className='link-desing' to="/News">News</Link>
                                   </li>
                                   <li className='li-desing'>
                                   <Link className='link-desing' to="/Reviews">Reviews</Link>
                                   </li>
                                   <li className='li-desing'>
                                   <Link className='link-desing' to="/Articles">Articles</Link>
                                   </li>
                                   <li className='li-desing'>
                                   <Link className='link-desing' to="/Future">Future</Link>
                                   </li>
                              </ul>
                         </div>
               </div>
          </div>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
          
          </>
     )
}
export default Header;