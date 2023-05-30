import "./Login.css";

function Login() {
  return (
    <>
      <div className="root-login-container">
        <div className="login-container">
          <h2 className="login-text">Login</h2>
          <input type="email" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <p className="forgot-password">Forgot your password?</p>
          <button className="singIn-button">Sing In</button>
        </div>
      </div>
    </>
  );
}

export default Login;
