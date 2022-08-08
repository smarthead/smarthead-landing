import React, { useEffect, useRef } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { invalidate } from '../../../utils/animation';
import { scrollToSection } from '../../../utils/scroll';
import { navigation } from '../../shared/navigation';

import Header from '../../shared/Header';
import ButtonLink from '../../shared/ButtonLink';
import * as styles from './index.module.scss';

interface Item {
    [key: string]: string;
}

export interface IHero {
    isEnglish?: boolean;
    data: {
        title: Item;
        subtitle: Item;
        button: string;
        header: {
            menu: Item[];
        };
    };
}

const Hero: React.FC<IHero> = ({ data, isEnglish }) => {
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

    return (
        <section className={`${styles.hero} container`}>
            <div className={styles.header}>
                <Header menuLinks={data.header.menu} />
            </div>
            <div className={styles.content}>
                <h1 className={`${styles.headline} `}>
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
                <div className={styles.block}>
                    <ButtonLink
                        className={styles.heroButton}
                        type="yellow"
                        text={data.button}
                        link={`#${navigation.contacts}`}
                        clickHandler={() => {
                            scrollToSection(`#${navigation.contacts}`);
                        }}
                    />

                    <p className={styles.subtext}>
                        {data.subtitle.line1}
                        <br /> {data.subtitle.line2}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
