import './Articles.css';
import BootNavbar from '../BootNavbar';
import Nav from '../Nav';
import Footer from '../Footer';
import man from '../../Images/man.jpg';
import man2 from '../../Images/man2.jpg';
import px from '../../Images/px.jpeg';
import 'aos/dist/aos.css';

function Articles() {
     
     return(
          <>
          <BootNavbar />
          <Nav />
          <div className='articles-container'>
                  <h1 className='art-head' data-aos="fade-up-right">Our Articles</h1>
                  <div className='flex-boxs'>
                    <div className='art-box' data-aos="fade-left">
                         <img className='art-img-set' src={man2} alt="jpg" />
                         <h3 className='art-head2'>Post 1 Headline</h3>
                         <p className='art-head2'>Sample small text. Lorem ipsum dolor sit amet.</p>
                         <h6 className='p-color'>Wed Jul 22 2020</h6>
                         <button className='art-btn'>MORE</button>
                    </div>
                    <div className='art-box white-color' data-aos="fade-right">
                         <img className='art-img-set' src={px} alt="jpeg" />
                         <h3 className='art-head2'>Post 1 Headline</h3>
                         <p className='art-head2'>Sample small text. Lorem ipsum dolor sit amet.</p>
                         <h6 className='p-color'>Wed Jul 22 2020</h6>
                         <button className='art-btn'>MORE</button>
                    </div>
                    <div className='art-box' data-aos="fade-down-right">
                         <img className='art-img-set' src={man} alt="jpg" />
                         <h3 className='art-head2'>Post 1 Headline</h3>
                         <p className='art-head2'>Sample small text. Lorem ipsum dolor sit amet.</p>
                         <h6 className='p-color'>Wed Jul 22 2020</h6>
                         <button className='art-btn'>MORE</button>
                    </div>
                  </div>
          </div>
          <Footer />
          </>
     )
}
export default Articles ;
