import React from 'react';
import ButtonLink from '../ButtonLink';
import * as styles from './index.module.scss';

interface ICardProps {
    image: string;
    description: string;
    buttonText: string;
    link: string;
}
const Card: React.FC<ICardProps> = ({
    image,
    description,
    buttonText,
    link,
}) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.cover}
                style={{ backgroundImage: `url("${image}")` }}
            ></div>
            <div className={styles.description}>
                <p className={styles.descriptionText}>{description}</p>
                <ButtonLink text={buttonText} link={link} type="black" />
            </div>
        </div>
    );
};

export default Card;
