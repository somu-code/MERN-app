import "./Signup.css";

function Signup() {
  return (
    <>
      <div className="root-signup-container">
        <div className="signup-container">
          <h2 className="signup-text">Sign Up</h2>
          <input type="text" name="name" id="name" placeholder="full name" />
          <input type="email" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <input
            type="password"
            name="conform-password"
            id="conform-password"
            placeholder="conform password"
          />
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
