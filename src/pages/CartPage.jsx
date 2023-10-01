import CartProductCard from "../components/CartProductCard";
import { getCart, setProductAmount } from "../utility/cartUtility";
import styles from "./CartPage.module.css";
import { useState } from "react";

function CartPage() {
  const [cartObject, setCart] = useState(getCart());

  function setProductAmount2(product) {
    return (amount) => {
      setProductAmount(product, amount);
      setCart(getCart());
    };
  }

  return (
    <>
      <div className={styles.cartItemContainer}>
        {Object.entries(cartObject).map((cartItem) => {
          return (
            <CartProductCard
              key={cartItem[0]}
              product={cartItem[1]}
              amountSetter={setProductAmount2(cartItem[1])}
            />
          );
        })}
      </div>
    </>
  );
}

export default CartPage;
