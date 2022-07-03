import React from 'react';
import * as styles from './index.module.scss';
import arrowDown from '../../../assets/images/arrow-down.svg';

interface ICaseItemInfo {
    title: string;
    description: string;
    onSkip: () => void;
}
export const CaseItemInfo: React.FC<ICaseItemInfo> = ({
    title,
    description,
    onSkip,
}) => {
    return (
        <div className={`case-item-info ${styles.info}`}>
            <h4 className={styles.headline}>КЕЙСЫ</h4>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <button
                className={styles.skipButton}
                onClick={() => {
                    onSkip();
                }}
            >
                <img src={arrowDown} alt="" />
            </button>
        </div>
    );
};

interface ICaseItemImage {
    image: string;
}
export const CaseItemImage: React.FC<ICaseItemImage> = ({ image }) => {
    return (
        <div
            className={`case-item-image ${styles.image}`}
            style={{ backgroundImage: `url("${image}")` }}
        ></div>
    );
};
