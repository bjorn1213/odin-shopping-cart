import PropTypes from "prop-types";
import styles from "./CartProductCard.module.css";
import { useEffect, useState } from "react";
import getProductByID from "../utility/getProductByID";
import Button from "./Button";
import { getAmount, setProductAmount } from "../utility/cartUtility";
import priceFormatter from "../utility/priceFormatter";

function CartProductCard({ productID }) {
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [curAmount, setAmount] = useState(getAmount(productID));

  function addProduct() {
    setProductAmount(productID, curAmount + 1);
    setAmount(curAmount + 1);
  }

  function removeProduct() {
    if (curAmount > 0) {
      setProductAmount(productID, curAmount - 1);
      setAmount(curAmount - 1);
    }
  }

  useEffect(() => {
    const product = getProductByID(productID);
    product.then((prod) => {
      setImgSrc(prod.image);
      setTitle(prod.title);
      setPrice(prod.price);
      setDescription(prod.description);
    });
  }, [productID]);

  return (
    <>
      <div className={styles.productCard}>
        <img className={styles.productImg} src={imgSrc} alt={title} />
        <div className={styles.middleSection}>
          <div className={styles.productTitle}>{title}</div>
          {price ? (
            <div className={styles.itemPrice}>€{priceFormatter(price)}</div>
          ) : (
            <></>
          )}
        </div>
        {price ? (
          <div className={styles.rightSection}>
            <div className={styles.cartControls}>
              <div className={styles.itemAmount}>x {curAmount}</div>
              <Button buttonText={"+"} buttonCallback={addProduct}></Button>
              <Button buttonText={"-"} buttonCallback={removeProduct}></Button>
            </div>
            <div className={styles.itemTotal}>{`€${priceFormatter(
              price * curAmount
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
  productID: PropTypes.number,
};

export default CartProductCard;
