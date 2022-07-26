import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { scrollToTop } from '../../../utils/scroll';
import * as styles from './index.module.scss';
import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { links } from '../../shared/links';

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
                    trigger: `.${styles.root}`,
                    start: 'top 70%',
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
                <h2 className={styles.title}>Давайте поработаем вместе?</h2>
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
                    </div>
                    <div className={styles.contactsItem}>
                        <a
                            className={styles.contactLink}
                            href="tel:+78432060726"
                        >
                            +7 843 206 07 26
                        </a>
                        <span>Казань, Петербургская, 50</span>
                    </div>
                    <div className={styles.contactsItem}>
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
