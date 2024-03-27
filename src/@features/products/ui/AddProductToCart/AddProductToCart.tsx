import React, { FC, useEffect, useState } from "react";
import { Button } from "@shared/ui/Button/Button";
import { ICartProduct, IProduct } from "@shared/model/types/product";
import { productSlice } from "@entities/products";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks/redux";
import { findIndexProductInCart, findProductInCart } from "@features/products/model/utils";
import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";

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
            -
          </Button>{" "}
          <Text>{counter} Штуки</Text>{" "}
          <Button onClick={addToCartClickHandler} variant="transparent">
            +
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
