import React, { useState } from 'react';
import Header from '../Header';

import * as styles from './index.module.scss';

interface HeroHeaderProps {
    menuLinks: { [key: string]: string }[];
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ menuLinks }) => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleHamburgerClick = () => {
        if (isMobileMenuOpened) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
        setIsMobileMenuOpened(!isMobileMenuOpened);
    };

    return (
        <Header
            menuLinks={menuLinks}
            onHamburgerClick={handleHamburgerClick}
            isMenuOpened={isMobileMenuOpened}
            className={styles.header}
        />
    );
};

export default HeroHeader;
