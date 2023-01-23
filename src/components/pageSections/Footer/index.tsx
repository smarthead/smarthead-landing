import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SectionTitle } from '../../shared/SectionTitle';

import { links } from '../../shared/links';
import * as styles from './index.module.scss';

const Footer: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            [
                `.${styles.title}`,
                `.${styles.contactsItem}`,
                `.${styles.border}`,
            ],
            { yPercent: gsap.utils.wrap([60, 20, 20, 20, 200]), autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.title}`,
                    start: () =>
                        window.innerWidth < 641 ? '0% 80%' : 'top 70%',
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.2,
            }
        );
    }, []);
    return (
        <section id={id} className={styles.root}>
            <div className="container">
                <SectionTitle className={styles.title}>
                    Давайте поработаем вместе?
                </SectionTitle>

                <div className={styles.contacts}>
                    <div className={styles.contactsItem}>
                        <a
                            className={styles.contactLink}
                            href={`mailto:${links.email.contact}`}
                        >
                            {links.email.contact}
                        </a>
                        <a
                            className={styles.contactLink}
                            href={`mailto:${links.email.hr}`}
                        >
                            {links.email.hr}
                        </a>
                        <a
                            className={styles.contactLink}
                            href={links.presentation}
                            target="_blank"
                        >
                            Презентация компании
                        </a>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.telegram}
                        >
                            Telegram
                        </a>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.youtube}
                        >
                            YouTube
                        </a>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.linkedIn}
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className={styles.contactsItem}>
                        <a
                            className={styles.contactLink}
                            href="tel:+78432060726"
                        >
                            +7 843 206 07 26
                        </a>
                        <span>Казань, Петербургская, 50</span>
                        <span>&nbsp;</span>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.facebook}
                        >
                            Facebook
                        </a>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.instagram}
                        >
                            Instagram
                        </a>
                        <a
                            className={`${styles.contactLink} ${styles.socialNetworkMobile}`}
                            target="_blank"
                            href={links.habrCareer}
                        >
                            Хабр Карьера
                        </a>
                    </div>
                    <div
                        className={`${styles.contactsItem} ${styles.socialNetworkDesktop}`}
                    >
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.telegram}
                        >
                            Telegram
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.youtube}
                        >
                            YouTube
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.linkedIn}
                        >
                            LinkedIn
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.facebook}
                        >
                            Facebook
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.instagram}
                        >
                            Instagram
                        </a>
                        <a
                            className={styles.contactLink}
                            target="_blank"
                            href={links.habrCareer}
                        >
                            Хабр Карьера
                        </a>
                    </div>
                    <div className={styles.border}></div>
                </div>

                <div className={styles.legalBlock}>
                    <p>
                        <a
                            className={styles.legalLink}
                            target="_blank"
                            href={links.privacyPolicy}
                        >
                            Политика Конфиденциальности
                        </a>{' '}
                        <span className={styles.delimeter}>
                            &nbsp;/&nbsp;&nbsp;
                        </span>
                        <a
                            className={styles.legalLink}
                            target="_blank"
                            href={links.userAgreement}
                        >
                            Пользовательское Соглашение
                        </a>
                    </p>
                    <p>©SmartHead. Все права защищены.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
