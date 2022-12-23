import './About.css';
import girl from '../../Images/girl.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../../Component/Footer';
import BootNavbar from '../BootNavbar';
import Nav from '../Nav'


function About() {
     useEffect(()=>{
          AOS.init({ duration: 2000});
     }, [])
return(
     <>
     <Nav />
     <BootNavbar />
          <div className='main-about'>
               <div className='about-roll' data-aos="slide-down" ></div>
               <img className='about-img' src={girl} alt="jpge" data-aos="slide-right"  />
               <div className='about-box-set' data-aos="slide-up" >
                    <h3 className='about-head'>About Us</h3>
                    <p className='about-para'>Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Lobortis elementum nibh tellus molestie nunc non. Aliquet bibendum</p>
                    <button className='about-button'>LEARN MORE</button>
               </div>
               <br />
               <br />
               <div className='about-three-box'>
                    <div className='about-box' data-aos="slide-up" >
                         <h1 className='about-head1'>01</h1>
                         <p className='about-para1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div style={{backgroundColor: ' #E33F1F '}} className='about-box' data-aos="slide-down" >
                         <h1 className='about-head1'>02</h1>
                         <p className='about-para1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className='about-box' data-aos="slide-up" >
                         <h1 className='about-head1'>03</h1>
                         <p className='about-para1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
               </div>
               
          </div>
          <Footer />
     </>
)
}

export default About;

