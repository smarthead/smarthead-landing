import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { arrayToString } from '../../../utils/arrayToString';

import { Section } from '../../shared/Section';
import { Container } from '../../shared/Container';

import * as styles from './index.module.scss';
import teamPhoto from '../../../assets/images/Team-Photo.webp';

interface IHowWeWork {
    data: {
        perks: string[][];
        title: string[];
    };
}

const HowWeWork: React.FC<IHowWeWork> = ({ data }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            `.${styles.perksItem}`,
            { yPercent: 100, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.perks}`,
                    start: () =>
                        window.innerWidth < 641 ? '40% 100%' : '75% 90%',
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.1,
            }
        );
        gsap.fromTo(
            `.${styles.titleText}`,
            { yPercent: 50, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.title}`,
                    start: () =>
                        window.innerWidth < 641 ? '100% 100%' : 'center 90%',
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.1,
            }
        );
    }, []);

    return (
        <Section className={styles.root}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.perks}>
                        {data.perks.map((perk, index) => (
                            <p key={index} className={styles.perksItem}>
                                {arrayToString(perk)}
                            </p>
                        ))}
                    </div>

                    <div className={styles.title}>
                        <p className={styles.titleText}>
                            {arrayToString(data.title)}
                        </p>
                    </div>
                </div>
                <div
                    className={styles.photo}
                    // style={{ backgroundImage: `url(${teamPhoto})` }}
                >
                    <img
                        src={teamPhoto}
                        alt="Team Photo"
                        className={styles.photoImage}
                    />
                </div>
            </Container>
        </Section>
    );
};

export default HowWeWork;
