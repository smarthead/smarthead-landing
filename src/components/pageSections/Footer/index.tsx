import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { scrollToTop } from '../../../utils/scroll';
import * as styles from './index.module.scss';
import shLogo from '../../../assets/images/SH_logo.svg';
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
                            href="tel:+78432060726"
                        >
                            +7 843 206 07 26
                        </a>
                        <span>Улица Петербургская, 50</span>
                        <span>Казань</span>
                    </div>
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
                        <a className={styles.contactLink} href="#">
                            Презентация компании
                        </a>
                    </div>

                    <div className={styles.contactsItem}>
                        <a className={styles.contactLink} href={links.telegram}>
                            Telegram
                        </a>
                        <a className={styles.contactLink} href={links.youtube}>
                            YouTube
                        </a>
                        <a className={styles.contactLink} href={links.linkedIn}>
                            LinkedIn
                        </a>
                        <a className={styles.contactLink} href={links.facebook}>
                            Facebook
                        </a>
                        <a
                            className={styles.contactLink}
                            href={links.instagram}
                        >
                            Instagram
                        </a>
                        <a
                            className={styles.contactLink}
                            href={links.habrCareer}
                        >
                            Хабр Карьера
                        </a>
                    </div>
                    <div className={styles.border}></div>
                </div>

                <img
                    onClick={scrollToTop}
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                />
            </div>
        </section>
    );
};

export default Footer;
