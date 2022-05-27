import React from 'react';
import * as styles from './index.module.scss';
import ArrowRight from '../../../assets/images/arrow-right.svg';
interface IButtonLinkProps {
    text: string;
    type: string;
}

const ButtonLink: React.FC<IButtonLinkProps> = ({ text, type }) => (
    <a
        href="#"
        className={type === 'yellow' ? styles.yellowButton : styles.blackButton}
    >
        <img src={ArrowRight} alt="Arrow right icon" className={styles.arrow} />
        {text}
    </a>
);

export default ButtonLink;
