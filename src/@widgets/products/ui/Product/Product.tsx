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
import { AddProductToCart } from "@features/products/ui/AddProductToCart/AddProductToCart";
import { useAppSelector } from "@shared/lib/hooks/redux";
import { Loader } from "@shared/ui/Loader/Loader";
import { formatPrice } from "@shared/model/utils";

export const Product: FC = () => {
  const { product } = useAppSelector((state) => state.rootReducer.productReducer);

  if (!product) return <Loader />;

  return (
    <Stack className={styles["product"]} wrap="no-wrap" gap={32}>
      <Title>Кроссовки мужские Skechers Sunny Dale</Title>
      <Stack wrap="no-wrap" direction="row" gap={48}>
        <div className={styles["slider-wrapper"]}>
          <DoubleSlider slides={slides} />
        </div>
        <Stack className={styles["product__content"]} gap={48}>
          <Stack direction="row" gap={48}>
            <Stack gap={32}>
              <Stack gap={24}>
                <Text color="red">{formatPrice(product.price)} цена без скидки</Text>
                <Title>{formatPrice(product.discountPrice)}</Title>
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
            <Title>Описание товара</Title>
            <Text>
              Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR
              существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет
              возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что
              коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
              экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано.
              Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
