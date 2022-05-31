import React from 'react';
import * as styles from './index.module.scss';

const WhatWeDo: React.FC = () => (
    <section className={styles.root}>
        <ul className={styles.task}>
            <li className={styles.taskItem}>
                Разрабатываем
                <span className={styles.thinText}> proof of concept</span>
            </li>
            <li className={styles.taskItem}>
                Запускаем
                <span className={styles.thinText}> MVP</span>
            </li>
            <li className={styles.taskItem}>
                Масштабируем
                <span className={styles.thinText}> цифровые продукты</span>
            </li>
            <li className={styles.taskItem}>
                Формируем{' '}
                <span className={styles.thinText}>
                    команды и процессы разработки
                </span>
            </li>
            <li className={styles.taskItem}>
                Консультируем{' '}
                <span className={styles.thinText}>по процессам разработки</span>
            </li>
            <li className={styles.taskItem}>
                Ищем{' '}
                <span className={styles.thinText}>решения нетиповых задач</span>
            </li>
        </ul>
    </section>
);

export default WhatWeDo;
