import React from 'react';
import * as styles from './index.module.scss';

interface IHeaderProps {
    title: string;
}

const Header: React.FC<IHeaderProps> = ({
    title,
}) => (
    <header className={styles.root}>
        {title}
    </header>
);

export default Header;
