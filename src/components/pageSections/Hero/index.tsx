import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { invalidate } from '../../../utils/animation';
import { scrollToSection } from '../../../utils/scroll';
import { navigation } from '../../shared/navigation';
import { arrayToString } from '../../../utils/arrayToString';

import Header from '../../shared/Header';
import ButtonLink from '../../shared/ButtonLink';
import { useSlidesColors } from './useSlidesColors';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import * as styles from './index.module.scss';

type SwiperInstanceRef = null | SwiperType;

interface TitleItem {
    [key: string]: string[];
}

interface Item {
    [key: string]: string;
}

export interface IHero {
    isEnglish?: boolean;
    data: {
        title: TitleItem;
        subtitle: string[];
        button: string;
        header: {
            menu: Item[];
        };
    };
}

const h1Line1Class = '.hero-h1-line1';
const h1Line2Class = '.hero-h1-line2';
const h1Line3Class = '.hero-h1-line3';
const h1Line4Class = '.hero-h1-line4';

const Hero: React.FC<IHero> = ({ data, isEnglish }) => {
    gsap.registerPlugin(ScrollTrigger);

    let revealTimeline = gsap.timeline({ paused: true });

    const createTimeline = () => {
        const headline =
            window.innerWidth > 480
                ? [h1Line1Class, h1Line2Class, [h1Line3Class, h1Line4Class]]
                : [h1Line1Class, h1Line2Class, h1Line3Class, h1Line4Class];

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

    const isMobileView = window.matchMedia(`(max-width: 992px)`).matches;
    const slidersDirection = isMobileView ? 'horizontal' : 'vertical';

    const calcMiddleSwiperMarginClasses = (i: number) => ({
        [styles.smallOffsetRight]: i === 0 && !isMobileView,
        [styles.middleOffsetRight]: i === 1 && !isMobileView,
        [styles.center]: (i === 2 || i === 3) && !isMobileView,
        [styles.bigOffsetRight]: i === 4 && !isMobileView,
    });

    return (
        <section className={cn(styles.hero, 'container')}>
            <div className={styles.header}>
                <Header menuLinks={data.header.menu} />
            </div>

            <div
                className={cn(styles.content, {
                    [styles.contentEn]: isEnglish,
                })}
            >
                <h1
                    className={cn(
                        styles.headline,
                        {
                            [styles.headlineEn]: isEnglish,
                        },
                        'h1'
                    )}
                >
                    <Swiper
                        direction={slidersDirection}
                        allowTouchMove={false}
                        speed={500}
                        loop
                        onSwiper={(instance) => {
                            setUpperSwiper(instance);
                        }}
                        onSlideChange={() => handleSlideChange(middleSwiper)}
                        className={cn(styles.slider, h1Line1Class.slice(1))}
                    >
                        {data.title.line1.map((name) => (
                            <SwiperSlide
                                className={cn(styles.slide, slidesColors.upper)}
                                key={name}
                            >
                                {name}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        direction={slidersDirection}
                        allowTouchMove={false}
                        speed={500}
                        loop
                        onSwiper={(instance) => {
                            setMiddleSwiper(instance);
                        }}
                        onSlideChange={() => handleSlideChange(lowerSwiper)}
                        className={cn(styles.slider, h1Line2Class.slice(1))}
                    >
                        {data.title.line2.map((name, i) => (
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
                        direction={slidersDirection}
                        allowTouchMove={false}
                        speed={500}
                        loop
                        onSwiper={(instance) => {
                            setLowerSwiper(instance);
                        }}
                        onSlideChange={() => handleSlideChange(upperSwiper)}
                        className={cn(styles.slider, h1Line3Class.slice(1), {
                            [styles.twoLinesSlider]: isMobileView,
                        })}
                    >
                        {data.title.line3.map((name) => (
                            <SwiperSlide
                                className={cn(styles.slide, slidesColors.lower)}
                                key={name}
                            >
                                {name}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </h1>

                <div
                    className={cn(styles.block, {
                        [styles.blockEn]: isEnglish,
                    })}
                >
                    <ButtonLink
                        className={styles.heroButton}
                        type="yellow"
                        text={data.button}
                        link={`#${navigation.contacts}`}
                        clickHandler={() => {
                            scrollToSection(`#${navigation.contacts}`);
                        }}
                    />

                    <p
                        className={cn(styles.subtext, {
                            [styles.subtextEn]: isEnglish,
                        })}
                    >
                        {arrayToString(data.subtitle)}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
