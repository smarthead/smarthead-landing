import React from 'react';
import * as styles from './index.module.scss';

const WhatWeDo: React.FC = () => (
    <section className={styles.root}>
        <ul className={styles.tasks}>
            <li>
                Разрабатываем
                <span className={styles.thinText}> proof of concept</span>
            </li>
            <li>
                Запускаем
                <span className={styles.thinText}> MVP</span>
            </li>
            <li>
                Масштабируем
                <span className={styles.thinText}> цифровые продукты</span>
            </li>
            <li>
                Формируем{' '}
                <span className={styles.thinText}>
                    команды и процессы разработки
                </span>
            </li>
            <li>
                Консультируем{' '}
                <span className={styles.thinText}>по процессам разработки</span>
            </li>
            <li>
                Ищем{' '}
                <span className={styles.thinText}>решения нетиповых задач</span>
            </li>
        </ul>
    </section>
);

export default WhatWeDo;
