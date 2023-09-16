import PropTypes from "prop-types";

function Button({ buttonText, buttonCallback }) {
  return (
    <>
      <button onClick={buttonCallback}>{buttonText}</button>
    </>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonCallback: PropTypes.func,
};

export default Button;
