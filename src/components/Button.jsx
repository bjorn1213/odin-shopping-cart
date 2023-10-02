import PropTypes from "prop-types";
import buttonStyle from "./Button.module.css";

function Button({ buttonText, buttonCallback }) {
  return (
    <>
      <button className={buttonStyle.buttonStyled} onClick={buttonCallback}>
        {buttonText}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonCallback: PropTypes.func,
};

export default Button;
