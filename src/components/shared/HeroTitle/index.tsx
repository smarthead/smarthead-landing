import React from 'react';
import cn from 'classnames';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { ColorSet } from './useSlidesColors';
import { TitleItem } from '../../pageSections/HeroRu';
import 'swiper/css';
import * as styles from './index.module.scss';

interface SlidingHeroTitleProps {
    title: TitleItem;
    swiperCommonProps: SwiperProps;
    upperSwiperProps: SwiperProps;
    middleSwiperProps: SwiperProps;
    lowerSwiperProps: SwiperProps;
    slidesColors: ColorSet;
}

const HeroTitle: React.FC<SlidingHeroTitleProps> = ({
    title,
    swiperCommonProps,
    upperSwiperProps,
    middleSwiperProps,
    lowerSwiperProps,
    slidesColors,
}) => {
    const isMobileView =
        typeof window !== 'undefined' &&
        window.matchMedia(`(max-width: 992px)`).matches;

    const slidersDirection = isMobileView ? 'horizontal' : 'vertical';

    const calcMiddleSwiperMarginClasses = (i: number) => ({
        [styles.smallOffsetRight]: i === 0 && !isMobileView,
        [styles.middleOffsetRight]: i === 1 && !isMobileView,
        [styles.center]: (i === 2 || i === 3) && !isMobileView,
        [styles.bigOffsetRight]: i === 4 && !isMobileView,
    });

    return (
        <h1 className={cn(styles.headline, 'h1')}>
            <Swiper
                {...swiperCommonProps}
                {...upperSwiperProps}
                direction={slidersDirection}
                allowTouchMove={false}
                className={cn(styles.slider, upperSwiperProps.className)}
            >
                {title.line1.map((name) => (
                    <SwiperSlide
                        className={cn(styles.slide, slidesColors.upper)}
                        key={name}
                    >
                        {name}
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                {...swiperCommonProps}
                {...middleSwiperProps}
                direction={slidersDirection}
                className={cn(styles.slider, middleSwiperProps.className)}
            >
                {title.line2.map((name, i) => (
                    <SwiperSlide
                        key={name}
                        className={cn(
                            styles.slide,
                            styles.secondLine,
                            calcMiddleSwiperMarginClasses(i),
                            slidesColors.middle
                        )}
                    >
                        {name}
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                {...swiperCommonProps}
                {...lowerSwiperProps}
                direction={slidersDirection}
                className={cn(styles.slider, lowerSwiperProps.className, {
                    [styles.twoLinesSlider]: isMobileView,
                })}
            >
                {title.line3.map((name) => (
                    <SwiperSlide
                        className={cn(styles.slide, slidesColors.lower)}
                        key={name}
                    >
                        {name}
                    </SwiperSlide>
                ))}
            </Swiper>
        </h1>
    );
};

export default HeroTitle;
