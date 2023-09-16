import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.css";

let productIDs = [];

for (let i = 1; i < 15; i++) {
  productIDs.push(i);
}

function ProductsPage() {
  return (
    <>
      <div className="page-content">Products Page</div>
      <div className={styles.ProductCardContainer}>
        {productIDs.map((id) => (
          <ProductCard key={id} productID={id} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
