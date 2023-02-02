import React from 'react';
import cn from 'classnames';

import * as styles from './index.module.scss';

interface SectionProps {
    children: React.ReactNode;
    theme?: 'dark' | 'light';
    className?: string;
    id?: string;
}

const themes = {
    dark: [styles.dark],
    light: [styles.light],
};

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    theme = 'light',
    id,
}) => (
    <section
        id={id ? id : undefined}
        className={cn(styles.root, className, themes[theme])}
    >
        <div className="container">{children}</div>
    </section>
);
