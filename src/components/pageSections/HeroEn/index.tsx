import React, { useEffect, useRef } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { invalidate } from '../../../utils/animation';
import { scrollToSection } from '../../../utils/scroll';
import { navigation } from '../../shared/navigation';
import { arrayToString } from '../../../utils/arrayToString';

import Header from '../../shared/Header';
import ButtonLink from '../../shared/ButtonLink';
import * as styles from './index.module.scss';
import HeroHeader from '../../shared/HeroHeader';

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
    handleHeroScreenHeight: (height: number) => void;
}

const HeroEn: React.FC<IHero> = ({ data, isEnglish, handleHeroScreenHeight }) => {
    gsap.registerPlugin(ScrollTrigger);

    let revealTimeline = gsap.timeline({ paused: true });

    const createTimeline = () => {
        const headline =
            window.innerWidth > 480
                ? [
                      '.hero-h1-line1',
                      '.hero-h1-line2',
                      ['.hero-h1-line3', '.hero-h1-line4'],
                  ]
                : [
                      '.hero-h1-line1',
                      '.hero-h1-line2',
                      '.hero-h1-line3',
                      '.hero-h1-line4',
                  ];
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

    const resize = () => {
        if (!isEnglish) {
            const secondLineElem = document.getElementsByClassName(
                styles.secondLine
            )[0] as HTMLElement;
            const subtextElem = document.getElementsByClassName(
                styles.subtext
            )[0] as HTMLElement;

            const width = window.innerWidth;
            if (width > 992 && width <= 1281) {
                subtextElem.style.marginRight =
                    0.98 *
                        (secondLineElem.offsetWidth - subtextElem.offsetWidth) +
                    'px';
            } else {
                subtextElem.style.marginRight = '0';
            }
        }

        invalidate(createTimeline, revealTimeline);
    };

    useEffect(() => {
        createTimeline();
        revealTimeline.play(0);
        const fontGilroyBold = new FontFaceObserver('Gilroy-Bold');
        const fontInterRegular = new FontFaceObserver('Inter-Regular');

        Promise.all([fontGilroyBold.load(), fontInterRegular.load()]).then(
            () => {
                resize();
            }
        );
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    //
    const handleResize = () => {
        if (heroSection.current?.offsetHeight) {
            handleHeroScreenHeight(heroSection.current?.offsetHeight);
        }
    };

    const heroSection = useRef<HTMLElement>(null);
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <section className={`${styles.hero} container`} ref={heroSection}>
            <HeroHeader menuLinks={data.header.menu} />
            <div
                className={`${styles.content} ${isEnglish && styles.contentEn}`}
            >
                <h1
                    className={`${styles.headline} ${
                        isEnglish && styles.headlineEn
                    }`}
                >
                    <span className={`${styles.headlineL1} hero-h1-line1`}>
                        {data.title.line1}
                    </span>
                    <span
                        className={`${styles.secondLine} ${styles.headlineL2} hero-h1-line2`}
                    >
                        {data.title.line2}
                    </span>
                    <span>
                        <span
                            style={{ display: 'inline-block' }}
                            className={`${styles.headlineL3} hero-h1-line3`}
                        >
                            {data.title.line3}
                        </span>{' '}
                        <span
                            style={{ display: 'inline-block' }}
                            className={`${styles.headlineL4} hero-h1-line4`}
                        >
                            {data.title.line4}
                        </span>
                    </span>
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
        </section>
    );
};



export default HeroEn;
