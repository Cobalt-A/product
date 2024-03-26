import React, { FC } from "react";
import styles from "./PageLoader.module.sass";
import { Loader } from "../Loader/Loader";

export const PageLoader: FC = () => {
  return (
    <div className={styles["page-loader"]}>
      <Loader />
    </div>
  );
};
