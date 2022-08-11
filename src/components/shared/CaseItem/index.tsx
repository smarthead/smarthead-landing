import React from 'react';
import * as styles from './index.module.scss';
import { arrayToParagraphs } from '../../../utils/arrayToParagraphs';

import arrowDown from '../../../assets/images/Arrow-Down.svg';

interface ICaseItemInfo {
    isFirst: boolean;
    sectionTitle: string;
    title: string;
    description: string | string[];
    onSkip: () => void;
}
export const CaseItemInfo: React.FC<ICaseItemInfo> = ({
    isFirst,
    sectionTitle,
    title,
    description,
    onSkip,
}) => {
    return (
        <div className={`case-item-info ${styles.info}`}>
            {isFirst && <h4 className={styles.headline}>{sectionTitle}</h4>}
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.description}>
                {arrayToParagraphs(description)}
            </div>
            <button
                className={styles.skipButton}
                onClick={() => {
                    onSkip();
                }}
            >
                <img
                    className={styles.skipButtonImg}
                    src={arrowDown}
                    alt="Arrow down icon"
                />
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
