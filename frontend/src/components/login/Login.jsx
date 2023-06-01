import "./Login.css";
import { Link } from "react-router-dom";

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
          <p className="forgot-password">
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>
          <button className="signIn-button">Sing In</button>
          <p className="signup-text">
            <Link to="/signup">Don't have an account?</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
