import CartProductCard from "../components/CartProductCard";
import { getCart, setProductAmount } from "../utility/cartUtility";
import styles from "./CartPage.module.css";
import { useState } from "react";
import priceFormatter from "../utility/priceFormatter";

function CartPage() {
  const [cartObject, setCart] = useState(getCart());
  const productCount = Object.keys(cartObject).length;

  let total = 0;

  for (let productID in cartObject) {
    const product = cartObject[productID];
    total += product.quantity * product.price;
  }

  function setCartProductAmount(product) {
    return (amount) => {
      setProductAmount(product, amount);
      setCart(getCart());
    };
  }

  return (
    <>
      {productCount ? (
        <div className={styles.cartItemContainer}>
          {Object.entries(cartObject).map((cartItem) => {
            return (
              <CartProductCard
                key={cartItem[0]}
                product={cartItem[1]}
                amountSetter={setCartProductAmount(cartItem[1])}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.cartItemContainer}>No items in cart</div>
      )}
      <div className={styles.cartTotalContainer}>€{priceFormatter(total)}</div>
    </>
  );
}

export default CartPage;
