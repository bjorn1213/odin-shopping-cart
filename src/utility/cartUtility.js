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

function addToCart(inputProduct) {
  const productID = productIDtoString(inputProduct.id);
  const cartObject = getCart();
  if (productID in cartObject) {
    cartObject[productID].quantity += 1;
  } else {
    cartObject[productID] = { quantity: 1, ...inputProduct };
  }
  saveCart(cartObject);
}

function removeFromCart(inputProduct) {
  const productID = productIDtoString(inputProduct.id);
  const cartObject = getCart();
  if (productID in cartObject) {
    if (cartObject[productID].quantity === 1) {
      delete cartObject[productID];
    } else {
      cartObject[productID].quantity -= 1;
    }
  }
  saveCart(cartObject);
}

function setProductAmount(inputProduct, amount) {
  const productID = productIDtoString(inputProduct.id);
  const cartObject = getCart();
  if (!(amount >= 0 && Number.isInteger(amount))) {
    throw new Error(`Amount must be a positive integer (Received ${amount})`);
  }
  if (amount === 0) {
    delete cartObject[productID];
  } else if (productID in cartObject) {
    cartObject[productID].quantity = amount;
  } else {
    cartObject[productID] = { quantity: amount, ...inputProduct };
  }
  saveCart(cartObject);
}

function clearCart() {
  saveCart({});
}

function getAmount(inputProductID) {
  const cartObject = getCart();
  const productID = productIDtoString(inputProductID);
  return productID in cartObject ? +cartObject[productID].quantity : 0;
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
