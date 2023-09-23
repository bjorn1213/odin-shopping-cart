const STORAGE_KEY = "Cart";

function saveCart(cartObject) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartObject));
}

function getCart() {
  const cartObject = localStorage.getItem(STORAGE_KEY);

  return cartObject === null ? {} : JSON.parse(cartObject);
}

function addToCart(productID) {
  const cartObject = getCart();
  if (productID in cartObject) {
    cartObject[productID] += 1;
  } else {
    cartObject[productID] = 1;
  }
  saveCart(cartObject);
}

function removeFromCart(productID) {
  const cartObject = getCart();
  if (productID in cartObject) {
    if (cartObject[productID] === 1) {
      delete cartObject[productID];
    } else {
      cartObject[productID] -= 1;
    }
  }
  saveCart(cartObject);
}

function setProductAmount(productID, amount) {
  const cartObject = getCart();
  if (!(amount >= 0 && Number.isInteger(amount))) {
    throw new Error(`Amount must be a positive integer (Received ${amount})`);
  }
  cartObject[productID] = amount;
  saveCart(cartObject);
}

function clearCart() {
  saveCart({});
}

export default {
  saveCart,
  getCart,
  addToCart,
  removeFromCart,
  setProductAmount,
  clearCart,
};
