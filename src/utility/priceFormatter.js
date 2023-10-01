export default function priceFormatter(price) {
  const eurFormat = Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  });
  return eurFormat.format(Number.parseFloat(price));
}
