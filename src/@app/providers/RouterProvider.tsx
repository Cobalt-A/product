import React, { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
