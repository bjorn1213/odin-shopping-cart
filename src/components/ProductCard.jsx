import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import getProductByID from "../utility/getProductByID";
import Button from "./Button";
import { getAmount, setProductAmount } from "../utility/cartUtility";

function ProductCard({ productID }) {
  const [product, setProduct] = useState(null);

  const [curAmount, setAmount] = useState(getAmount(productID));

  function addProduct() {
    setProductAmount(product, curAmount + 1);
    setAmount(curAmount + 1);
  }

  function removeProduct() {
    if (curAmount > 0) {
      setProductAmount(product, curAmount - 1);
      setAmount(curAmount - 1);
    }
  }

  useEffect(() => {
    const product = getProductByID(productID);
    product.then((prod) => {
      setProduct(prod);
    });
  }, [productID]);

  return (
    <>
      {product ? (
        <div className={styles.productCard}>
          <img
            className={styles.productImg}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.productTitle}>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div className={styles.cartControls}>
            <Button buttonText={"-"} buttonCallback={removeProduct} />
            {curAmount}
            <Button buttonText={"+"} buttonCallback={addProduct} />
          </div>
        </div>
      ) : (
        <div>loading..</div>
      )}
    </>
  );
}

ProductCard.propTypes = {
  productID: PropTypes.number,
};

export default ProductCard;
