import React from 'react';
import { arrayToParagraphs } from '../../../utils/arrayToParagraphs';
import { arrayToString } from '../../../utils/arrayToString';
import * as styles from './index.module.scss';

interface IReviewItem {
    className: string;
    isActive: boolean;
    photo: string;
    text: string[];
    name: string;
    position: string;
}
const ReviewItem: React.FC<IReviewItem> = ({
    className,
    isActive,
    photo,
    text,
    name,
    position,
}) => {
    return (
        <div
            className={`${styles.review} ${className} ${
                !isActive && styles.nonActive
            }`}
        >
            <div className={styles.personalInfo}>
                <div className={styles.photo}>
                    <img className={styles.photoImage} src={photo} alt="" />
                </div>
                <div className={styles.personalInfoText}>
                    <h3 className={styles.name}>{name}</h3>
                    <h4 className={styles.position}>
                        {arrayToString(position)}
                    </h4>
                </div>
            </div>
            <div className={styles.text}>{arrayToParagraphs(text)}</div>
        </div>
    );
};

export default ReviewItem;
