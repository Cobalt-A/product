import { ICartProduct, IProduct } from "@shared/model/types/product";

export const findProductInCart = (cart: ICartProduct[], product: IProduct): ICartProduct | undefined => {
  return cart.find((cartProduct) => cartProduct.id === product.id);
};

export const findIndexProductInCart = (cart: ICartProduct[], product: IProduct): number => {
  return cart.findIndex((cartProduct) => cartProduct.id === product.id);
};
