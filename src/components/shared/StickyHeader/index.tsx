import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { scrollToSection } from '../../../utils/scroll';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import { navigation } from '../navigation';
import ButtonLink from '../ButtonLink';
import { useWindowScrollY } from '../../../utils/hooks/useWindowScrollY';

interface IHeader {
    menuLinks: { [key: string]: string }[];
    buttonText: string;
    heroSectionHeight: number | null;
    isShown: boolean;
    setIsShown: (isShown: boolean) => void;
}

// function useScrollDirection() {
//     const [lastScrollTop, setLastScrollTop] = useState(window.scrollY);
//
//     const handleScroll = () => {
//         if (window.scrollY > lastScrollTop){
//             console.log('down');
//         } else {
//             console.log('up');
//         }
//         setLastScrollTop(window.scrollY)
//     }
//
//     useEffect(() => {
//         const current = window.scrollY;
//         console.log(current);
//
//         window.addEventListener("scroll", () => {
//             if (current > lastScrollTop){
//                 console.log('down');
//             } else {
//                 console.log('up');
//             }
//             const newScrollTop = current <= lastScrollTop ? lastScrollTop : current;
//             setLastScrollTop(newScrollTop)
//         });
//         }, [lastScrollTop]);
// }

const StickyHeader: React.FC<IHeader> = ({
    menuLinks,
    buttonText,
    heroSectionHeight,
    isShown,
    setIsShown
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
            scrollToSection(targetSectionId);
        }
    };

    const handleDesktopMenuItemClick = (linkId:string) => {
        scrollToSection(`#${linkId}`);
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

    //useScrollDirection();

    const scrollY = useWindowScrollY();
    const handleWheel = (e: WheelEvent) => {
        if (scrollY > Number(heroSectionHeight)) {
            if (e.deltaY < 0) {
                setIsShown(true);
            } else {
                setIsShown(false);
            }
        } else {
            setIsShown(false);
        }
    }

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    });

    return (
        <header className={cn(styles.header, 'container', {
            [styles.headerAnimationOn]: isShown
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
                        clickHandler={() => {
                            scrollToSection(`#${navigation.contacts}`);
                        }}
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
