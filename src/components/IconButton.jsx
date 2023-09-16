import PropTypes from "prop-types";

function IconButton({ iconSrc, buttonCallback }) {
  return (
    <>
      <button onClick={buttonCallback}>
        <img src={iconSrc}></img>
      </button>
    </>
  );
}

IconButton.propTypes = {
  iconSrc: PropTypes.string,
  buttonCallback: PropTypes.func,
};

export default IconButton;
