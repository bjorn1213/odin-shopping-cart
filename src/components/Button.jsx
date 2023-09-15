function Button({ buttonText, buttonCallback }) {
  return (
    <>
      <button onClick={buttonCallback}>{buttonText}</button>
    </>
  );
}

export default Button;
