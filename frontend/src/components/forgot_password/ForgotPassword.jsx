import "./ForgotPassword.css";
import ButtonComp from "../button_comp/ButtonComp";

function ForgotPassword() {
    return (
        <>
        <div className="root-forgot-password-container">
            <div className="forgot-password-container">
                <h2 className="forgot-password-text">Forgot Password?</h2>
                <input type="email" name="email" id="" placeholder="email" />
                <ButtonComp buttonText = "Send reset email" />
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;