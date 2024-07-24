import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FontFaceObserver from 'fontfaceobserver';

import Card from '@/shared/Card';
import { SectionTitle } from '@/shared/SectionTitle';
import { Section } from '@/shared/Section';
import { Container } from '@/shared/Container';

import podcastCover from '@/assets/images/Podcast-Cover.webp';
import instagramCover from '@/assets/images/Instagram-Cover.webp';
import telegramCover from '@/assets/images/Telegram-Cover.webp';

import podcastCoverMobile from '@/assets/images/Podcast-Cover-Mobile.webp';
import instagramCoverMobile from '@/assets/images/Instagram-Cover-Mobile.webp';
import telegramCoverMobile from '@/assets/images/Telegram-Cover-Mobile.webp';

import { links } from '@/shared/links';
import * as styles from './index.module.scss';

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
        <Section theme={'dark'} id={id}>
            <Container>
                <SectionTitle className={styles.headline}>
                    Познакомьтесь с нами поближе
                </SectionTitle>

                <div className={styles.cards}>
                    <Card
                        image={isMobile ? podcastCoverMobile : podcastCover}
                        description={
                            <>
                                Подкаст о&nbsp;технологиях,
                                <br />
                                менеджменте
                                <br />
                                и&nbsp;саморазвитии
                            </>
                        }
                        buttonText="ПОСЛУШАТЬ"
                        link={links.podcast}
                        curtainClassName="card-image-curtain"
                        triggerClassName="card-trigger"
                    />
                    <Card
                        image={isMobile ? instagramCoverMobile : instagramCover}
                        description={
                            <>
                                Инстаграм о&nbsp;нашей
                                <br />
                                жизни в&nbsp;офисе
                                <br />
                                и&nbsp;за&nbsp;его пределами
                            </>
                        }
                        buttonText="ПОСМОТРЕТЬ"
                        link={links.instagram}
                        curtainClassName="card-image-curtain"
                        triggerClassName="card-trigger"
                    />
                    <Card
                        image={isMobile ? telegramCoverMobile : telegramCover}
                        description={
                            <>
                                Телеграм-канал, где
                                <br />
                                собраны наши лучшие
                                <br />
                                практики
                            </>
                        }
                        buttonText="ПОЧИТАТЬ"
                        link={links.telegram}
                        curtainClassName="card-image-curtain"
                        triggerClassName="card-trigger"
                    />
                </div>
            </Container>
        </Section>
    );
};

export default Acquaintance;
