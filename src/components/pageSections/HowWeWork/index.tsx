import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';
import teamPhoto from '../../../assets/images/Team-Photo.jpg';

const HowWeWork: React.FC = () => {
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
    });

    return (
        <section className={styles.root}>
            <div className={styles.content}>
                <div className={styles.perks}>
                    <p className={styles.perksItem}>
                        Думаем о ценности
                        <br /> для&nbsp;потребителя
                    </p>
                    <p className={styles.perksItem}>
                        Формируем процесс
                        <br /> исходя из&nbsp;цели
                    </p>
                    <p className={styles.perksItem}>
                        Сами управляем проектом
                        <br /> и&nbsp;процессом разработки
                    </p>
                    <p className={styles.perksItem}>
                        Берем ответственность
                        <br /> за&nbsp;продукт и&nbsp;работаем&nbsp;автономно
                    </p>
                </div>

                <div className={styles.title}>
                    <p className={styles.titleText}>
                        Вы тратите меньше времени на управление и контроль —{' '}
                        <br />у вас остается больше времени на бизнес
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
        </section>
    );
};

export default HowWeWork;
