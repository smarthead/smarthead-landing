import React from 'react';
import * as styles from './index.module.scss';

const WhatWeDo: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <ul className={styles.task}>
                <li className={styles.taskItem}>
                    Разрабатываем
                    <br />
                    <span className={styles.thinText}> proof of concept</span>
                </li>
                <li className={styles.taskItem}>
                    Запускаем
                    <br />
                    <span className={styles.thinText}> MVP</span>
                </li>
                <li className={styles.taskItem}>
                    Масштабируем
                    <br />
                    <span className={styles.thinText}> цифровые продукты</span>
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

export default WhatWeDo;
