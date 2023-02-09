import React from 'react';
import ButtonLink from '../ButtonLink';
import * as styles from './index.module.scss';

interface ICardProps {
    image: string;
    description: string;
    buttonText: string;
    link: string;
    curtainClassName: string;
    triggerClassName: string;
}
const Card: React.FC<ICardProps> = ({
    image,
    description,
    buttonText,
    link,
    curtainClassName,
    triggerClassName,
}) => {
    return (
        <div className={`${styles.card} ${triggerClassName}`}>
            <div
                className={styles.cover}
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className={`${curtainClassName} ${styles.curtain}`}></div>
            </div>
            <div className={styles.description}>
                <p className={styles.descriptionText}>{description}</p>
                <ButtonLink
                    text={buttonText}
                    link={link}
                    color="black"
                    withIcon
                    external
                />
            </div>
        </div>
    );
};

export default Card;
