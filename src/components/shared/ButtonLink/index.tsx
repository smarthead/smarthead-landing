import React from 'react';
import cn from 'classnames';

import * as styles from './index.module.scss';
import ArrowRightBlack from '../../../assets/images/Arrow-Right-Black.svg';
import ArrowRightWhite from '../../../assets/images/Arrow-Right-White.svg';

type ButtonColor = 'yellow' | 'black';

interface IButtonLinkProps {
    className?: string;
    text: string;
    link: string;
    clickHandler?: () => void;
    color?: ButtonColor;
    withIcon?: boolean;
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
}) => {
    const buttonColor =
        (color && buttonColorPresets[color]) || buttonColorPresets.yellow;

    const handleButtonLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (clickHandler !== undefined) {
            e.preventDefault();
            clickHandler();
        }
    };

    return (
        <a
            href={link}
            target="_blank"
            onClick={handleButtonLinkClick}
            className={cn(styles.button, buttonColor.style, className)}
        >
            {withIcon && (
                <img
                    src={buttonColor.arrowSrc}
                    alt="Arrow right icon"
                    className={styles.arrow}
                />
            )}
            {text}
        </a>
    );
};

export default ButtonLink;
