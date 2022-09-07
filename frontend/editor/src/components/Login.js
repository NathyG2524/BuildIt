import React from "react";
import './Login.scss';


function Login() {
    return (
        <div className="Login">
            <nav></nav>
             <div className="main-container">
                <div className="login-container">
                    <div className="container">
                        <form className="form">
                            <p>
                                <h8>ALREADY MEMBERS</h8>
                                <h7>Need help ?</h7><br></br><br></br>
                            </p>
                            <input type="text" id="email" placeholder="Email"></input><br></br>
                            <input type="password" id="password" placeholder="Password"></input><br></br>
                            <button name="submit">Sign In</button>
                        </form>
                    </div>
                    <div className="container-2">
                        <p>Don't have an account yet ?<br></br>
                        <a href="/signup"><span>Create an account</span></a>
                        </p>
                    </div>


                </div>
            </div>
          

        </div>
    )
}
export default Login