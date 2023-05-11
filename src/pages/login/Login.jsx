import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebookclone</h3>
          <span className="loginDesc">
            Connect with the friends and the world around you on Facebookclone
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="Email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">Create an account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
