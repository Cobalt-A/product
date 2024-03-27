import React, { FC, useEffect, useState } from "react";
import { Button } from "@shared/ui/Button/Button";
import { ICartProduct, IProduct } from "@shared/model/types/product";
import { productSlice } from "@entities/products";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks/redux";
import { findIndexProductInCart, findProductInCart } from "@features/products/model/utils";
import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import { declinationOfNumber } from "@shared/model/utils/general";

export interface AddProductToCartProps {
  product: IProduct;
}

export const AddProductToCart: FC<AddProductToCartProps> = ({ product }) => {
  const [counter, setCount] = useState<number>(0);
  const { setProductsCart } = productSlice.actions;
  const { productsCart } = useAppSelector((state) => state.rootReducer.productReducer);
  const dispatch = useAppDispatch();

  const addToCartClickHandler = () => {
    const newProductsCart: ICartProduct[] = JSON.parse(JSON.stringify(productsCart));
    const cartProduct = findProductInCart(newProductsCart, product);
    if (!cartProduct) {
      const newProduct: ICartProduct = JSON.parse(JSON.stringify(product));
      newProduct.amountInCart = 1;
      dispatch(setProductsCart([newProduct, ...newProductsCart]));
      return;
    }
    cartProduct.amountInCart += 1;
    dispatch(setProductsCart(newProductsCart));
  };

  const deleteFromCartClickHandler = () => {
    const newProductsCart: ICartProduct[] = JSON.parse(JSON.stringify(productsCart));
    const cartProduct = findProductInCart(newProductsCart, product);
    if (!cartProduct) return;
    if (cartProduct.amountInCart === 1) {
      const index = findIndexProductInCart(newProductsCart, product);
      newProductsCart.splice(index, 1);
      dispatch(setProductsCart(newProductsCart));
      return;
    }
    cartProduct.amountInCart -= 1;
    dispatch(setProductsCart(newProductsCart));
  };

  useEffect(() => {
    const cartProduct = findProductInCart(productsCart, product);
    if (!cartProduct) {
      setCount(0);
      return;
    }
    setCount(cartProduct.amountInCart);
  }, [product, productsCart]);

  if (counter)
    return (
      <Button width="100" as={"div"} variant="white">
        <Stack justify="space-between" align="center" direction="row">
          <Button onClick={deleteFromCartClickHandler} variant="transparent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"
                fill="currentColor"
              />
            </svg>
          </Button>
          <Text weight={500} size={16}>
            {declinationOfNumber(counter, ["Штука", "Штуки", "Штук"])}
          </Text>
          <Button onClick={addToCartClickHandler} variant="transparent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </Stack>
      </Button>
    );

  return (
    <Button align="center" width="100" variant="accent-400" onClick={addToCartClickHandler}>
      В корзину
    </Button>
  );
};
