import PropTypes from "prop-types";
import styles from "./CartProductCard.module.css";
import Button from "./Button";
import priceFormatter from "../utility/priceFormatter";

function CartProductCard({ product, amountSetter }) {
  function addProduct() {
    amountSetter(product.quantity + 1);
  }

  function removeProduct() {
    if (product.quantity > 0) {
      amountSetter(product.quantity - 1);
    }
  }

  return (
    <>
      <div className={styles.productCard}>
        <img
          className={styles.productImg}
          src={product.image}
          alt={product.title}
        />
        <div className={styles.middleSection}>
          <div className={styles.productTitle}>{product.title}</div>
          {product.price ? (
            <div className={styles.itemPrice}>
              €{priceFormatter(product.price)}
            </div>
          ) : (
            <></>
          )}
        </div>
        {product.price ? (
          <div className={styles.rightSection}>
            <div className={styles.cartControls}>
              <div className={styles.itemAmount}>x {product.quantity}</div>
              <Button buttonText={"+"} buttonCallback={addProduct}></Button>
              <Button buttonText={"-"} buttonCallback={removeProduct}></Button>
            </div>
            <div className={styles.itemTotal}>{`€${priceFormatter(
              product.price * product.quantity
            )}`}</div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

CartProductCard.propTypes = {
  product: PropTypes.object,
  amountSetter: PropTypes.func,
};

export default CartProductCard;
