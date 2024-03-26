import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import React, { FC } from "react";
import styles from "./ProductHaracteristic.module.sass";

export interface IHaracteristic {
  title: string;
  value: string;
}

interface ProductHaracteristicProps {
  haracteristic: IHaracteristic;
}

export const ProductHaracteristic: FC<ProductHaracteristicProps> = ({ haracteristic }) => {
  return (
    <Stack className={styles["product"]} gap={12}>
      <Text weight={700}>{haracteristic.value}</Text>
      <Text color="gray-300" size={12}>
        {haracteristic.title}
      </Text>
    </Stack>
  );
};
