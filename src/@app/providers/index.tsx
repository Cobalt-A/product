import React, { FC, ReactNode } from "react";
import { RouterProvider } from "./RouterProvider";
import { StoreProvider } from "./StoreProvider";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <StoreProvider>
      <RouterProvider>{children}</RouterProvider>
    </StoreProvider>
  );
};
