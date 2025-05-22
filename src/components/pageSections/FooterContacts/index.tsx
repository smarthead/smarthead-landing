import React from 'react';
import cn from 'classnames';

import { FooterContactsContainer } from '@/shared/FooterContactsContainer';

import { links } from '@/shared/links';
import shLogo from '@/assets/images/SmartHead-Logo.svg';
import * as styles from './index.module.scss';

const socialMediaLinks = [
    // {
    //     name: 'Facebook',
    //     link: links.facebook,
    //     id: 1,
    // },
    {
        name: 'Хабр\u00a0Карьера',
        link: links.habrCareer,
        id: 2,
    },
    {
        name: 'LinkedIn',
        link: links.linkedIn,
        id: 3,
    },
    {
        name: 'GitHub',
        link: links.github,
        id: 4,
    },
    // {
    //     name: 'Instagram',
    //     link: links.instagram,
    //     id: 5,
    // },
    // {
    //     name: 'YouTube',
    //     link: links.youtube,
    //     id: 6,
    // },
    {
        name: 'ВКонтакте',
        link: links.vk,
        id: 7,
    },
    {
        name: 'Telegram',
        link: links.telegram,
        id: 8,
    },
];

export const FooterContacts: React.FC = () => (
    <FooterContactsContainer className={styles.root}>
        <div className={styles.content}>
                <img src={shLogo} alt="SmartHead Logo" className={styles.logo} />


            <div className={styles.contentInfo}>
                <div className={cn(styles.companyInfo)}>
                    Общество с&nbsp;ограниченной ответственностью&nbsp;«СмартХэд»
                </div>
                <div className={styles.legal}>
                    ОКВЭД 62.02
                    <br />
                    ИНН 1655147750
                    <br />
                    ОГРН 1071690068757
                </div>
                <div className={styles.contacts}>
                    420107, Республика Татарстан, г. Казань,
                    Петербургская&nbsp;ул, д.&nbsp;50 к.&nbsp;5, офис&nbsp;1
                    <div className={styles.contactsItem}>
                        <a href="tel:+78432060726" target="_blank">
                            +7 843 206 07 26
                        </a>
                    </div>
                </div>

                <div className={cn(styles.links)}>
                    {socialMediaLinks.map(({ name, link, id }, i) => (
                        <div key={id} className={cn(styles.linksItem)}>
                            <a href={link} target="_blank">
                                {name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <hr className={styles.line} />

        <div className={cn(styles.content, styles.bottomContainer)}>

            <div className={cn(styles.contentInfo, styles.contentInfoBottom)}>
                <div className={styles.bottomContainerItem}>
                    <a href={links.presentation} target="_blank">
                        Открыть презентацию
                    </a>
                </div>
                <div className={styles.bottomContainerItem}>
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
        </div>
    </FooterContactsContainer>
);
