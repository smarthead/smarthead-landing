import React from 'react';
import * as styles from './index.module.scss';
import ArrowRightYellow from '../../../assets/images/arrow-right-yellow.svg';

const JoinUs: React.FC = () => (
    <section id="join-us" className={styles.root}>
        <div className="container">
            <h2 className={styles.headline}>Присоединяйтесь к нам</h2>
            <p className={styles.subtext}>
                Мы сильны инженерной культурой, качеством реализации проектов,
                теплой атмосферой и бережным отношением к сотрудникам
            </p>

            <ul className={styles.vacancies}>
                <li className={styles.vacanciesItem}>
                    <a href="#" className={styles.vacanciesLink}>
                        <span className={styles.vacanciesText}>
                            <span>Middle .NET-разработчик</span>
                            <img
                                src={ArrowRightYellow}
                                alt=""
                                className={styles.arrow}
                            />
                        </span>
                    </a>
                </li>
                <li className={styles.vacanciesItem}>
                    <a href="#" className={styles.vacanciesLink}>
                        <span className={styles.vacanciesText}>
                            <span>
                                Middle/Senior Node.js-разработчик{' '}
                                <span>
                                    &nbsp;
                                    <img
                                        src={ArrowRightYellow}
                                        alt=""
                                        className={styles.arrow}
                                    />
                                </span>
                            </span>
                        </span>
                    </a>
                </li>
            </ul>
            <p className={styles.contactHr}>
                Если вы не нашли вакансию, которая вам подходит, можете смело
                написать нам на{' '}
                <a className={styles.email} href="mailto:hr@smarthead.ru">
                    hr@smarthead.ru
                </a>
            </p>
        </div>
    </section>
);

export default JoinUs;
