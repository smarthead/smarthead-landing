import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Section } from '@/shared/Section';
import { Container } from '@/shared/Container';

import * as styles from './index.module.scss';

interface IWhatWeDo {
    id: string;
    data: { tasks: { text: string; subtext: string }[] };
}

const WhatWeDo: React.FC<IWhatWeDo> = ({ id, data }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            `.${styles.taskItem}`,
            { yPercent: 100, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.task}`,
                    start: () =>
                        window.innerWidth < 641 ? '27% 100%' : '35% 100%',
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
        <Section id={id} theme={'dark'} className={styles.root}>
            <Container>
                <ul className={styles.task}>
                    {data.tasks.map((task, index) => (
                        <li key={index} className={styles.taskItem}>
                            {task.text}
                            <br />
                            <span className={styles.thinText}>
                                {' '}
                                {task.subtext}
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    );
};

export default WhatWeDo;
