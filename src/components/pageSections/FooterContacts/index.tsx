import React from 'react';
import cn from 'classnames';

import { FooterContactsContainer } from '../../shared/FooterContactsContainer';

import { links } from '../../shared/links';
import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import * as styles from './index.module.scss';

const socialMediaLinks = [
    {
        name: 'Facebook',
        link: links.facebook,
        id: 1,
    },
    {
        name: 'LinkedIn',
        link: links.linkedIn,
        id: 2,
    },
    {
        name: 'Хабр\u00a0Карьера',
        link: links.habrCareer,
        id: 3,
    },
    {
        name: 'Telegram',
        link: links.telegram,
        id: 4,
    },
    {
        name: 'Instagram',
        link: links.instagram,
        id: 5,
    },
    {
        name: 'YouTube',
        link: links.youtube,
        id: 6,
    },
    {
        name: 'ВКонтакте',
        link: links.vk,
        id: 7,
    },
    {
        name: 'GitHub',
        link: links.github,
        id: 5,
    },
];

export const FooterContacts: React.FC = () => (
    <FooterContactsContainer>
        <div className={styles.content}>
            <img src={shLogo} alt="SmartHead Logo" className={styles.logo} />

            <div className={styles.contacts}>
                <div className={styles.contactsItem}>
                    <a href="tel:+78432060726" target="_blank">
                        +7 843 206 07 26
                    </a>
                </div>
                Петербургская, 50, Казань, 420000
            </div>

            <div className={cn(styles.contacts, styles.links)}>
                {socialMediaLinks.map(({ name, link, id }, i) => (
                    <div
                        key={id}
                        className={cn(styles.contactsItem, {
                            [styles.penultimate]: id === 4,
                            [styles.last]: i === socialMediaLinks.length - 1,
                        })}
                    >
                        <a href={link} target="_blank">
                            {name}
                        </a>
                    </div>
                ))}
            </div>
        </div>

        <hr className={styles.line} />

        <div className={cn(styles.contacts, styles.bottomContainer)}>
            <div className={styles.bottomContainerFirstBlock}>
                <div
                    className={cn(
                        styles.bottomContainerItem,
                        styles.bottomContainerFistItem
                    )}
                >
                    <a href={links.privacyPolicy} target="_blank">
                        Политика конфиденциальности
                    </a>
                </div>

                <div className={styles.bottomContainerItem}>
                    <a href={links.userAgreement} target="_blank">
                        Пользовательское соглашение
                    </a>
                </div>
            </div>

            <div>
                <div className={styles.bottomContainerItem}>
                    <a href={links.presentation} target="_blank">
                        Открыть презентацию
                    </a>
                </div>
            </div>
        </div>
    </FooterContactsContainer>
);
