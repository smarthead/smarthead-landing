import React from 'react';
import * as styles from './index.module.scss';
import teamPhoto from '../../../assets/images/team_photo.jpg';

const HowWeWork: React.FC = () => (
    <section className={styles.root}>
        <div
            className={styles.photo}
            style={{ backgroundImage: `url(${teamPhoto})` }}
        ></div>
        <div className={styles.content}>
            <div className={styles.perks}>
                <p className={styles.perksItem}>
                    Думаем о ценности для&nbsp;потребителя
                </p>
                <p className={styles.perksItem}>
                    Формируем процесс исходя&nbsp;из&nbsp;цели
                </p>
                <p className={styles.perksItem}>
                    Сами управляем проектом и&nbsp;процессом разработки
                </p>
                <p className={styles.perksItem}>
                    Берем ответственность за&nbsp;продукт и&nbsp;работаем
                    автономно
                </p>
            </div>

            <div className={styles.title}>
                <span className={styles.titleText}>
                    Вы тратите меньше времени на управление и контроль — <br />у
                    вас остается больше времени на бизнес
                </span>
            </div>
        </div>
    </section>
);

export default HowWeWork;
