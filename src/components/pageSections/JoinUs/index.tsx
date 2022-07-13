import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import FontFaceObserver from 'fontfaceobserver';
import * as styles from './index.module.scss';
import ArrowRightYellow from '../../../assets/images/arrow-right-yellow.svg';

const vacancies = [
    {
        text: 'Middle .NET-разработчик',
        link: 'https://kazan.hh.ru/vacancy/54583226?from=employer&hhtmFrom=employer ',
    },
    // { text: 'Middle/Senior Node.js-разработчик', link: '#' },
];

// TODO: Divide elements picking from arrow positioning

const JoinUs: React.FC<{ id?: string }> = ({ id }) => {
    const vacancyList = useRef(null as HTMLElement | null);
    const [fontIsLoaded, setFontIsLoaded] = useState(false);
    gsap.registerPlugin(ScrollTrigger);

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

    const createAnimation = () => {
        const height = (
            document.getElementsByClassName(styles.headline)[0] as HTMLElement
        ).offsetHeight;
        console.log(height);
        gsap.fromTo(
            [
                `.${styles.headline}`,
                `.${styles.subtext}`,
                `.${styles.vacanciesItem}`,
                `.${styles.contactHr}`,
            ],
            { y: height, autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.content}`,
                    start: 'top 70%',
                },
                duration: 0.5,
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                ease: 'power2.out',
            }
        );
    };

    useEffect(() => {
        const font = new FontFaceObserver('Gilroy-SemiBold');
        font.load().then(() => {
            setFontIsLoaded(true);
            resize();
            createAnimation();
        });
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section id={id} className={styles.root}>
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
