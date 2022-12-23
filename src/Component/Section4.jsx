import './Section4.css';
import boy from '../Images/boy.jpg';
import boy1 from '../Images/boy1.jpg';
import boy3 from '../Images/boy3.jpg';
import girl from '../Images/girl.jpg';
import 'aos/dist/aos.css';

function Section4(){
  
     return (
          <>
               <div className="section4">
                    <h1 className="head13" data-aos="fade-up-right">Read what our customers say</h1>
                    <div className="four-boxs">
                         <div className="boxe" data-aos="flip-right">
                         <img className='coll-img'  src={boy} alt="jpg" />
                         <p className='paragrap6'>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.
                        </p>
                        <h4 className="head14">Jonh Almeda</h4>
                        <p className='paragrap6'>CEO Company</p>
                         </div>
                         <div className="boxe" data-aos="slide-down">
                         <img  className='coll-img' src={boy1} alt="jpg" />
                         <p className='paragrap6'>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.
                        </p>
                        <h4 className="head14">Frank Kinney</h4>
                        <p className='paragrap6'>Finacial Director</p>
                       </div>
                       </div>
                        <div className='four-boxs'>
                         <div className="boxe" data-aos="slide-up">
                         <img  className='coll-img' src={girl} alt="jpg" />
                         <p className='paragrap6'>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.
                        </p>
                        <h4 className="head14">Stella Larson</h4>
                        <p className='paragrap6'>Secretary</p>
                         </div>
                         <div className="boxe" data-aos="slide-right">
                         <img  className='coll-img' src={boy3} alt="jpg" />
                         <p className='paragrap6'>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl.
                        </p>
                        <h4 className="head14">Paul Smith</h4>
                        <p className='paragrap6'>Sales Manager</p>
                         </div>
                     </div>
               </div>
          </>
     )
}
export default Section4;