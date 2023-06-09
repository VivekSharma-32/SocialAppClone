import "./register.css";

const Register = () => {
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
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Signup</button>
            <button className="loginRegisterButton">
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
