import React, { useEffect, useRef } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { invalidate } from '../../../utils/animation';

import Header from '../../layout/Header';
import ButtonLink from '../../shared/ButtonLink';
import * as styles from './index.module.scss';

export interface ILinks {
    links: {
        [key: string]: string;
    };
}

const Hero: React.FC<ILinks> = ({ links }) => {
    gsap.registerPlugin(ScrollTrigger);

    let revealTimeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
            trigger: `.${styles.hero}`,
        },
    });
    const createTimeline = () => {
        const headline =
            window.innerWidth > 480
                ? [
                      '.first-line',
                      '.second-line',
                      ['.third-line', '.fourth-line'],
                  ]
                : [
                      '.first-line',
                      '.second-line',
                      '.third-line',
                      '.fourth-line',
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
            0
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
            0.5
        );
    };

    const resize = () => {
        const secondLineElem = document.getElementsByClassName(
            styles.secondLine
        )[0] as HTMLElement;
        const subtextElem = document.getElementsByClassName(
            styles.subtext
        )[0] as HTMLElement;

        const width = window.innerWidth;
        if (width > 992 && width <= 1281) {
            subtextElem.style.marginRight =
                0.98 * (secondLineElem.offsetWidth - subtextElem.offsetWidth) +
                'px';
        } else {
            subtextElem.style.marginRight = '0';
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
                <Header links={links} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    <span className="first-line">Разрабатываем</span>
                    <span className={`second-line ${styles.secondLine}`}>
                        амбициозные
                    </span>
                    <span>
                        <span
                            style={{ display: 'inline-block' }}
                            className="third-line"
                        >
                            цифровые
                        </span>{' '}
                        <span
                            style={{ display: 'inline-block' }}
                            className="fourth-line"
                        >
                            продукты
                        </span>
                    </span>
                </h1>
                <div className={styles.block}>
                    <ButtonLink
                        className={styles.heroButton}
                        type="yellow"
                        text="ХОЧУ С ВАМИ РАБОТАТЬ"
                        link="#"
                    />

                    <p className={styles.subtext}>
                        Продуктоориентированная команда,
                        <br /> а не просто «руки на аутстаффе»
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
