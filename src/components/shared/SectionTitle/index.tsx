import React from 'react';
import * as styles from './index.module.scss';
import cn from 'classnames';

type SectionTitleColors = 'white' | 'black';

interface SectionTitleProps {
    children: React.ReactNode;
    color?: SectionTitleColors;
    className?: string;
}

const titleColorPresets = {
    white: styles.white,
    black: styles.black,
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    color = 'white',
    className,
}) => (
    <h2 className={cn(styles.title, titleColorPresets[color], className)}>
        {children}
    </h2>
);
