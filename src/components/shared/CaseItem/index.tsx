import React from 'react';
import { arrayToParagraphs } from '../../../utils/arrayToParagraphs';
import * as styles from './index.module.scss';

interface ICaseItemInfo {
    isFirst: boolean;
    sectionTitle: string;
    title: string;
    description: string | string[];
}
export const CaseItemInfo: React.FC<ICaseItemInfo> = ({
    isFirst,
    sectionTitle,
    title,
    description,
}) => (
    <div className={`case-item-info ${styles.info}`}>
        {isFirst && <h4 className={styles.headline}>{sectionTitle}</h4>}

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.description}>
            {arrayToParagraphs(description)}
        </div>
    </div>
);

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
        <div className={`case-item-image ${styles.image}`} style={bgStyle} />
    );
};
