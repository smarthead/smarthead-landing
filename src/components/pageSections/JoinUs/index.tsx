import React, { useEffect, useRef, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import * as styles from './index.module.scss';
import ArrowRightYellow from '../../../assets/images/arrow-right-yellow.svg';

const vacancies = [
    {
        text: 'Middle .NET-разработчик',
        link: 'https://kazan.hh.ru/vacancy/54583226?from=employer&hhtmFrom=employer ',
    },
    { text: 'Middle/Senior Node.js-разработчик', link: '#' },
];

// TODO: Divide elements picking from arrow positioning

const JoinUs: React.FC = () => {
    const vacancyList = useRef(null as HTMLElement | null);
    const [fontIsLoaded, setFontIsLoaded] = useState(false);
    const resize = () => {
        if (vacancyList.current) {
            const listElementsNodeList =
                vacancyList.current.getElementsByClassName(
                    styles.vacanciesTextContainer
                );
            const listElementsArray = Array.from(listElementsNodeList);

            const temp = listElementsArray.map((elem) => {
                const text = elem.querySelector(
                    `.${styles.vacanciesText}`
                ) as HTMLElement | null;
                const arrow = elem.querySelector(
                    `.${styles.arrow}`
                ) as HTMLElement | null;
                return { text, arrow };
            });
            temp.forEach((item) => {
                if (item.text && item.arrow) {
                    const x = item.text.offsetWidth;
                    const y =
                        item.text.offsetHeight * 0.5 -
                        item.arrow.offsetHeight * 0.5;

                    item.arrow.style.left = x + 'px';
                    item.arrow.style.top = y + 'px';
                }
            });
        }
    };

    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    useEffect(() => {
        const font = new FontFaceObserver('Gilroy-SemiBold');
        font.load().then(() => {
            setFontIsLoaded(true);
            resize();
        });
    }, []);

    return (
        <section id="join-us" className={styles.root}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.headline}>
                        Присоединяйтесь к нашей команде
                    </h2>
                    <p className={styles.subtext}>
                        Мы сильны инженерной культурой, качеством реализации
                        проектов, теплой атмосферой и бережным отношением к
                        сотрудникам
                    </p>
                    <div className={styles.contact}>
                        <ul className={styles.vacancies} ref={vacancyList}>
                            {fontIsLoaded &&
                                vacancies.map((vacancy, index) => (
                                    <li
                                        key={index}
                                        className={styles.vacanciesItem}
                                    >
                                        <a
                                            href={vacancy.link}
                                            className={styles.vacanciesLink}
                                        >
                                            <span
                                                className={
                                                    styles.vacanciesTextContainer
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles.vacanciesText
                                                    }
                                                >
                                                    {vacancy.text}
                                                </span>
                                                <img
                                                    src={ArrowRightYellow}
                                                    alt=""
                                                    className={styles.arrow}
                                                />
                                            </span>
                                        </a>
                                    </li>
                                ))}
                        </ul>
                        <p className={styles.contactHr}>
                            Если вы не нашли вакансию, которая вам подходит,
                            можете смело написать нам на{' '}
                            <a
                                className={styles.email}
                                href="mailto:hr@smarthead.ru"
                            >
                                hr@smarthead.ru
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
