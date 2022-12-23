import './Section6.css';
import map from '../Images/map.png';
import call from '../Images/call.png';
import 'aos/dist/aos.css';


function Section6() {
     
     return(
     <>
     <div className='section6'></div>
     <div className='sec-area' id='C'>
          <div className='contact-main-box' >
               <div className='contact-box' data-aos="slide-down">
                    <h1 className='head16'>Get in <br /> touch</h1>
                    <p className='paragrap8'>
                    Use our contact form for all information requests or contact us directly using the contact information below.
                    </p>
                    <p className='paragrap8'>
                    Feel free to get in touch with us via email or phone.
                    </p>
                    <div className='hr-set'></div>
                      <div className='location-set'>
                         <img className='call-img' src={map} alt="png" />
                         <div>
                         <h4 className='head18'>Our office Location</h4>
                         <p className='paragrap9'>The Interior Design Company <br /> EplanetSoft Private Limited Jaipur Rajasthan</p>
                         </div>
                      </div>
                      <div className='location-set'>
                         <img className='call-img' src={call} alt="png" />
                         <div>
                         <h4 className='head18'>Phone (Landline)</h4>
                         <p className='paragrap10'>+91 23 567 8987</p>
                         </div>
                      </div>
               </div>
              
               <div className='contact-box' data-aos="slide-up">
                    <h3 className='head19'>GET STARTED WITH A FREE QUOTATION</h3>
                    <form action="/action_page.php">
                          <label className='input-name-color' for="name">Name:</label><br />
                          <input className='input-set' type="text" name="name" required/><br/><br/>
                          <label className='input-name-color' for="email">Email:</label><br />
                          <input className='input-set' type="email" name="email" required /><br/><br/>
                          <label className='input-name-color' for="massage">Massage:</label><br />
                          <textarea className='input-set' required ></textarea><br /><br />
                          <input className='check-set' type="checkbox"  name="Checkbox" required />
                          <label className='input-name-color' for="vehicle2">I accept the <span className='color-set-grey'>Terms of Service</span> </label> <br /><br />
                          <input className='submit-btn' type="submit" value="Submit your request"/>
                      </form>
                    <p className='para'>Please Check This</p>
               </div>
          </div>
          </div>
     </>
     )
}
export default Section6;