import "./Signup.css";
import ButtonComp from "../button_comp/ButtonComp";

function Signup() {
  return (
    <>
      <div className="root-signup-container">
        <div className="signup-container">
          <h2 className="signup-text">Sign Up</h2>
          <input type="text" name="name" id="signup-name" placeholder="full name" />
          <input type="email" name="email" id="signup-email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="signup-password"
            placeholder="password"
          />
          <input
            type="password"
            name="conform-password"
            id="singup-conform-password"
            placeholder="conform password"
          />
          <ButtonComp buttonText="Sing up" />
        </div>
      </div>
    </>
  );
}

export default Signup;
