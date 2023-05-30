import "./Singup.css";

function Singup() {
  return (
    <>
      <div className="root-singup-container">
        <div className="singup-container">
          <h2 className="singup-text">Sing Up</h2>
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
          <button className="singup-button">Sing Up</button>
        </div>
      </div>
    </>
  );
}

export default Singup;
