import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';

import ButtonLink from '../ButtonLink';
import { scrollToSection } from '../../../utils/scroll';
import { useStickyHeader } from './useStickyHeader';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { navigation } from '../navigation';

interface IHeader {
    menuLinks: { [key: string]: string }[];
    buttonText: string;
    heroSectionHeight: number | null;
}

const StickyHeader: React.FC<IHeader> = ({
    menuLinks,
    buttonText,
    heroSectionHeight,
}) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const savedScrollYRef = useRef<number>(0);

    const hamburgerClickHandler = () => {
        if (menuOpened) {
            document.body.style.position = 'static';
            scrollTo(0, savedScrollYRef.current);
        } else {
            savedScrollYRef.current = window.scrollY;
            document.body.style.position = 'fixed';
        }
        setMenuOpened(!menuOpened);
    };

    const mobileMenuClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsScrollBehaviorDisabled(true);

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
        setIsScrollBehaviorDisabled(true);

        scrollToSection(`#${linkId}`);
    };

    const handleButtonClick = () => {
        setIsScrollBehaviorDisabled(true);

        scrollToSection(`#${navigation.contacts}`);
    };

    const { isStickyHeaderShown, setIsScrollBehaviorDisabled } =
        useStickyHeader(heroSectionHeight);

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
        <header
            className={cn(styles.header, 'container', {
                [styles.headerAnimationOn]: isStickyHeaderShown,
            })}
        >
            <nav className={cn(styles.navbar)}>
                <img
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                />

                <div className={styles.menuContainer}>
                    <ButtonLink
                        className={styles.menuButton}
                        type="yellow"
                        text={buttonText}
                        link={`#${navigation.contacts}`}
                        clickHandler={handleButtonClick}
                    />

                    <div className={styles.menu}>
                        {menuLinks.map((link) => (
                            <a
                                key={link.id}
                                className={styles.menuLink}
                                onClick={() =>
                                    handleDesktopMenuItemClick(link.id)
                                }
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
                </div>
            </nav>
        </header>
    );
};

export default StickyHeader;
