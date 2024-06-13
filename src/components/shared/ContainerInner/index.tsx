import React from 'react';

import * as styles from './index.module.scss';

export const ContainerInner: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return <div className={styles.root}>{children}</div>;
};
