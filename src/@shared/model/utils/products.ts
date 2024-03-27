export const formatPrice = (price: number, maximumFractionDigits: number) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    maximumFractionDigits: maximumFractionDigits,
    currency: "RUB",
  })
  .format(price)
  .replaceAll(",", ".")
  .replaceAll("₽", "");
};

console.log(formatPrice(12312312, 2));
