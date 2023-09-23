import CartProductCard from "../components/CartProductCard";
import { getProductIDs } from "../utility/cartUtility";

function CartPage() {
  const productIDs = getProductIDs();
  return (
    <>
      {productIDs.map((productID) => (
        <CartProductCard key={productID} productID={productID} />
      ))}
    </>
  );
}

export default CartPage;
