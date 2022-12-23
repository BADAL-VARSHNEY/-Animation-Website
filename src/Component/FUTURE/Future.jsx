import './Future.css';
import BootNavbar from '../BootNavbar'
import  Nav from '../Nav';
import Footer from '../Footer';

function Future() {
    
     return(
          <>
          <BootNavbar />
          <Nav />
              <div className='future-container'>
               <div className='f-boxs top-set' data-aos="slide-down" >
               <div className='f-roll white-color'>
               <i className="fa-regular fa-lightbulb i-set b-set"></i>
               </div>
               <h4 className='f-head w-set'>STRATEGY</h4>
               <p className='f-para w-set'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               <button className='f-btn w-set w-border'>MORE</button>
               </div>
               <div className='f-boxs bottom-set' data-aos="fade-left" >
               <div className='f-roll blue-color'>
               <i className="fa-solid fa-bullhorn i-set w-set"></i>
               </div>
               <h4 className='f-head b-set'>RESULTS</h4>
               <p className='f-para b-set'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               <button className='f-btn b-set b-border'>MORE</button>
               </div>
               <div className='f-boxs top-set' data-aos="slide-up" >
               <div className='f-roll white-color'>
               <i className="fa-regular fa-gem i-set b-set"></i>
               </div>
               <h4 className='f-head w-set'>EXPERTISE</h4>
               <p className='f-para w-set'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               <button className='f-btn w-set w-border'>MORE</button>
               </div>
               <div className='f-boxs bottom-set' data-aos="slide-right" >
               <div className='f-roll blue-color'>
               <i className="fa-solid fa-user i-set w-set"></i>
               </div>
               <h4 className='f-head b-set'>SUPPORT</h4>
               <p className='f-para b-set'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               <button className='f-btn b-set b-border'>MORE</button>
               </div>
              </div>
              <Footer />
          </> 
     )
}
export default Future;