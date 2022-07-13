import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';
import Card from '../../shared/Card';
import podcastCover from '../../../assets/images/podcast_cover.jpg';
import instagramCover from '../../../assets/images/instagram_cover.jpg';
import telegramCover from '../../../assets/images/telegram_cover.jpg';
import { links } from '../../shared/links';

const Acquaintance: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': () => {
                gsap.fromTo(
                    '.card-image-curtain',
                    { scaleY: 1 },
                    {
                        scrollTrigger: {
                            trigger: `.${styles.cards}`,
                            start: 'top 90%',
                        },
                        duration: 1,
                        scaleY: 0,
                        transformOrigin: '50% 0%',
                        stagger: 0.15,
                        ease: 'power2.inOut',
                    }
                );
            },

            '(max-width: 640px)': () => {
                const scrollCurtains = gsap.utils.toArray(
                    '.card-image-curtain'
                ) as HTMLElement[];
                scrollCurtains.forEach((curtainElement) => {
                    gsap.fromTo(
                        curtainElement,
                        { scaleY: 1 },
                        {
                            scrollTrigger: {
                                trigger: curtainElement,
                                start: 'bottom 90%',
                            },
                            duration: 0.7,
                            scaleY: 0,
                            transformOrigin: '50% 0%',
                            stagger: 0.15,
                            ease: 'power2.inOut',
                        }
                    );
                });
            },
        });
    }, []);

    return (
        <section id={id} className={styles.root}>
            <div className="container">
                <h2 className={styles.headline}>
                    Познакомьтесь с нами поближе
                </h2>
                <div className={styles.cards}>
                    <Card
                        image={podcastCover}
                        description="Подкаст о технологиях, менеджменте и саморазвитии"
                        buttonText="ПОСЛУШАТЬ"
                        link={links.podcast}
                        curtainClassName="card-image-curtain"
                    />
                    <Card
                        image={instagramCover}
                        description="Инстаграм о нашей жизни в офисе и за его пределами"
                        buttonText="ПОСМОТРЕТЬ"
                        link={links.instagram}
                        curtainClassName="card-image-curtain"
                    />
                    <Card
                        image={telegramCover}
                        description="Телеграм-канал, где собраны
                    наши лучшие практики"
                        buttonText="ПОЧИТАТЬ"
                        link={links.telegram}
                        curtainClassName="card-image-curtain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Acquaintance;
