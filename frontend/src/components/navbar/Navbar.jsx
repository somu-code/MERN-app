import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <h1>
            <Link to="/">MERN App</Link>
          </h1>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/singup">SingUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
