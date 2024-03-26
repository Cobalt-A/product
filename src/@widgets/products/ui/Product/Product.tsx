import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import React, { FC } from "react";
import styles from "./Product.module.sass";
import { Title } from "@shared/ui/Title/Title";
import { Badge } from "@shared/ui/Badge/Badge";
import { Toggle } from "@shared/ui/Toggle/Toggle";
import { Separator } from "@shared/ui/Separator/Separator";
import { Button } from "@shared/ui/Button/Button";
import { Cart } from "@shared/ui/Icons/Cart";
import { Heart } from "@shared/ui/Icons/Heart";
import { ProductHaracteristic } from "@entities/products/ui/ProductHaracteristic/ProductHaracteristic";

export const Product: FC = () => {
  return (
    <Stack className={styles["breadcrumbs"]} wrap="no-wrap" gap={32}>
      <Title>Кроссовки мужские Skechers Sunny Dale</Title>
      <Stack direction="row" gap={48}>
        <Stack gap={48}>
          <Stack direction="row" gap={48}>
            <Stack gap={32}>
              <Stack gap={24}>
                <Text color="red">166 534.00 цена без скидки</Text>
                <Title>122 566 ₽</Title>
              </Stack>
              <Stack align="center" direction="row">
                <Badge>12 штук в уп.</Badge>
                <Toggle isActive={true} />
                <Text weight={500}>Заказ упаковкой</Text>
              </Stack>
              <Separator />
              <Stack align="center" direction="row">
                <Stack gap={8} direction="column">
                  <Text weight={500}>Завтра</Text>
                  <Text color="gray-300">Доставка</Text>
                </Stack>
                <Stack gap={8} direction="column">
                  <Text weight={500}>Завтра</Text>
                  <Text color="gray-300">Доставка</Text>
                </Stack>
                <Stack gap={8} direction="column">
                  <Text weight={500}>Завтра</Text>
                  <Text color="gray-300">Доставка</Text>
                </Stack>
              </Stack>
              <Stack align="center" direction="row" gap={24}>
                <Button variant="accent-400" height={56}>
                  <Stack align="center" gap={12} direction="row">
                    <Cart />В корзину
                  </Stack>
                </Button>
                <Button variant="accent-100" height={56}>
                  <Heart />
                </Button>
              </Stack>
            </Stack>
            <Separator variant="vertical" />
            <Stack gap={32}>
              <Title>Характеристики</Title>
              <Stack direction="row" justify="space-between" wrap="wrap" gap={24}>
                <ProductHaracteristic haracteristic={{ title: "Код поставщика", value: "ELC00696" }} />
                <ProductHaracteristic haracteristic={{ title: "Код поставщика", value: "ELC00696" }} />
                <ProductHaracteristic haracteristic={{ title: "Код поставщика", value: "ELC00696" }} />
                <ProductHaracteristic haracteristic={{ title: "Код поставщика", value: "ELC00696" }} />
                <ProductHaracteristic haracteristic={{ title: "Код поставщика", value: "ELC00696" }} />
                <ProductHaracteristic haracteristic={{ title: "Код поставщика", value: "ELC00696" }} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
