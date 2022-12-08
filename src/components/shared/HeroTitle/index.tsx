import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { isBrowser } from '../../../utils/isBrowser';
import { ColorSet } from './useSlidesColors';
import { TitleItem } from '../../pageSections/Hero';

import 'swiper/css';
import * as styles from './index.module.scss';

interface SlidingHeroTitleProps {
    title: TitleItem;
    swiperCommonProps: SwiperProps;
    upperSwiperProps: SwiperProps;
    middleSwiperProps: SwiperProps;
    lowerSwiperProps: SwiperProps;
    slidesColors: ColorSet;
    className?: string;
    isEnglish?: boolean;
}

const calcIsMobile = () =>
    isBrowser() && window.matchMedia(`(max-width: 992px)`).matches;

const middleSlidesMarginDictionary = {
    ru: [
        styles.smallOffsetRight,
        styles.middleOffsetRight,
        styles.center,
        styles.center,
        styles.bigOffsetRight,
    ],
    en: [
        styles.center,
        styles.center,
        styles.bigOffsetLeft,
        styles.center,
        styles.center,
    ],
};

const HeroTitle: React.FC<SlidingHeroTitleProps> = ({
    title,
    swiperCommonProps,
    upperSwiperProps,
    middleSwiperProps,
    lowerSwiperProps,
    slidesColors,
    className,
    isEnglish = false,
}) => {
    const [isMobileView, setIsMobileView] = useState(calcIsMobile());

    const handleResize = useCallback(() => {
        setIsMobileView(calcIsMobile());
    }, [calcIsMobile]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const slidersDirection = isMobileView ? 'horizontal' : 'vertical';

    const calcMiddleSwiperMarginClasses = (i: number, isEnglish?: boolean) => {
        if (isMobileView) return '';

        if (isEnglish) {
            return middleSlidesMarginDictionary.en[i];
        } else {
            return middleSlidesMarginDictionary.ru[i];
        }
    };

    return (
        <h1 className={cn(styles.headline, 'h1', className)}>
            <Swiper
                {...swiperCommonProps}
                {...upperSwiperProps}
                direction={slidersDirection}
                allowTouchMove={false}
                className={cn(styles.slider, upperSwiperProps.className, {
                    [styles.sliderEn]: isEnglish,
                })}
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
                className={cn(styles.slider, middleSwiperProps.className, {
                    [styles.sliderEn]: isEnglish,
                })}
            >
                {title.line2.map((name, i) => (
                    <SwiperSlide
                        key={name}
                        className={cn(
                            styles.slide,
                            styles.secondLine,
                            calcMiddleSwiperMarginClasses(i, isEnglish),
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
                className={cn(
                    styles.slider,
                    styles.thirdLine,
                    lowerSwiperProps.className,
                    {
                        [styles.sliderEn]: isEnglish,
                    }
                )}
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
