import './Section3.css';
import  fruity from '../Images/frooty.jpg';
import color from '../Images/picer.png'

import 'aos/dist/aos.css';
import  { useState}  from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Section3() {
   
    const [counterOn, setCounterOn] = useState(false)
     return(
          <>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
               <div className='section-three' >
                      <div className='text-contain'>
                         <h5 className='head6' data-aos="fade-up">About us</h5>
                         <h1 className='head7' data-aos="fade-right">We provide custom web designs</h1>
                         <h4 className='head8' data-aos="fade-up-right">WE WORK DIRECTLY FOR OUR CLIENTS AND PUT CLIENT'S  INTERESTS FIRST.</h4>
                         <p className='paragrap3' data-aos="fade-down" >Everything that can be necessary to create and manage new projects (startups) in modern conditions. From development of concept, business plan and project management plan, to marketing strategy and tactics, as well as the system of customer attraction via the Internet and sales system.</p>
                      </div>
                      <div className='count-boxs'>
                         <div className='counter-box color-grey' data-aos="slide-up">
                        { counterOn && <h1 className='head9'> <CountUp start={0} end={75} duration={4} />% </h1>}  
                              <p className='paragrap4'>Sample text. Click to select the text box. Click again or double click to startediting the text.</p>
                         </div>
                         <div className='counter-box color-blue' data-aos="slide-right">
                         { counterOn && <h1 className='head9'> <CountUp start={0} end={17} duration={5} />% </h1>}
                              <p className='paragrap4'>Sample text. Click to select the text box. Click again or double click to startediting the text.</p>
                         </div>
                         <div className='counter-box color-blue' data-aos="slide-down">
                         { counterOn && <h1 className='head9'> <CountUp start={0} end={20} duration={5} />% </h1>}
                              <p className='paragrap4'>Sample text. Click to select the text box. Click again or double click to startediting the text.</p>
                         </div>
                         <div className='counter-box color-orange' data-aos="slide-up">
                          { counterOn && <h1 className='head9'> <CountUp start={0} end={13} duration={5} />% </h1>}
                              <p className='paragrap4'>Sample text. Click to select the text box. Click again or double click to startediting the text.</p>
                         </div>
                      </div>
                      <div className='bg-img'>
                         <img src={fruity} alt="jpg" className='fruity-img' data-aos="slide-right" />
                      </div>
                       <div className='text-con'>
                         <h1 className='head10' data-aos="slide-down">Brand, experiences and radical collaboration</h1>
                         <p className='paragrap5' data-aos="slide-up">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                       </div>
                       <div className='grey-box' data-aos="zoom-in">
                       <img src={color} alt="png" className='box-img' />
                         <h5 className='head11'>Creating the world's first community driven superbrand. Massa tincidunt nunc pulvinar sapien et. Ante in nibh mauris cursus mattis. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.</h5>
                       </div>
                       <div className='red-text'>
                         <h1 className='head12' data-aos="zoom-in-right">TRANSLATING 100 YEARS OF SERVICE INTO A DIGITAL FUTURE</h1>
                         <p className='paragrap6' data-aos="zoom-out-right">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                       <button className='set-button' data-aos="zoom-in">READ MORE</button>
                       </div>
               </div>
               </ScrollTrigger>
          </>
     )
}
export default Section3;