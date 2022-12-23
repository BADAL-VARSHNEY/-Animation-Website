import './Section1.css';
import 'aos/dist/aos.css';

function Section1(){
     return (
          <>
          <div className='main-section'>
               <h1 className='head2' data-aos="slide-down">We advise leaders on strategy, <br /> marketing, organization, <br /> operations </h1>
               <br />
               <div className='contain-box'>
               <div className='contain-left'>
                      <div className='box' data-aos="slide-down">
                         <h1 className='head3'>Friendly 24/7 customer service</h1>
                         <p className='paragrap'>Sample text. Click to select the text box.Click again or double click to start editingthe text.</p>
                         <a className='ancer-black ' href="#/">More</a>
                      </div>
                      <div style={{backgroundColor: '#58bfe7' , color: 'white'}} className='box' data-aos="slide-right">
                      <h1 className='head3'>No time windows, book when you want</h1>
                         <p className='paragrap'>Sample text. Click to select the text box.Click again or double click to start editingthe text.</p>
                         <a className='ancer-white' href="#/">More</a>
                      </div>
                      </div>
                      <div className='contain-right'>
                      <div style={{backgroundColor: '#E33F1F', color:'white'}} className='box' data-aos="slide-up">
                      <h1 className='head3'>Affordable, upfront pricing</h1>
                         <p className='paragrap'>Sample text. Click to select the text box.Click again or double click to start editingthe text.</p>
                         <a className='ancer-white' href="#/">More</a>
                      </div>
                      <div className='box' data-aos="slide-right">
                      <h1 className='head3'>Vetted and screened professionals</h1>
                         <p className='paragrap'>Sample text. Click to select the text box.Click again or double click to start editingthe text.</p>
                         <a className='ancer-black' href="#/">More</a>
                      </div>
                      </div>
               </div>
          </div>
          </>
     )
}

export default Section1;