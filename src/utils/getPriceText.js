export default function getPriceText(price) {
  return price === 0 ? '免費' : `$${price}`;
}
