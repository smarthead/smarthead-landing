import React, { useEffect } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SectionTitle } from '../../shared/SectionTitle';

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
        <div className={styles.carousel}>
            <div className="container">
                <div className={styles.content}>
                    <SectionTitle
                        className={cn(styles.headline, 'partners-headline', {
                            [styles.headlineEn]: data.language === 'en',
                        })}
                    >
                        {data.title}
                    </SectionTitle>

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
            </div>
        </div>
    );
};

export default Partners;
