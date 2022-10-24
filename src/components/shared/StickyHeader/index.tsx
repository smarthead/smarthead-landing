import React, { useState, useEffect, useCallback, useRef } from 'react';
import cn from 'classnames';

import { scrollToSection } from '../../../utils/scroll';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { navigation } from '../navigation';
import ButtonLink from '../ButtonLink';
import {
    useVerticalScroll,
    VerticalScrollDirection
} from '../../../utils/hooks/useVerticalScroll';
import { useWindowScrollEnd } from '../../../utils/hooks/useWindowScrollEnd';

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

        const target = e.target as HTMLElement;
        const isMenuLink = target.className.includes(styles.mobileMenuLink);
        if (isMenuLink) {
            hamburgerClickHandler();
            setMenuOpened(!menuOpened);
            const targetSectionId = target.getAttribute('href');

            scrollToSection({
                section: targetSectionId,
            });
        }
    };

    const isScrollByMenuClick = useRef(false);

    const handleDesktopMenuItemClick = (linkId:string) => {
        // console.log('/// menu item click ///')
        isScrollByMenuClick.current = true;

        scrollToSection({
            section: `#${linkId}`,
        });
    }

    const handleButtonClick = () => {
        isScrollByMenuClick.current = true;

        scrollToSection({
            section: `#${navigation.contacts}`,
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

    const [scrollY, scrollYDirection] = useVerticalScroll();
    const [isFixedHeaderShown, setIsFixedHeaderShown] = useState(false);

    const handleScroll = useCallback(() => {
        if (isScrollByMenuClick.current) return;

        if (scrollY > Number(heroSectionHeight)) {
            if (scrollYDirection === VerticalScrollDirection.up) {
                setIsFixedHeaderShown(true);
            } else {
                setIsFixedHeaderShown(false);
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
    }, [handleScroll]);

    useWindowScrollEnd(() =>{
        // console.log('scroll end');
        isScrollByMenuClick.current = false;
    }, 100);

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
