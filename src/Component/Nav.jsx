
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

function Nav() {
    
     return(
          <>
               <nav className='navbar2'>
                    <div className='logo-img'>
                          <img className='logo-set-img' src={logo} alt="png" data-aos="slide-down" />
                    </div>
                    <div className='menubar'>
                         <ul className='ul-set'>
                              <li className='li-set' data-aos="slide-down">
                                   <Link  className='a-set-ancer' to="/Home"  >Home</Link>
                              </li>
                              <li className='li-set' data-aos="slide-down">
                                   <Link  className='a-set-ancer' to="/About"  >About</Link>
                              </li>
                              <li className='li-set' data-aos="slide-up" >
                                   <Link className='a-set-ancer'  to="/News" >News</Link>
                              </li>
                              <li className='li-set' data-aos="slide-down">
                                   <Link className='a-set-ancer'  to="/Reviews"  >Reviews</Link>
                              </li>
                              <li className='li-set' data-aos="slide-up" >
                                   <Link className='a-set-ancer'  to="/Articles">Articles</Link>
                              </li>
                              <li className='li-set' data-aos="slide-up" >
                                   <Link className='a-set-ancer'  to="/Future">Future</Link>
                              </li>
                         </ul>
                    </div>
               </nav>
          </>
     )
}
export default Nav;