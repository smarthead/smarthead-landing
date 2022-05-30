import React from 'react';
import * as styles from './index.module.scss';
import ArrowRightBlack from '../../../assets/images/arrow-right-black.svg';
import ArrowRightWhite from '../../../assets/images/arrow-right-white.svg';

interface IButtonLinkProps {
    text: string;
    type: string;
    link: string;
}
type TButtonPreset = {
    [name: string]: { style: string; arrowSrc: string };
};
const ButtonLink: React.FC<IButtonLinkProps> = ({ text, type, link }) => {
    const buttonPresets: TButtonPreset = {
        yellow: {
            style: styles.yellowButton,
            arrowSrc: ArrowRightBlack,
        },
        black: {
            style: styles.blackButton,
            arrowSrc: ArrowRightWhite,
        },
    };
    const buttonSettings = buttonPresets[type] || buttonPresets.yellow;

    return (
        <a href={link} className={`${styles.button} ${buttonSettings.style}`}>
            <img
                src={buttonSettings.arrowSrc}
                alt="Arrow right icon"
                className={styles.arrow}
            />
            {text}
        </a>
    );
};

export default ButtonLink;
