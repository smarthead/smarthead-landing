import React from 'react';

import * as styles from './index.module.scss';

import cn from 'classnames';

export const Container: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return <div className={cn(styles.root, className)}>{children}</div>;
};
