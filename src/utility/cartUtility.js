import { string } from "prop-types";

const STORAGE_KEY = "Cart";

function productIDtoString(productID) {
  return `${productID}`;
}

function saveCart(cartObject) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartObject));
}

function getCart() {
  const cartObject = localStorage.getItem(STORAGE_KEY);

  return cartObject === null ? {} : JSON.parse(cartObject);
}

function addToCart(inputProductID) {
  const productID = productIDtoString(inputProductID);
  const cartObject = getCart();
  if (productID in cartObject) {
    cartObject[productID] += 1;
  } else {
    cartObject[productID] = 1;
  }
  saveCart(cartObject);
}

function removeFromCart(inputProductID) {
  const productID = productIDtoString(inputProductID);
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

function setProductAmount(inputProductID, amount) {
  const productID = productIDtoString(inputProductID);
  const cartObject = getCart();
  if (!(amount >= 0 && Number.isInteger(amount))) {
    throw new Error(`Amount must be a positive integer (Received ${amount})`);
  }
  if (amount === 0) {
    removeFromCart(inputProductID);
  } else {
    cartObject[productID] = amount;
    saveCart(cartObject);
  }
}

function clearCart() {
  saveCart({});
}

function getAmount(inputProductID) {
  const cartObject = getCart();
  const productID = productIDtoString(inputProductID);
  return productID in cartObject ? +cartObject[productID] : 0;
}

function getProductIDs() {
  const stringProductIDs = Object.keys(getCart());
  return stringProductIDs.map((sID) => +sID);
}

export {
  saveCart,
  getCart,
  addToCart,
  removeFromCart,
  setProductAmount,
  clearCart,
  getAmount,
  getProductIDs,
};
