import { fetchProduct } from "@entities/products";
import { useAppDispatch } from "@shared/lib/hooks/redux";
import { Product } from "@widgets/products";
import React, { FC, Fragment, useEffect } from "react";

export const ProductPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <Product />
    </Fragment>
  );
};
