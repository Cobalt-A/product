import { Stack } from "@shared/ui/Stack/Stack";
import { Text } from "@shared/ui/Text/Text";
import React, { FC } from "react";
import styles from "./Product.module.sass";
import { Title } from "@shared/ui/Title/Title";
import { Badge } from "@shared/ui/Badge/Badge";
import { Toggle } from "@shared/ui/Toggle/Toggle";
import { Separator } from "@shared/ui/Separator/Separator";
import { Button } from "@shared/ui/Button/Button";
import { Heart } from "@shared/ui/Icons/Heart";
import { DoubleSlider } from "@shared/ui/DoubleSlider/DoubleSlider";
import { slides } from "@widgets/products/config/consts";
import { AddProductToCart } from "@features/products";
import { useAppSelector } from "@shared/lib/hooks/redux";
import { Loader } from "@shared/ui/Loader/Loader";
import { formatPrice } from "@shared/model/utils/products";

export const Product: FC = () => {
  const { product } = useAppSelector((state) => state.rootReducer.productReducer);

  if (!product) return <Loader />;

  return (
    <Stack className={styles["product"]} wrap="no-wrap" gap={32}>
      <Title size={32} weight={500} font="gotham-pro">
        {product.name}
      </Title>
      <Stack wrap="no-wrap" direction="row" gap={48}>
        <div className={styles["slider-wrapper"]}>
          <DoubleSlider slides={slides} />
        </div>
        <Stack className={styles["product__content"]} gap={48}>
          <Stack direction="row" gap={48}>
            <Stack gap={32}>
              <Stack gap={24}>
                <Text font="gotham-pro" weight={500} color="red">
                  {formatPrice(product.price, 2).normalize("NFKD")} цена без скидки
                </Text>
                <Stack width="auto" direction="row" gap={16} align="center">
                  <Title font="gotham-pro" size={32} weight={700}>
                    {formatPrice(product.discountPrice, 0).normalize("NFKD")}
                    <Title font="sans-serif" size={32} weight={700} as={"span"}>
                      ₽
                    </Title>
                  </Title>
                  <Badge variant="red">-15%</Badge>
                </Stack>
              </Stack>
              <Stack gap={12} align="center" direction="row">
                <Badge>12 штук в уп.</Badge>
                <Toggle isActive={true} />
                <Text weight={500}>Заказ упаковкой</Text>
              </Stack>
              <Separator />
              <Stack align="center" direction="row">
                <Stack gap={8} direction="column">
                  <Text weight={700}>Завтра</Text>
                  <Text size={12} color="gray-300">
                    Доставка
                  </Text>
                </Stack>
                <Stack gap={8} direction="column">
                  <Text weight={700}>Завтра</Text>
                  <Text size={12} color="gray-300">
                    Доставка
                  </Text>
                </Stack>
                <Stack gap={8} direction="column">
                  <Text weight={700}>Завтра</Text>
                  <Text size={12} color="gray-300">
                    Доставка
                  </Text>
                </Stack>
              </Stack>
              <Stack align="center" direction="row" gap={16}>
                <AddProductToCart product={product} />
                <Button variant="accent-100" height={56}>
                  <Heart />
                </Button>
              </Stack>
            </Stack>
            <Separator variant="vertical" />
            <Stack gap={32}>
              <Title>Характеристики</Title>
              <Stack direction="row" justify="space-between" wrap="wrap" gap={24}>
                {product.haracteristic.map((haracteristic) => (
                  <Stack key={haracteristic.name} className={styles["product__haracteristic"]} gap={12}>
                    <Text weight={700}>{haracteristic.value}</Text>
                    <Text color="gray-300" size={12}>
                      {haracteristic.name}
                    </Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={24}>
            <Title size={24} weight={500}>
              Описание товара
            </Title>
            <Text size={18}>{product.description}</Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
