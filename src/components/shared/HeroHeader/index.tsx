import React, { useState, useEffect } from 'react';

import Header from '../Header';
import { scrollToSection } from '../../../utils/scroll';

import * as styles from './index.module.scss';

interface IHeader {
    menuLinks: { [key: string]: string }[];
}

const HeroHeader: React.FC<IHeader> = ({ menuLinks }) => {
    const [menuOpened, setMenuOpened] = useState(false);

    const hamburgerClickHandler = () => {
        if (menuOpened) {
            document.body.style.position = 'static';
        } else {
            document.body.style.position = 'fixed';
        }
        setMenuOpened(!menuOpened);
    };

    const handleMobileMenuClick = (linkId: string) => {
        hamburgerClickHandler();
        setMenuOpened(!menuOpened);
        scrollToSection(`#${linkId}`);
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        scrollToSection(`#${linkId}`);
    };

    const resizeHandler = () => {
        if (window.innerWidth > 768 && menuOpened) {
            hamburgerClickHandler();
        }
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    });

    return (
        <Header
            menuLinks={menuLinks}
            onDesktopMenuItemClick={handleDesktopMenuItemClick}
            onMobileMenuClick={handleMobileMenuClick}
            onHamburgerClick={hamburgerClickHandler}
            isMenuOpened={menuOpened}
            className={styles.header}
        />
    );
};

export default HeroHeader;
