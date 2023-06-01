import "./ButtonComp.css";

function ButtonComp({buttonText}) {
  return (
    <>
      <button className="signIn-button">{buttonText}</button>
    </>
  );
}

export default ButtonComp;