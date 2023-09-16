import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import { useEffect, useState } from "react";
import getProductByID from "../utility/getProductByID";

function ProductCard({ productID }) {
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

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
        <img src={imgSrc} alt={title} />
        <div className={styles.productTitle}>{title}</div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  productID: PropTypes.number,
};

export default ProductCard;
