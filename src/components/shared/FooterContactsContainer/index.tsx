import React from 'react';
import * as styles from './index.module.scss';
import cn from 'classnames';

import { Container } from '../Container';

interface FooterContactsContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const FooterContactsContainer: React.FC<
    FooterContactsContainerProps
> = ({ children, className }) => (
    <footer className={cn(styles.root, className)}>
        <Container>{children}</Container>
    </footer>
);
