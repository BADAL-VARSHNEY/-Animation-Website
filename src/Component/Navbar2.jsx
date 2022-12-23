import './Navbar2.css';
import logo from '../Images/logo.png'
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Navbar2() {
     const navigate =useNavigate() 
     function myLogoutBtn() {
      const set = window.confirm('Are you sure?')
      if (set) {
          navigate("/");
      }else{
           navigate("/Home")
      }
     }
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
                                   <button className='a-set-ancer btn-set' onClick={myLogoutBtn}  data-aos="slide-down" >LOGOUT</button>
                              </li>
                         </ul>
                    </div>
               </nav>
          </>
     )
}
export default Navbar2;