import { ICartProduct } from "@shared/model/types/product";

export const getCartPrice = (cartProducts: ICartProduct[]): number => {
  return cartProducts.reduce((previousValue: number, currentValue: ICartProduct) => {
    previousValue = currentValue.discountPrice
      ? previousValue + currentValue.discountPrice * currentValue.amountInCart
      : previousValue + currentValue.price * currentValue.amountInCart;
    return previousValue;
  }, 0);
};
