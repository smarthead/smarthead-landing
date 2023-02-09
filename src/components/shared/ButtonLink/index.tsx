import React from 'react';
import cn from 'classnames';

import * as styles from './index.module.scss';
import ArrowRightBlack from '../../../assets/images/Arrow-Right-Black.svg';
import ArrowRightWhite from '../../../assets/images/Arrow-Right-White.svg';
import { Link } from 'gatsby';

type ButtonColor = 'yellow' | 'black';

interface IButtonLinkProps {
    className?: string;
    text: string;
    link: string;
    clickHandler?: () => void;
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
    clickHandler,
    withIcon,
    external = false,
}) => {
    const buttonColor =
        (color && buttonColorPresets[color]) || buttonColorPresets.yellow;

    const handleButtonLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (clickHandler !== undefined) {
            e.preventDefault();
            clickHandler();
        }
    };

    const linkContent = (
        <>
            {withIcon && (
                <img
                    src={buttonColor.arrowSrc}
                    alt="Arrow right icon"
                    className={styles.arrow}
                />
            )}
            {text}
        </>
    );

    const linkClasses = cn(styles.button, buttonColor.style, className);
    return external ? (
        <a
            href={link}
            target="_blank"
            className={linkClasses}
            onClick={handleButtonLinkClick}
        >
            {linkContent}
        </a>
    ) : (
        <Link to={link} onClick={handleButtonLinkClick} className={linkClasses}>
            {linkContent}
        </Link>
    );
};

export default ButtonLink;
