async function getProductByID(productID) {
  const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
  const product = await res.json();
  return product;
}

export default getProductByID;
