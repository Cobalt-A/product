import React, { FC } from "react";
import { Routes, Route } from "react-router";
import { lazy } from "react";
import { GeneralLayout } from "@widgets/layouts";

const ProductPage = lazy(() => import("./Product"));

const Routing: FC = () => {
  return (
    <Routes>
      <Route element={<GeneralLayout />}>
        <Route path={"/"} element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
