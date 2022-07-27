import React from 'react';
import { links } from '../../shared/links';
import * as styles from './index.module.scss';

interface ICookiesNotification {
    clickHandler: () => void;
}

const CookiesNotification: React.FC<ICookiesNotification> = ({
    clickHandler,
}) => (
    <div className={styles.root}>
        <div className={styles.content}>
            <span className={styles.text}>
                Мы используем cookie для нормальной работы сайта. <br />
                Подробнее в{' '}
                <a
                    className={styles.link}
                    target="_blank"
                    href={links.privacyPolicy}
                >
                    политике&nbsp;конфиденциальности
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
