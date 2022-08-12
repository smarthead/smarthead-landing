import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FontFaceObserver from 'fontfaceobserver';

import * as styles from './index.module.scss';
import Card from '../../shared/Card';
import podcastCover from '../../../assets/images/Podcast-Cover.jpg';
import instagramCover from '../../../assets/images/Instagram-Cover.jpg';
import telegramCover from '../../../assets/images/Telegram-Cover.jpg';

import podcastCoverMobile from '../../../assets/images/Podcast-Cover-Mobile.jpg';
import instagramCoverMobile from '../../../assets/images/Instagram-Cover-Mobile.jpg';
import telegramCoverMobile from '../../../assets/images/Telegram-Cover-Mobile.jpg';

import { links } from '../../shared/links';

const Acquaintance: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);
    const [isMobile, setMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 641) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    };

    useEffect(() => {
        const fontGilroyBold = new FontFaceObserver('Gilroy-Regular');
        const fontInterRegular = new FontFaceObserver('Inter-SemiBold');

        Promise.all([fontGilroyBold.load(), fontInterRegular.load()]).then(
            () => {
                ScrollTrigger.refresh();
            }
        );

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

                const cardTriggers = gsap.utils.toArray(
                    '.card-trigger'
                ) as HTMLElement[];
                scrollCurtains.forEach((curtainElement, i) => {
                    gsap.fromTo(
                        curtainElement,
                        { scaleY: 1 },
                        {
                            scrollTrigger: {
                                trigger: cardTriggers[i],
                                start: '40% 100%',
                            },
                            duration: 0.7,
                            scaleY: 0,
                            transformOrigin: '50% 0%',
                            ease: 'power2.inOut',
                        }
                    );
                });
            },
        });

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id={id} className={styles.root}>
            <div className="container">
                <h2 className={styles.headline}>
                    Познакомьтесь с нами поближе
                </h2>
                <div className={styles.cards}>
                    <Card
                        image={isMobile ? podcastCoverMobile : podcastCover}
                        description="Подкаст о технологиях, менеджменте и саморазвитии"
                        buttonText="ПОСЛУШАТЬ"
                        link={links.podcast}
                        curtainClassName="card-image-curtain"
                        triggerClassName="card-trigger"
                    />
                    <Card
                        image={isMobile ? instagramCoverMobile : instagramCover}
                        description="Инстаграм о нашей жизни в офисе и за его пределами"
                        buttonText="ПОСМОТРЕТЬ"
                        link={links.instagram}
                        curtainClassName="card-image-curtain"
                        triggerClassName="card-trigger"
                    />
                    <Card
                        image={isMobile ? telegramCoverMobile : telegramCover}
                        description="Телеграм-канал, где собраны
                    наши лучшие практики"
                        buttonText="ПОЧИТАТЬ"
                        link={links.telegram}
                        curtainClassName="card-image-curtain"
                        triggerClassName="card-trigger"
                    />
                </div>
            </div>
        </section>
    );
};

export default Acquaintance;
