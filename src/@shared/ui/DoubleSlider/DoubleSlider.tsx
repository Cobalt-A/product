import React, { FC } from "react";
import styles from "./DoubleSlider.module.sass";
import { Stack } from "../Stack/Stack";
import { Slider } from "../Slider/Slider";

interface DoubleSliderProps {
  slides: string[];
}

export const DoubleSlider: FC<DoubleSliderProps> = ({ slides }) => {
  return (
    <Stack className={styles["double-slider"]} gap={24}>
      <div className={styles["current-slider-image-wrapper"]}>
        {/* можно было бы добавить главное изображения в зависимости от currentSlide но остальные изображения 64x64 шакала */}
        <img className={styles["current-slider-image"]} src={"./images/img.jpg"} alt="slide" />
      </div>
      <Slider slides={slides} />
    </Stack>
  );
};
