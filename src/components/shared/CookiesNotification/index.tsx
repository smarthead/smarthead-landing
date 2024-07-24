import React, { useEffect, useState } from 'react';
import { arrayToString } from '@/utils/arrayToString';

import { links } from '../links';
import * as styles from './index.module.scss';

interface ICookiesNotification {
    data: {
        title: string | string[];
        linkText: string;
    };
}

const COOKIE_KEY = 'cookiesAccepted';

const CookiesNotification: React.FC<ICookiesNotification> = ({ data }) => {
    const [cookiesAccepted, setCookiesAccepted] = useState(true);
    useEffect(() => {
        const localStorageCookiesAccepted = localStorage.getItem(COOKIE_KEY);

        if (localStorageCookiesAccepted !== 'true') {
            setCookiesAccepted(false);
        }
    }, []);

    const handleButtonClick = () => {
        setCookiesAccepted(true);
        localStorage.setItem(COOKIE_KEY, 'true');
    };

    return !cookiesAccepted ? (
        <div className={styles.root}>
            <div className={styles.content}>
                <span className={styles.text}>
                    {arrayToString(data.title)}
                    <a
                        className={styles.link}
                        target="_blank"
                        href={links.privacyPolicy}
                    >
                        {arrayToString(data.linkText)}
                    </a>
                    .
                </span>
                <button className={styles.button} onClick={handleButtonClick}>
                    OK
                </button>
            </div>
        </div>
    ) : null;
};

export default CookiesNotification;
