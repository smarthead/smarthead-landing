import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
// import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { invalidate } from '../../../utils/animation';
import { scrollToSection } from '../../../utils/scroll';
import { navigation } from '../../shared/navigation';
import { arrayToString } from '../../../utils/arrayToString';

import Header from '../../shared/Header';
import ButtonLink from '../../shared/ButtonLink';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import * as styles from './index.module.scss';

type SwiperInstanceRef = null | SwiperType;

interface Item {
    [key: string]: string;
}

export interface IHero {
    isEnglish?: boolean;
    data: {
        title: Item;
        subtitle: string[];
        button: string;
        header: {
            menu: Item[];
        };
    };
}

const upperSliderData = [
    'Разрабатываем',
    'Поддерживаем',
    'Развиваем',
    'Масштабируем',
    'Запускаем',
];

const middleSliderData = [
    'амбициозные',
    'масштабируемые',
    'нагруженные',
    'технологичные',
    'востребованные',
];

const downSliderData = [
    'цифровые сервисы',
    'информационные системы',
    'интеграционные решения',
    'мобильные приложения',
    'инструменты автоматизации',
];

const Hero: React.FC<IHero> = ({ data, isEnglish }) => {
    gsap.registerPlugin(ScrollTrigger);

    //let revealTimeline = gsap.timeline({ paused: true });

    // const createTimeline = () => {
    //     const headline =
    //         window.innerWidth > 480
    //             ? [
    //                   '.hero-h1-line1',
    //                   '.hero-h1-line2',
    //                   ['.hero-h1-line3', '.hero-h1-line4'],
    //               ]
    //             : [
    //                   '.hero-h1-line1',
    //                   '.hero-h1-line2',
    //                   '.hero-h1-line3',
    //                   '.hero-h1-line4',
    //               ];
    //     revealTimeline.fromTo(
    //         headline,
    //         { yPercent: 100, autoAlpha: 0 },
    //
    //         {
    //             yPercent: 0,
    //             autoAlpha: 1,
    //             duration: 0.6,
    //             stagger: 0.1,
    //             ease: 'power2.out',
    //         },
    //         0.2
    //     );
    //     const order = window.innerWidth > 992 ? 0.1 : -0.1;
    //     revealTimeline.fromTo(
    //         [`.${styles.heroButton}`, `.${styles.subtext}`],
    //         { yPercent: 100, autoAlpha: 0 },
    //
    //         {
    //             yPercent: 0,
    //             autoAlpha: 1,
    //             duration: 0.6,
    //             stagger: order,
    //             ease: 'power2.out',
    //         },
    //         0.7
    //     );
    // };

    // const resize = () => {
    //     if (!isEnglish) {
    //         const secondLineElem = document.getElementsByClassName(
    //             styles.secondLine
    //         )[0] as HTMLElement;
    //         const subtextElem = document.getElementsByClassName(
    //             styles.subtext
    //         )[0] as HTMLElement;
    //
    //         const width = window.innerWidth;
    //         if (width > 992 && width <= 1281) {
    //             subtextElem.style.marginRight =
    //                 0.98 *
    //                     (secondLineElem.offsetWidth - subtextElem.offsetWidth) +
    //                 'px';
    //         } else {
    //             subtextElem.style.marginRight = '0';
    //         }
    //     }

    // const resize = () => {
    //     if (!isEnglish) {
    //         const secondLineElem = document.getElementsByClassName(
    //             styles.secondLine
    //         )[0] as HTMLElement;
    //         const subtextElem = document.getElementsByClassName(
    //             styles.subtext
    //         )[0] as HTMLElement;
    //
    //         const width = window.innerWidth;
    //         if (width > 992 && width <= 1281) {
    //             subtextElem.style.marginRight =
    //                 0.98 *
    //                     (secondLineElem.offsetWidth - subtextElem.offsetWidth) +
    //                 'px';
    //         } else {
    //             subtextElem.style.marginRight = '0';
    //         }
    //     }
    //
    //     invalidate(createTimeline, revealTimeline);
    // };

    // useEffect(() => {
    //createTimeline();
    //revealTimeline.play(0);
    //const fontGilroyBold = new FontFaceObserver('Gilroy-Bold');
    //const fontInterRegular = new FontFaceObserver('Inter-Regular');
    // Promise.all([fontGilroyBold.load(), fontInterRegular.load()]).then(
    //     () => {
    //         handleSlideChange(upperSwiper);
    //     }
    // );
    //window.addEventListener('resize', resize);
    // return () => {
    //     window.removeEventListener('resize', resize);
    // };
    // }, []);

    const upperSwiper = useRef<SwiperInstanceRef>(null);
    const middleSwiper = useRef<SwiperInstanceRef>(null);
    const downSwiper = useRef<SwiperInstanceRef>(null);

    const handleSlideChange = (
        swiperInstanceRef: React.MutableRefObject<SwiperInstanceRef>
    ) => {
        if (swiperInstanceRef?.current) {
            const timeout = setTimeout(() => {
                swiperInstanceRef.current?.slideNext();
                clearTimeout(timeout);
            }, 3000);
        }
    };

    const isFirstRenderPassed = useRef(false);
    useEffect(() => {
        if (!isFirstRenderPassed.current) {
            handleSlideChange(upperSwiper);
            isFirstRenderPassed.current = true;
        }
    });

    // const [upperSwiperColorState, setUpperSwiperColorState] = useState(false);
    return (
        <section className={`${styles.hero} container`}>
            <div className={styles.header}>
                <Header menuLinks={data.header.menu} />
            </div>

            <div
                className={`${styles.content} ${isEnglish && styles.contentEn}`}
            >
                <h1
                    className={`${styles.headline} ${
                        isEnglish && styles.headlineEn
                    }`}
                >
                    <Swiper
                        direction="vertical"
                        allowTouchMove={false}
                        speed={700}
                        loop={true}
                        onSwiper={(instance) =>
                            (upperSwiper.current = instance)
                        }
                        onSlideChange={() => {
                            handleSlideChange(middleSwiper);
                        }}
                        className={styles.slider}
                    >
                        {upperSliderData.map((name) => (
                            <SwiperSlide className={styles.slide} key={name}>
                                {name}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        direction="vertical"
                        allowTouchMove={false}
                        speed={700}
                        loop={true}
                        onSwiper={(instance) =>
                            (middleSwiper.current = instance)
                        }
                        onSlideChange={() => handleSlideChange(downSwiper)}
                        className={styles.slider}
                    >
                        {middleSliderData.map((name, i) => (
                            <SwiperSlide
                                key={name}
                                className={cn(styles.slide, styles.secondLine, {
                                    [styles.smallOffsetRight]: i === 0,
                                    [styles.middleOffsetRight]: i === 1,
                                    [styles.center]: i === 2 || i === 3,
                                    [styles.bigOffsetRight]: i === 4,
                                })}
                            >
                                {name}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        direction="vertical"
                        allowTouchMove={false}
                        speed={700}
                        loop={true}
                        onSwiper={(instance) => (downSwiper.current = instance)}
                        onSlideChange={() => handleSlideChange(upperSwiper)}
                        className={styles.slider}
                    >
                        {downSliderData.map((name) => (
                            <SwiperSlide className={styles.slide} key={name}>
                                {name}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </h1>

                <div
                    className={`${styles.block} ${isEnglish && styles.blockEn}`}
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
                        className={`${styles.subtext} ${
                            isEnglish && styles.subtextEn
                        }`}
                    >
                        {arrayToString(data.subtitle)}
                    </p>
                </div>
            </div>

            {/*<div*/}
            {/*    className={`${styles.content} ${isEnglish && styles.contentEn}`}*/}
            {/*>*/}
            {/*    <h1*/}
            {/*        className={`${styles.headline} ${*/}
            {/*            isEnglish && styles.headlineEn*/}
            {/*        }`}*/}
            {/*    >*/}
            {/*        <span className={`${styles.headlineL1} hero-h1-line1`}>*/}
            {/*            {data.title.line1}*/}
            {/*        </span>*/}
            {/*        <span*/}
            {/*            className={`${styles.secondLine} ${styles.headlineL2} hero-h1-line2`}*/}
            {/*        >*/}
            {/*            {data.title.line2}*/}
            {/*        </span>*/}
            {/*        <span>*/}
            {/*            <span*/}
            {/*                style={{ display: 'inline-block' }}*/}
            {/*                className={`${styles.headlineL3} hero-h1-line3`}*/}
            {/*            >*/}
            {/*                {data.title.line3}*/}
            {/*            </span>{' '}*/}
            {/*            <span*/}
            {/*                style={{ display: 'inline-block' }}*/}
            {/*                className={`${styles.headlineL4} hero-h1-line4`}*/}
            {/*            >*/}
            {/*                {data.title.line4}*/}
            {/*            </span>*/}
            {/*        </span>*/}
            {/*    </h1>*/}

            {/*<div className={`${styles.block} ${isEnglish && styles.blockEn}`}>*/}
            {/*    <ButtonLink*/}
            {/*        className={styles.heroButton}*/}
            {/*        type="yellow"*/}
            {/*        text={data.button}*/}
            {/*        link={`#${navigation.contacts}`}*/}
            {/*        clickHandler={() => {*/}
            {/*            scrollToSection(`#${navigation.contacts}`);*/}
            {/*        }}*/}
            {/*    />*/}

            {/*    <p*/}
            {/*        className={`${styles.subtext} ${*/}
            {/*            isEnglish && styles.subtextEn*/}
            {/*        }`}*/}
            {/*    >*/}
            {/*        {arrayToString(data.subtitle)}*/}
            {/*    </p>*/}
            {/*</div>*/}
        </section>
    );
};

export default Hero;
