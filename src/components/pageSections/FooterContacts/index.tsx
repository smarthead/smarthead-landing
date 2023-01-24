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
                    <a href="tel:+78432060726" target="_blank">
                        +7 843 206 07 26
                    </a>
                    Петербургская, 50, Казань, 420000
                </div>

                <div className={cn(styles.contacts, styles.links)}>
                    {links.socialMedia.map(({ name, link, id }) => (
                        <a href={link} target="_blank" key={id}>
                            {name}
                        </a>
                    ))}
                </div>
            </div>

            <hr />

            <div className={cn(styles.bottomContainer, styles.contacts)}>
                <div className={styles.bottomContainerFirstBlock}>
                    <a
                        href={links.documents.privacyPolicy.link}
                        target="_blank"
                    >
                        {links.documents.privacyPolicy.name}
                    </a>

                    <a
                        href={links.documents.userAgreement.link}
                        target="_blank"
                    >
                        {links.documents.userAgreement.name}
                    </a>
                </div>

                <div>
                    <a href={links.documents.presentation.link} target="_blank">
                        {links.documents.presentation.name}
                    </a>
                </div>
            </div>
        </div>
    </footer>
);
