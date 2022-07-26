import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';

const WhatWeDo: React.FC<{ id?: string }> = ({ id }) => {
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
        <section className={styles.root} id={id}>
            <div className="container">
                <ul className={styles.task}>
                    <li className={styles.taskItem}>
                        Разрабатываем
                        <br />
                        <span className={styles.thinText}>
                            {' '}
                            proof of concept
                        </span>
                    </li>
                    <li className={styles.taskItem}>
                        Запускаем
                        <br />
                        <span className={styles.thinText}> MVP</span>
                    </li>
                    <li className={styles.taskItem}>
                        Масштабируем
                        <br />
                        <span className={styles.thinText}>
                            {' '}
                            цифровые продукты
                        </span>
                    </li>
                    <li className={styles.taskItem}>
                        Формируем
                        <br />
                        <span className={styles.thinText}>
                            {' '}
                            команды и процессы разработки
                        </span>
                    </li>
                    <li className={styles.taskItem}>
                        Консультируем
                        <br />
                        <span className={styles.thinText}>
                            {' '}
                            по процессам разработки
                        </span>
                    </li>
                    <li className={styles.taskItem}>
                        Ищем
                        <br />
                        <span className={styles.thinText}>
                            {' '}
                            решения нетиповых задач
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WhatWeDo;
