import React from 'react';
import * as styles from './index.module.scss';
import shLogo from '../../../assets/images/SH_logo.svg';

const Footer: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <h2 className={styles.title}>Давайте поработаем вместе?</h2>
            <div className={styles.contacts}>
                <div className={styles.contactsItem}>
                    <a className={styles.contactLink} href="tel:+78432060726">
                        +7 843 206 07 26
                    </a>
                    <span>Улица Петербургская, 50</span>
                    <span>Казань</span>
                </div>
                <div className={styles.contactsItem}>
                    <a
                        className={styles.contactLink}
                        href="mailto:hello@smarthead.ru"
                    >
                        hello@smarthead.ru
                    </a>
                    <a
                        className={styles.contactLink}
                        href="mailto:hr@smarthead.ru"
                    >
                        hr@smarthead.ru
                    </a>
                    <a className={styles.contactLink} href="#">
                        Презентация компании
                    </a>
                </div>

                <div className={styles.contactsItem}>
                    <a className={styles.contactLink} href="#">
                        Telegram
                    </a>
                    <a className={styles.contactLink} href="#">
                        YouTube
                    </a>
                    <a className={styles.contactLink} href="#">
                        LinkedIn
                    </a>
                    <a className={styles.contactLink} href="#">
                        Facebook
                    </a>
                    <a className={styles.contactLink} href="#">
                        Instagram
                    </a>
                </div>
            </div>
            <img src={shLogo} alt="SmartHead Logo" className={styles.logo} />
        </div>
    </section>
);

export default Footer;
