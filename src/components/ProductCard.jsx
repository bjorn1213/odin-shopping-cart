import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <>
      <div>
        <img src={product.image} alt={product.title} />
        <div className={styles.productTitle}>{product.title}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default ProductCard;
