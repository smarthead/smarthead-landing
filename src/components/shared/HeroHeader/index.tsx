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

    const mobileMenuClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();

        const target = e.target as HTMLElement;
        const isMenuLink = target.className.includes(styles.mobileMenuLink);
        if (isMenuLink) {
            hamburgerClickHandler();
            setMenuOpened(!menuOpened);
            const targetSectionId = target.getAttribute('href');

            scrollToSection(targetSectionId);
        }
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
            onMobileMenuClick={mobileMenuClickHandler}
            onHamburgerClick={hamburgerClickHandler}
            isMenuOpened={menuOpened}
            className={styles.header}
        />
    );
};

export default HeroHeader;
