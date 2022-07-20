import React from 'react';
import * as styles from './index.module.scss';
import arrowDown from '../../../assets/images/arrow-down.svg';

interface ICaseItemInfo {
    isFirst: boolean;
    title: string;
    description: string;
    onSkip: () => void;
}
export const CaseItemInfo: React.FC<ICaseItemInfo> = ({
    isFirst,
    title,
    description,
    onSkip,
}) => {
    return (
        <div className={`case-item-info ${styles.info}`}>
            {isFirst ? <h4 className={styles.headline}>КЕЙСЫ</h4> : null}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <button
                className={styles.skipButton}
                onClick={() => {
                    onSkip();
                }}
            >
                <img className={styles.skipButtonImg} src={arrowDown} alt="" />
            </button>
        </div>
    );
};

interface ICaseItemImage {
    image: string;
    origin?: string;
}

export const CaseItemImage: React.FC<ICaseItemImage> = ({ image, origin }) => {
    const bgStyle: {
        backgroundImage: string;
        backgroundPosition?: string;
    } = {
        backgroundImage: `url("${image}")`,
    };

    if (origin !== undefined) {
        bgStyle.backgroundPosition = origin;
    }

    return (
        <div
            className={`case-item-image ${styles.image}`}
            style={bgStyle}
        ></div>
    );
};
