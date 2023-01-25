import React from 'react';
import cn from 'classnames';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import * as styles from './index.module.scss';

const footerSocialMediaLinks = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/smarthead.digital',
        id: 1,
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/smarthead',
        id: 2,
    },
    {
        name: 'Хабр\u00a0Карьера',
        link: 'https://career.habr.com/companies/smarthead',
        id: 3,
    },
    {
        name: 'Telegram',
        link: 'https://t.me/smarthead',
        id: 4,
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/smarthead_official/',
        id: 5,
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/c/SmartheadRus',
        id: 6,
    },
    {
        name: 'ВКонтакте',
        link: 'https://vk.com/smarthead_ru',
        id: 7,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/smarthead',
        id: 5,
    },
];

const links = {
    socialMedia: footerSocialMediaLinks,
    documents: {
        privacyPolicy: {
            name: 'Политика конфиденциальности',
            link: '/files/privacy-policy.pdf',
        },
        userAgreement: {
            name: 'Пользовательское соглашение',
            link: '/files/user-agreement.pdf',
        },
        presentation: {
            name: 'Открыть презентацию',
            link: 'https://smrthd.com/about',
        },
    },
    email: {
        contact: 'hello@smarthead.ru',
        hr: 'hr@smarthead.ru',
    },
};

export const FooterContacts: React.FC = () => (
    <footer className={styles.root}>
        <div className="container">
            <div className={styles.content}>
                <img
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                />

                <div className={styles.contacts}>
                    <div className={styles.contactsItem}>
                        <a href="tel:+78432060726" target="_blank">
                            +7 843 206 07 26
                        </a>
                    </div>
                    Петербургская, 50, Казань, 420000
                </div>

                <div className={cn(styles.contacts, styles.links)}>
                    {links.socialMedia.map(({ name, link, id }, i) => (
                        <div key={id} className={styles.contactsItem}>
                            <a
                                href={link}
                                target="_blank"
                                className={cn({
                                    [styles.penultimate]: id === 4,
                                    [styles.last]:
                                        i === links.socialMedia.length - 1,
                                })}
                            >
                                {name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <hr className={styles.line} />

            <div className={cn(styles.contacts, styles.bottomContainer)}>
                <div className={styles.bottomContainerFirstBlock}>
                    <div className={styles.bottomContainerItem}>
                        <a
                            href={links.documents.privacyPolicy.link}
                            target="_blank"
                        >
                            {links.documents.privacyPolicy.name}
                        </a>
                    </div>

                    <div className={styles.bottomContainerItem}>
                        <a
                            href={links.documents.userAgreement.link}
                            target="_blank"
                        >
                            {links.documents.userAgreement.name}
                        </a>
                    </div>
                </div>

                <div>
                    <div className={styles.bottomContainerItem}>
                        <a
                            href={links.documents.presentation.link}
                            target="_blank"
                        >
                            {links.documents.presentation.name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
