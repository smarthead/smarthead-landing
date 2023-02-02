import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Section } from '../../shared/Section';

import * as styles from './index.module.scss';

interface IPartners {
    data: {
        language?: string;
        title: string;
        images: any[];
    };
}

const Partners: React.FC<IPartners> = ({ data }) => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(
            '.partners-headline',
            { yPercent: 100, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: '.partners-headline',
                    start: () =>
                        window.innerWidth < 481 ? 'bottom 95%' : 'bottom 80%',
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
            }
        );
        gsap.fromTo(
            '.partners-logo-item',
            { yPercent: 100, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: '.partners-logo-item',
                    start: () =>
                        window.innerWidth < 481 ? 'top 85%' : 'top 70%',
                },
                duration: 0.6,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: {
                    grid: 'auto',
                    axis: 'y',
                    from: 'start',
                    each: 0.15,
                },
            }
        );
    }, []);
    return (
        <Section theme={'dark'}>
            <div className={styles.content}>
                <div
                    className={`${styles.headline} partners-headline
                        ${data.language === 'en' && styles.headlineEn}`}
                >
                    {data.title}
                </div>

                <div
                    className={`${styles.logos} ${
                        data.language === 'en' && styles.logosEn
                    }`}
                >
                    {data.images.map((logo, index) => (
                        <img
                            src={logo}
                            key={index}
                            alt=""
                            className={`${styles.logo} partners-logo-item`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Partners;
