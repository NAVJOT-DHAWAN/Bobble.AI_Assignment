import React from 'react';
//import './login.css';

function login() {
    return (
        
            <div>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <link rel="stylesheet" href="login.css" />
              <div className="container">
                <div className="container pt-3">
                  <a href="https://hopin.to/">
                    <img className="mx-auto d-block" src="download.png" style={{height: '20%', width: '20%'}} />
                  </a>
                </div>
                <div className="justify-content-center align-items-center">
                  <h1 className="text-center">Welcome back!</h1>
                  <blockquote className="blockquote text-center">
                    <p className="mb-0">
                      Sign in to access your account. Not registered?
                      <a href="signup.html">Create an account</a>
                    </p>
                  </blockquote>
                </div>
                <form method="POST" action="submit" className="myform w-40">
                  <div className="form-group w-40">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control form-control-lg " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group w-40">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group w-40 mt-3">
                    <p className="small"><a href="#">Forgot your password?</a></p>
                    <input className="btn btn-primary form-control form-control-lg" type="submit" defaultValue="Sign in" />
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

export default login;