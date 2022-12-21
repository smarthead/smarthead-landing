import React, { useState } from 'react';

import Header from '../Header';
import { scrollToSection } from '../../../utils/scroll';

import * as styles from './index.module.scss';

interface IHeader {
    menuLinks: { [key: string]: string }[];
}

const HeroHeader: React.FC<IHeader> = ({ menuLinks }) => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleHamburgerClick = () => {
        if (isMobileMenuOpened) {
            document.body.style.position = 'static';
        } else {
            document.body.style.position = 'fixed';
        }
        setIsMobileMenuOpened(!isMobileMenuOpened);
    };

    const handleMobileMenuClick = (linkId: string) => {
        handleHamburgerClick();
        setIsMobileMenuOpened(!isMobileMenuOpened);
        scrollToSection(`#${linkId}`);
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        scrollToSection(`#${linkId}`);
    };

    return (
        <Header
            menuLinks={menuLinks}
            onDesktopMenuItemClick={handleDesktopMenuItemClick}
            onMobileMenuClick={handleMobileMenuClick}
            onHamburgerClick={handleHamburgerClick}
            isMenuOpened={isMobileMenuOpened}
            className={styles.header}
        />
    );
};

export default HeroHeader;
