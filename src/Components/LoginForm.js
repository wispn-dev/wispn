import React from "react";

const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
           {/* <img src= "https://i.ibb.co/DrLgHF1/w-spn.png" alt="wispnlogo" width="100"> */}
            <h1 className="login-text">Sign In</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="SIGN IN" className="login-btn" />
            <br></br>
            <h7>- OR -</h7>
            <br></br>
            <br></br>
            <input type="submit" value="LOGIN W/ GOOGLE" className="oauth-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
