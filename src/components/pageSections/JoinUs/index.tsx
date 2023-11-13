import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import cn from 'classnames';

import { Section } from '../../shared/Section';
import { SectionTitle } from '../../shared/SectionTitle';

import FontFaceObserver from 'fontfaceobserver';
import ArrowRightYellow from '../../../assets/images/Arrow-Right-Yellow.svg';

import * as styles from './index.module.scss';

const vacancies = [
    {
        text: 'Middle/Senior Node.js-разработчик',
        link: 'https://smartheadhiring.notion.site/Middle-Senior-Node-js-84b94f1dc7c14c0cb9ec49c4161cb099',
    },
    // {
    //     text: 'HR-менеджер',
    //     link: 'https://smartheadhiring.notion.site/HR-69b8d63e51f544ee9534e56f9dd952c7',
    // },
];

// TODO: Divide elements picking from arrow positioning

const JoinUs: React.FC<{ id?: string }> = ({ id }) => {
    const vacancyList = useRef<HTMLUListElement | null>(null);
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
                    start: window.innerWidth < 641 ? 'top 80%' : 'top 70%',
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

    // styles.rootHeightAuto => if there are any vacancies
    return (
        <Section id={id} className={cn(styles.root, styles.rootHeightAuto)}>
            <div className={styles.content}>
                <SectionTitle className={styles.headline} color={'black'}>
                    Присоединяйтесь к нашей команде
                </SectionTitle>
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
                                        target="_blank"
                                        className={styles.vacanciesLink}
                                    >
                                        <span
                                            className={
                                                styles.vacanciesTextContainer
                                            }
                                        >
                                            <span
                                                className={styles.vacanciesText}
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
                        <br /> можете смело написать на{' '}
                        <a
                            className={styles.email}
                            href="mailto:hr@smarthead.ru"
                        >
                            hr@smarthead.ru
                        </a>
                    </p>
                    {/* No vacancies */}
                    {/* <p className={styles.contactHr}>
                        Сейчас нет открытых вакансий, но, если считаете, что
                        вы&nbsp;нам подходите, можете смело написать на&nbsp;
                        <a
                            className={styles.email}
                            href="mailto:hr@smarthead.ru"
                        >
                            hr@smarthead.ru
                        </a>
                    </p> */}
                </div>
            </div>
        </Section>
    );
};

export default JoinUs;
