import React from 'react';
import image from './download.png';
import './App.css';
import login from './login';

function App() {
  return (
    
          <div>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="signup.css" />
            <div className="container">
              <div className="container pt-3">
                <a href="https://hopin.to/">
                  <img className="mx-auto d-block" src={image} style={{height: '20%', width: '20%'}} />
                </a>
              </div>
              <div className="justify-content-center align-items-center">
                <h1 className="text-center">Sign up to get started</h1>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    Already registered?
                    <a href={"login"}>Sign in</a>
                  </p>
                </blockquote>
              </div>
              <form action="submit" method="POST">
                <div className="form-row">
                  <div className="col2">
                    <label htmlFor="exampleInputfirst">First name</label>
                    <input type="email" className="form-control form-control-lg " id="exampleInputfirst" placeholder="firstname" />
                  </div>
                  <div className="horizontalgap" style={{width: '1%'}} />
                  <div className="col4">
                    <label htmlFor="exampleInputlast">Last name</label>
                    <input type="email" className="form-control form-control-lg " id="exampleInputlast" placeholder="lastname" />
                  </div>
                </div>
                <div className="form-group w-40">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control form-control-lg " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group w-40">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group w-40 mt-4">
                  <input type="checkbox" id="terms" />
                  <span htmlFor="terms"> I agree to the <a href="#">Terms &amp; conditions</a> and the <a href="#">Privacy Policy.</a></span>
                  <input className="btn btn-primary form-control form-control-lg mt-4" type="submit" defaultValue="Sign up" />
                </div>
              </form>
              <div className="socialLogin">
                <p className="otherOptions">Or continue with</p>
                <div className="ml-n2">
                  <a className="btn btn-social-icon btn-facebook">
                    <span className="fa fa-facebook" />
                  </a>
                  <a className="btn btn-social-icon btn-linkedin">
                    <span className="fa fa-linkedin" />
                  </a>
                  <a className="btn btn-social-icon btn-google">
                    <span className="fa fa-google" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        
  );
}

export default App;
