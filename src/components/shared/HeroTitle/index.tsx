import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { checkIsMobileView } from '../../../utils/checkIsMobileVIew';

import { ColorSet } from './utils/useSlidesColors';
import { TitleItem } from '../../pageSections/Hero';

import { calcMiddleLineSlideMargins, splitToSeveralLines } from './utils';

import 'swiper/css';
import * as styles from './index.module.scss';

const addWeWordToStartOfString = (str: string) => `We ${str}`;

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
    const [isMobileView, setIsMobileView] = useState(checkIsMobileView());

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(checkIsMobileView());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [checkIsMobileView]);

    const slidersDirection = isMobileView ? 'horizontal' : 'vertical';
    const spaceBetweenSlides = slidersDirection === 'vertical' ? 25 : undefined;
    const isSlideWithWeWord = isEnglish && isMobileView;

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
                {isEnglish && !isMobileView && <span>We&nbsp;</span>}
                <Swiper
                    {...swiperCommonProps}
                    {...upperSwiperProps}
                    direction={slidersDirection}
                    className={cn(styles.slider, upperSwiperProps.className, {
                        [styles.sliderEn]: isEnglish,
                    })}
                    spaceBetween={spaceBetweenSlides}
                >
                    {title.line1.map((name) => (
                        <SwiperSlide
                            className={cn(styles.slide, slidesColors.upper)}
                            key={name}
                        >
                            {isSlideWithWeWord
                                ? addWeWordToStartOfString(name)
                                : name}
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
                spaceBetween={spaceBetweenSlides}
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
                spaceBetween={spaceBetweenSlides}
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
