import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../../../utils/scroll';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { links } from '../links';

interface IHeader {
    menuLinks: { [key: string]: string }[];
}

const Header: React.FC<IHeader> = ({ menuLinks }) => {
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
    const desktopMenuClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        const targetSectionId = (e.target as HTMLElement).getAttribute('href');
        scrollToSection(targetSectionId);
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
        <header>
            <nav className={styles.navbar}>
                <img
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                />

                <div className={styles.menu} onClick={desktopMenuClickHandler}>
                    {menuLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={styles.menuLink}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div
                    className={`${styles.mobileMenu} ${
                        menuOpened ? styles.mobileMenuOpened : ''
                    }`}
                    onClick={mobileMenuClickHandler}
                >
                    {menuLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={styles.mobileMenuLink}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div
                    className={`${styles.hamburger} ${
                        menuOpened ? styles.hamburgerClose : ''
                    }`}
                    onClick={hamburgerClickHandler}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;