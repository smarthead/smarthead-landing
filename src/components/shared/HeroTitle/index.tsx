import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import { ColorSet } from './utils/useSlidesColors';
import { TitleItem } from '../../pageSections/Hero';

import {
    calcMiddleLineSlideMargins,
    calcIsMobile,
    splitToSeveralLines,
} from './utils';

import 'swiper/css';
import * as styles from './index.module.scss';

interface UpperSwiperProps extends SwiperProps {
    wrapClassName?: string;
}

interface SlidingHeroTitleProps {
    title: TitleItem;
    swiperCommonProps: SwiperProps;
    upperSwiperProps: UpperSwiperProps;
    middleSwiperProps: SwiperProps;
    lowerSwiperProps: SwiperProps;
    slidesColors: ColorSet;
    className?: string;
    isEnglish?: boolean;
}

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

    return (
        <h1
            className={cn(
                styles.headline,
                'h1',
                {
                    [styles.headlineEn]: isEnglish,
                },
                className
            )}
        >
            <div
                className={cn(
                    styles.firstLineWrap,
                    styles.zeroOpacity,
                    upperSwiperProps.wrapClassName
                )}
            >
                {isEnglish && <span>We&nbsp;</span>}
                <Swiper
                    {...swiperCommonProps}
                    {...upperSwiperProps}
                    direction={slidersDirection}
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
            </div>

            <Swiper
                {...swiperCommonProps}
                {...middleSwiperProps}
                direction={slidersDirection}
                className={cn(
                    styles.slider,
                    styles.zeroOpacity,
                    middleSwiperProps.className,
                    {
                        [styles.sliderEn]: isEnglish,
                    }
                )}
            >
                {title.line2.map((name, i) => (
                    <SwiperSlide
                        key={name}
                        className={cn(
                            styles.slide,
                            styles.secondLine,
                            calcMiddleLineSlideMargins({
                                index: i,
                                isMobileView,
                                isEnglish,
                            }),
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
                    styles.zeroOpacity,
                    styles.thirdLine,
                    lowerSwiperProps.className,
                    {
                        [styles.sliderEn]: isEnglish,
                        [styles.thirdLineEn]: isEnglish,
                    }
                )}
            >
                {title.line3.map((name) => (
                    <SwiperSlide
                        className={cn(
                            styles.slide,
                            slidesColors.lower,
                            styles.flexColumn
                        )}
                        key={name}
                    >
                        {isMobileView ? splitToSeveralLines(name) : name}
                    </SwiperSlide>
                ))}
            </Swiper>
        </h1>
    );
};

export default HeroTitle;
