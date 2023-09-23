import CartProductCard from "../components/CartProductCard";
import { getProductIDs } from "../utility/cartUtility";
import styles from "./CartPage.module.css";

function CartPage() {
  const productIDs = getProductIDs();
  return (
    <>
      <div className={styles.cartItemContainer}>
        {productIDs.map((productID) => (
          <CartProductCard key={productID} productID={productID} />
        ))}
      </div>
    </>
  );
}

export default CartPage;
