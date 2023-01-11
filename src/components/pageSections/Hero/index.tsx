import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { invalidate } from '../../../utils/animation';
import { scrollToSection } from '../../../utils/scroll';
import { navigation } from '../../shared/navigation';
import { arrayToString } from '../../../utils/arrayToString';

import HeroHeader from '../../shared/HeroHeader';
import HeroTitle from '../../shared/HeroTitle';
import ButtonLink from '../../shared/ButtonLink';
import { useSlidesColors } from '../../shared/HeroTitle/utils';

import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import * as styles from './index.module.scss';

type SwiperInstanceRef = null | SwiperType;

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

const h1Line1Class = '.hero-h1-line1';
const h1Line2Class = '.hero-h1-line2';
const h1Line3Class = '.hero-h1-line3';

const Hero: React.FC<IHero> = ({ data, isEnglish, handleHeroScreenHeight }) => {
    gsap.registerPlugin(ScrollTrigger);

    let revealTimeline = gsap.timeline({ paused: true });

    const createTimeline = () => {
        const headline =
            window.innerWidth > 480
                ? [h1Line1Class, h1Line2Class, h1Line3Class]
                : [h1Line1Class, h1Line2Class, h1Line3Class];

        revealTimeline.fromTo(
            headline,
            { yPercent: 100, autoAlpha: 0 },

            {
                yPercent: 0,
                autoAlpha: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out',
            },
            0.2
        );
        const order = window.innerWidth > 992 ? 0.1 : -0.1;
        revealTimeline.fromTo(
            [`.${styles.heroButton}`, `.${styles.subtext}`],
            { yPercent: 100, autoAlpha: 0 },

            {
                yPercent: 0,
                autoAlpha: 1,
                duration: 0.6,
                stagger: order,
                ease: 'power2.out',
            },
            0.7
        );
    };

    const handleResize = () => {
        invalidate(createTimeline, revealTimeline);

        if (heroSection.current?.offsetHeight) {
            handleHeroScreenHeight(heroSection.current?.offsetHeight);
        }
    };

    const [upperSwiper, setUpperSwiper] = useState<SwiperInstanceRef>(null);
    const [middleSwiper, setMiddleSwiper] = useState<SwiperInstanceRef>(null);
    const [lowerSwiper, setLowerSwiper] = useState<SwiperInstanceRef>(null);

    const handleSlideChange = (swiperInstance: SwiperInstanceRef) => {
        if (swiperInstance) {
            const timeout = gsap.delayedCall(3, () => {
                changeSlidesColors();
                swiperInstance?.slideNext();
                timeout.kill();
            });
        }
    };

    const [isFontsLoaded, setIsFontsLoaded] = useState(false);

    useEffect(() => {
        if (!isFontsLoaded) {
            const fontGilroyBold = new FontFaceObserver('Gilroy-Bold');
            const fontInterRegular = new FontFaceObserver('Inter-Regular');
            Promise.all([fontGilroyBold.load(), fontInterRegular.load()]).then(
                () => {
                    setIsFontsLoaded(true);
                }
            );
        } else if (upperSwiper && middleSwiper && lowerSwiper) {
            Promise.resolve()
                .then(() => {
                    revealTimeline.play(0);
                    handleResize();
                })
                .then(() => {
                    handleSlideChange(upperSwiper);
                });
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isFontsLoaded, upperSwiper, middleSwiper, lowerSwiper]);

    const { slidesColors, changeSlidesColors } = useSlidesColors();

    const heroSection = useRef<HTMLElement>(null);

    return (
        <section className={cn(styles.hero, 'container')} ref={heroSection}>
            <HeroHeader menuLinks={data.header.menu} />

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
                        onSlideChange: () => handleSlideChange(middleSwiper),
                        wrapClassName: h1Line1Class.slice(1),
                    }}
                    middleSwiperProps={{
                        onSwiper: (instance) => {
                            setMiddleSwiper(instance);
                        },
                        onSlideChange: () => handleSlideChange(lowerSwiper),
                        className: h1Line2Class.slice(1),
                    }}
                    lowerSwiperProps={{
                        onSwiper: (instance) => {
                            setLowerSwiper(instance);
                        },
                        onSlideChange: () => handleSlideChange(upperSwiper),
                        className: h1Line3Class.slice(1),
                    }}
                    slidesColors={slidesColors}
                    className={cn(styles.title, {
                        [styles.titleEn]: isEnglish,
                    })}
                />

                <div className={styles.block}>
                    <ButtonLink
                        className={styles.heroButton}
                        text={data.button}
                        link={`#${navigation.contacts}`}
                        clickHandler={() => {
                            scrollToSection(`#${navigation.contacts}`);
                        }}
                        withIcon
                    />

                    <p className={styles.subtext}>
                        {arrayToString(data.subtitle)}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
