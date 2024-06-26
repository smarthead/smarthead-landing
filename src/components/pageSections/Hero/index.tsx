import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { navigation } from '../../shared/navigation';
import { arrayToString } from '../../../utils/arrayToString';

import HeroHeader from '../../shared/HeroHeader';
import HeroTitle from '../../shared/HeroTitle';
import ButtonLink from '../../shared/ButtonLink';
import { useSlidesColors } from '../../shared/HeroTitle/utils';
import { Container } from '../../shared/Container';
import { useIsHeroFontsLoaded } from './utils/useIsHeroFontsLoaded';
import { useHeroResize } from './utils/useHeroResize';
import { useHeroAnimation } from './utils/useHeroAnimation';

import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import * as styles from './index.module.scss';

export type SwiperInstanceRef = null | SwiperType;

export interface TitleItem {
    [key: string]: string[];
}

export interface Item {
    [key: string]: string;
}

export interface HeroData {
    title: TitleItem;
    subtitle: string[];
    button: string;
    header: {
        menu: Item[];
    };
}

export interface IHero {
    data: HeroData;
    isEnglish?: boolean;
    handleHeroScreenHeight: (height: number) => void;
}

const HeroComponent: React.FC<IHero> = ({
    data,
    isEnglish,
    handleHeroScreenHeight,
}) => {
    gsap.registerPlugin(ScrollTrigger);

    const [upperSwiper, setUpperSwiper] = useState<SwiperInstanceRef>(null);
    const [middleSwiper, setMiddleSwiper] = useState<SwiperInstanceRef>(null);
    const [lowerSwiper, setLowerSwiper] = useState<SwiperInstanceRef>(null);

    const { slidesColors, changeSlidesColors } = useSlidesColors();

    const handleSlideChange = useCallback(
        (swiperInstance: SwiperInstanceRef) => {
            if (swiperInstance) {
                const timeout = gsap.delayedCall(3, () => {
                    changeSlidesColors();
                    swiperInstance?.slideNext();
                    timeout.kill();
                });
            }
        },
        [changeSlidesColors]
    );

    const isFontsLoaded = useIsHeroFontsLoaded();

    const isStartAnimation = Boolean(
        isFontsLoaded && upperSwiper && middleSwiper && lowerSwiper
    );

    const handleAnimationStart = useCallback(() => {
        handleSlideChange(upperSwiper);
    }, [handleSlideChange, upperSwiper]);

    const {
        h1Line1Class,
        h1Line2Class,
        h1Line3Class,
        buttonClass,
        subtextClass,
    } = useHeroAnimation(isStartAnimation, handleAnimationStart);

    const heroSectionRef = useHeroResize(handleHeroScreenHeight);
    return (
        <section className={styles.hero} ref={heroSectionRef}>
            <HeroHeader menuLinks={data.header.menu} />
            <Container>
                <div className={styles.content}>
                    <HeroTitle
                        title={data.title}
                        isEnglish={isEnglish}
                        swiperCommonProps={{
                            speed: 500,
                            loop: true,
                            allowTouchMove: false,
                        }}
                        upperSwiperProps={{
                            onSwiper: (instance) => {
                                setUpperSwiper(instance);
                            },
                            onSlideChange: () =>
                                handleSlideChange(middleSwiper),
                            wrapClassName: h1Line1Class,
                        }}
                        middleSwiperProps={{
                            onSwiper: (instance) => {
                                setMiddleSwiper(instance);
                            },
                            onSlideChange: () => handleSlideChange(lowerSwiper),
                            className: h1Line2Class,
                        }}
                        lowerSwiperProps={{
                            onSwiper: (instance) => {
                                setLowerSwiper(instance);
                            },
                            onSlideChange: () => handleSlideChange(upperSwiper),
                            className: h1Line3Class,
                        }}
                        slidesColors={slidesColors}
                        className={cn(styles.title, {
                            [styles.titleEn]: isEnglish,
                        })}
                    />

                    <div className={styles.block}>
                        <ButtonLink
                            className={cn(styles.heroButton, buttonClass)}
                            text={data.button}
                            link={`#${navigation.contacts}`}
                            withIcon
                        />

                        <p className={cn(styles.subtext, subtextClass)}>
                            {arrayToString(data.subtitle)}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

const Hero = memo(HeroComponent);

export default Hero;
