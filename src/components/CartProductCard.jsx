import PropTypes from "prop-types";
import styles from "./CartProductCard.module.css";
import { useEffect, useState } from "react";
import getProductByID from "../utility/getProductByID";
import Button from "./Button";
import { getAmount, setProductAmount } from "../utility/cartUtility";

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
        <div className={styles.productTitle}>{title}</div>
        <div>{price}</div>
        <div>{1}</div>
        <div className={styles.cartControls}>
          <Button buttonText={"-"} buttonCallback={removeProduct}></Button>
          {curAmount}
          <Button buttonText={"+"} buttonCallback={addProduct}></Button>
        </div>
        <div>{`€${price * curAmount}`}</div>
      </div>
    </>
  );
}

CartProductCard.propTypes = {
  productID: PropTypes.number,
};

export default CartProductCard;