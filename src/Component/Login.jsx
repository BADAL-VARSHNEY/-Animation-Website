import { useNavigate } from 'react-router-dom';
import './Login.css';
import Nav from './Nav'
function  Login() {
  const navigate =useNavigate()

     function myFunction() {
          let x = document.getElementById("myInput");
          if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
        }
        function formHandler() {
          navigate("/Home")
        }
     return(
     <>
     <Nav />
      <div className="login-container">
          <div className='login-box'>
               <h1 className='b-set aline-set'>ACCOUNT LOGIN</h1>
               <form onSubmit={formHandler}>
                          <label className='input-name-color g-color' for="username">USERNAME *</label><br />
                          <input className='input-set bg-color' type="text" name="username" placeholder='Enter Username' required/><br/><br/>
                          <label className='input-name-color g-color' for="password">PASSWORD *</label><br />
                          <input className='input-set bg-color' id='myInput' type="password" placeholder='Password' name="password" required /><br/><br/>
                          <input className='check-set'  type="checkbox" onClick={myFunction}/> &nbsp; Show Password
                         <br /><br />
                          <input className='sub-btn' type="submit" value="Submit your request"/>
                      </form>
                        <div className='set-pass'>
                         <a href="#/">Don't have an account?</a>
                         <a href="#/">Forget password?</a>
                        </div>
          </div>
      </div>
     </>
     )
}
export default Login;