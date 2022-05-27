import React from 'react';
import * as styles from './index.module.scss';

const HowWeWork: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <h2 className={styles.headline}>Как мы работаем</h2>

            <ul className={styles.description}>
                <li>Думаем о ценности для потребителя</li>
                <li>Формируем процесс исходя из цели</li>
                <li>Сами управляем проектом и процессом разработки</li>
                <li>Берем ответственность за продукт и работаем автономно</li>
            </ul>
        </div>
    </section>
);

export default HowWeWork;
