import React, {useEffect, useState} from "react";
import "./loginform.css"
const LoginForm = () => {
    const [popupStyle, showPopup] = useState("hide")

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn">Login</div>

            <p className="text">Or login using</p>
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
    )
}

export default LoginForm;