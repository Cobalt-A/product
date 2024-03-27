import React, { FC, useRef } from "react";
import styles from "./Slider.module.sass";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Button } from "../Button/Button";

interface SliderProps {
  slides: string[];
}

export const Slider: FC<SliderProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperRef>(null);

  const nextCallback = (): void => {
    swiperRef.current?.swiper.slideNext();
  };

  const prevCallback = (): void => {
    swiperRef.current?.swiper.slidePrev();
  };
  return (
    <div className={styles["slider-wrapper"]}>
      <Swiper
        className={styles["slider"]}
        modules={[Navigation]}
        navigation
        ref={swiperRef}
        spaceBetween={12}
        loop={true}
        slidesPerView={4}
      >
        {/* 4 слайда мало 8 самое то */}
        {[...slides, ...slides].map((slide, index) => (
          <SwiperSlide key={slide + index}>
            <img className={styles["slide__image"]} src={slide} alt="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button padding={0} variant="accent-100" className={styles["swiper-button-prev"]} onClick={prevCallback}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1_7348" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.4381 25.3333C18.0488 25.3333 17.6621 25.164 17.3981 24.836L10.9608 16.836C10.5634 16.3413 10.5688 15.6347 10.9754 15.1467L17.6421 7.14666C18.1128 6.58132 18.9541 6.50532 19.5208 6.97599C20.0861 7.44666 20.1621 8.28799 19.6901 8.85332L13.7234 16.0147L19.4768 23.164C19.9381 23.7373 19.8474 24.5773 19.2728 25.0387C19.0274 25.2373 18.7314 25.3333 18.4381 25.3333Z"
              fill="#071435"
            />
          </mask>
          <g mask="url(#mask0_1_7348)">
            <rect width="32" height="32" fill="#1551E5" />
          </g>
        </svg>
      </Button>
      <Button padding={0} variant="accent-100" className={styles["swiper-button-next"]} onClick={nextCallback}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_1_7355" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3327 25.3333C13.0313 25.3333 12.7287 25.232 12.4793 25.024C11.914 24.5533 11.838 23.712 12.3087 23.1467L18.2767 15.9853L12.5233 8.83601C12.062 8.26267 12.1527 7.42267 12.726 6.96134C13.3007 6.50001 14.1393 6.59067 14.602 7.16401L21.0393 15.164C21.4367 15.6587 21.4313 16.3653 21.0247 16.8533L14.358 24.8533C14.094 25.1693 13.7153 25.3333 13.3327 25.3333Z"
              fill="#071435"
            />
          </mask>
          <g mask="url(#mask0_1_7355)">
            <rect width="32" height="32" fill="#1551E5" />
          </g>
        </svg>
      </Button>
    </div>
  );
};
