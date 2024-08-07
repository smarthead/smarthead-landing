import React from 'react';
import cn from 'classnames';

import { links } from '@/shared/links';
import { FooterContactsContainer } from '@/shared/FooterContactsContainer';

import shLogo from '@/assets/images/SmartHead-Logo.svg';
import * as styles from './index.module.scss';

export const FooterContactsEn: React.FC = () => (
    <FooterContactsContainer>
        <div className={styles.content}>
            <div className={cn(styles.contentItem, styles.companyInfo)}>
                <img
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                />

                <span className={styles.address}>
                    SmartHead&nbsp;LLC, San&nbsp;Francisco, USA
                </span>
            </div>

            <div className={styles.contentItem}>
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
                    href={links.privacyPolicy}
                >
                    Privacy Policy
                </a>
            </div>
        </div>
    </FooterContactsContainer>
);
