import React from 'react'
import './Login.scss';

function Signup() {
  return (
    <div className="Login">
            <nav></nav>
             <div className="main-container">
                <div className="login-container">
                    <div className="container">
                        <form className="form">
                            <p>
                                <h8>NOT A MEMBER</h8>
                                <h7>Need help ?</h7><br></br><br></br>
                            </p>
                            <input type="text" id="email" placeholder="Email"></input><br></br>
                            <input type="password" id="password" placeholder="Password"></input><br></br>
                            <input type="password" id="password" placeholder="Confirm Password"></input><br></br>
                            <button name="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="container-2">
                        <p>Already have an account ?<br></br>
                        <a href="/login"><span>Login Here</span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Signup