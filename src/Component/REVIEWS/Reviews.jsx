import BootNavbar from '../BootNavbar';
import './Reviews.css';
import Footer from '../Footer'
import Nav from '../Nav';
import lap from '../../Images/laptop-cup.jpg';
import 'aos/dist/aos.css';

function Reviews() {
     return (
          <>
               <Nav />
               <BootNavbar />
               <div className='reviews-container'>
                    <div className='container1'>
                         <img className='reviews-img' data-aos="slide-right" src={lap} alt="jpg" />
                    </div>
                    <div className='container2'>
                    <br />
                    <div className='flex-dir'>
                         <h5 data-aos="slide-right" className='golden-color'>Create a Webinar in Minutes</h5><i className="fa-solid fa-circle-plus set-color"></i>
                         </div>
                         <br />
                         <br />
                         <h3 data-aos="slide-down">Interdum velit euismod in pellentesque massa placerat duis. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Nibh nisl condimentum.
                         </h3>
                         <br />
                         <h6 data-aos="slide-up">–Mattis nunc sed blandit libero volutpat.</h6>
                         
                         <h6 data-aos="slide-down">–Tortor at risus viverra adipiscing at in tellus.</h6>
                         
                         <h6 data-aos="slide-down">–Purus ut faucibus pulvinar elementum.</h6>
                         
                         <h6 data-aos="slide-up">–Blandit turpis cursus in hac habitasse.</h6>
                         <br /><br />
                         <div className='flex-dir'>
                         <h5 data-aos="slide-right" className='golden-color'> Business Sustainability Management</h5><i className="fa-solid fa-circle-plus set-color"></i>
                         </div>
                         <br />
                         <div className='flex-dir'>
                         <h5 data-aos="slide-down" className='golden-color'> Learn how to grow your business</h5><i className="fa-solid fa-circle-plus set-color"></i>
                         </div>
                         <br />
                         <div className='flex-dir'>
                         <h5 data-aos="slide-up" className='golden-color'> Practical tips to help you price your products</h5><i className="fa-solid fa-circle-plus set-color"></i>
                         </div>
                         <br />
                         
                    </div>
               </div>
               <Footer />
          </>
     )
}
export default Reviews;