import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import { scrollToSection } from '../../../utils/scroll';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { navigation } from '../navigation';
import ButtonLink from '../ButtonLink';
import { useWindowScrollY } from '../../../utils/hooks/useWindowScrollY';
import { useVerticalScrollDirection, VerticalScrollDirection } from '../../../utils/hooks/useVerticalScrollDirection';

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
            scrollToSection({ section: targetSectionId });
        }
    };

    const [isScrollByMenuCLick, setIsScrollByMenuClick] = useState(false);

    const handleDesktopMenuItemClick = (linkId:string) => {
        setIsScrollByMenuClick(true);
        scrollToSection({
            section: `#${linkId}`,
            onComplete: () => {
                setIsScrollByMenuClick(false);
            }
        });
    }

    const handleButtonClick = () => {
        setIsScrollByMenuClick(true);
        scrollToSection({
            section: `#${navigation.contacts}`,
            onComplete: () => {
                setIsScrollByMenuClick(false);
            }
        });
    }

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

    const scrollY = useWindowScrollY();
    const scrollYDirection = useVerticalScrollDirection();

    const [isFixedHeaderShown, setIsFixedHeaderShown] = useState(false);

    const handleScroll = useCallback(() => {
        if (scrollY > Number(heroSectionHeight)) {
            if (scrollYDirection === VerticalScrollDirection.up) {
                setIsFixedHeaderShown(true);
            } else {
                if (!isScrollByMenuCLick) {
                    setIsFixedHeaderShown(false);
                }
            }
        } else {
            setIsFixedHeaderShown(false);
        }
    },[scrollY, scrollYDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[handleScroll]);

    return (
        <header className={cn(styles.header, 'container', {
            [styles.headerAnimationOn]: isFixedHeaderShown
        })}>
            <nav className={styles.navbar}>
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
                                onClick={() => handleDesktopMenuItemClick(link.id)}
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
