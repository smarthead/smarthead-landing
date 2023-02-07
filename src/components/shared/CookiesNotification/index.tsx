import React from 'react';
import { arrayToString } from '../../../utils/arrayToString';

import { links } from '../links';
import * as styles from './index.module.scss';

interface ICookiesNotification {
    clickHandler: () => void;
    data: {
        title: string | string[];
        linkText: string;
    };
}

const CookiesNotification: React.FC<ICookiesNotification> = ({
    clickHandler,
    data,
}) => (
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
            <button className={styles.button} onClick={clickHandler}>
                OK
            </button>
        </div>
    </div>
);

export default CookiesNotification;
