import logo from '../Images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function BootNavbar(){
     return (
          <>
   <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#/"><img className='img-width-size' src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-start text-bg-dark navbar-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header" >
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Welcome</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item"  data-bs-dismiss="offcanvas">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item"  data-bs-dismiss="offcanvas"> 
            <Link className="nav-link active" to="/About">About-us</Link>
          </li>
              <li className="nav-item"   data-bs-dismiss="offcanvas">
              <Link className="nav-link active" to="/News">News</Link>
              </li>
              <li className="nav-item"   data-bs-dismiss="offcanvas">
              <Link className="nav-link active" to="/Reviews">Reviews</Link>
              </li>
              <li className="nav-item"   data-bs-dismiss="offcanvas">
              <Link className="nav-link active" to="/Articles">Articles</Link>
              </li>
              <li className="nav-item"   data-bs-dismiss="offcanvas">
              <Link className="nav-link active" to="/Future">Future</Link>
              </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
          </>
     )
}

export default BootNavbar;