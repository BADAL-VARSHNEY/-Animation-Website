import './Navbar2.css';
import logo from '../Images/logo.png'
import 'aos/dist/aos.css';
// import { Link } from 'react-router-dom';

function Navbar2() {
     return(
          <>
               <nav className='navbar2'>
                    <div className='logo-img'>
                          <img className='logo-set-img' src={logo} alt="png" data-aos="slide-down" />
                    </div>
                    <div className='menubar'>
                         <ul className='ul-set'>
                              <li className='li-set' data-aos="slide-down">
                                   <a  className='a-set-ancer' href="#A"  >HOME</a>
                              </li>
                              <li className='li-set' data-aos="slide-up" >
                                   <a className='a-set-ancer'  href="#B" >ABOUT</a>
                              </li>
                              <li className='li-set' data-aos="slide-down">
                                   <a className='a-set-ancer'  href="#C"  >CONTACT</a>
                              </li>
                              <li className='li-set' data-aos="slide-up" >
                                   <a className='a-set-ancer'  href="#/" data-aos="slide-down" >LOGOUT</a>
                              </li>
                         </ul>
                    </div>
               </nav>
          </>
     )
}
export default Navbar2;