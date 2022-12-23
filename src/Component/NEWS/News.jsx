import './News.css';
import Archite from '../../Images/Archite.jpg'
import Planing from '../../Images/Planing.jpg'
import Design from '../../Images/Design.jpg'
import Building from '../../Images/Building.jpg'
import Footer from '../Footer';
import 'aos/dist/aos.css';
import BootNavbar from '../BootNavbar';
import Nav from '../Nav';

function News() {
     return(
          <>
          <Nav />
     <BootNavbar />
               <div className='news'>
                    <div className='news-boxs'>
                         <img  className='news-set-img' data-aos="slide-down" src={Archite} alt="jpg" />
                    </div>
                    <div className='news-boxs'>
                         <h1 className='news-head'>Architecture news  and projects</h1>
                   <div className='news-set' data-aos="slide-up">
                    <img className='news-imgs' src={Planing} alt="jpge" />
                   <div className='text-set'>
                    <h2>Planing</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    </div>
                   <div className='news-set' data-aos="slide-right">
                    <img className='news-img' src={Design} alt="jpge" />
                   <div className='text-set'>
                    <h2>Design</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    </div>
                   <div className='news-set' data-aos="slide-down">
                    <img className='news-img' src={Building} alt="jpge" />
                   <div className='text-set'>
                    <h2>Building</h2>
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    </div>
                    </div>
                    </div>
               </div>
               <Footer />
          </>
     )
}

export default News;