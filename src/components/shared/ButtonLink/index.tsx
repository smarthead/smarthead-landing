import React from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import * as styles from './index.module.scss';
import ArrowRightBlack from '../../../assets/images/Arrow-Right-Black.svg';
import ArrowRightWhite from '../../../assets/images/Arrow-Right-White.svg';

type ButtonColor = 'yellow' | 'black';

interface IButtonLinkProps {
    className?: string;
    text: string;
    link: string;
    onClick?: () => void;
    color?: ButtonColor;
    withIcon?: boolean;
    external?: boolean;
}
type ButtonColorPreset = {
    [name: string]: { style: string; arrowSrc: string };
};

const buttonColorPresets: ButtonColorPreset = {
    yellow: {
        style: styles.yellowButton,
        arrowSrc: ArrowRightBlack,
    },
    black: {
        style: styles.blackButton,
        arrowSrc: ArrowRightWhite,
    },
};

const ButtonLink: React.FC<IButtonLinkProps> = ({
    text,
    color,
    link,
    className,
    onClick,
    withIcon,
    external,
}) => {
    const buttonColor =
        (color && buttonColorPresets[color]) || buttonColorPresets.yellow;

    const handleButtonLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick !== undefined) {
            e.preventDefault();
            onClick();
        }
    };

    const img = withIcon && (
        <img
            src={buttonColor.arrowSrc}
            alt="Arrow right icon"
            className={styles.arrow}
        />
    );

    return external ? (
        <a
            href={link}
            target="_blank"
            className={cn(styles.button, buttonColor.style, className)}
            onClick={handleButtonLinkClick}
        >
            {img}
            {text}
        </a>
    ) : (
        <Link
            to={link}
            onClick={handleButtonLinkClick}
            className={cn(styles.button, buttonColor.style, className)}
        >
            {img}
            {text}
        </Link>
    );
};

export default ButtonLink;
