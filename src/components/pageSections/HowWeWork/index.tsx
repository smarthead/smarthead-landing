import React from 'react';
import * as styles from './index.module.scss';

const HowWeWork: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <h2 className={styles.headline}>Наш подход</h2>

            <ul className={styles.list}>
                <li>Думаем о ценности для потребителя</li>
                <li>Формируем процесс исходя из цели</li>
                <li>Сами управляем проектом и процессом разработки</li>
                <li>Берем ответственность за продукт и работаем автономно</li>
            </ul>
        </div>
        <div className={styles.description}>
            <div className="container">
                <p className={styles.descriptionText}>
                    Вы тратите меньше времени на управление и контроль — у вас
                    остается больше времени на бизнес
                </p>
            </div>
        </div>
    </section>
);

export default HowWeWork;
