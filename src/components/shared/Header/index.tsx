import React, {
    ForwardRefRenderFunction,
    useContext,
    useEffect,
    useRef,
} from 'react';
import cn from 'classnames';
import { Link, navigate } from 'gatsby';

import { CasesScrollContext } from '../../pageSections/Cases/utils/context';
import { goTo } from '../../../utils/goTo';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import * as styles from './index.module.scss';
import { navigateScrollEffect } from '../../../utils/scrollUtils';

interface HeaderProps {
    menuLinks: { [key: string]: string }[];
    mobileMenuLinks?: { [key: string]: string }[];
    Slot?: React.ReactElement;
    onLogoClick?: () => void;
    onHamburgerClick: () => void;
    isMenuOpened: boolean;
    className?: string;
}

const HeaderComponent: ForwardRefRenderFunction<HTMLElement, HeaderProps> = (
    {
        menuLinks,
        mobileMenuLinks,
        Slot,
        onLogoClick,
        onHamburgerClick,
        isMenuOpened,
        className,
    },
    ref
) => {
    const casesContext = useContext(CasesScrollContext);

    const handleDesktopItemClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        section: string
    ) => {
        e.preventDefault();
        goTo(section);
    };

    const handleDesktopCasesItemClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        if (window.location.hash === '#cases') {
            casesContext?.jumpToCase(0);
        } else {
            navigateScrollEffect.toggle(false);
            void navigate('/#cases');
            casesContext?.jumpToCase(0);
            setTimeout(() => navigateScrollEffect.toggle(true), 100);
        }
    };

    const handleMobileMenuClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        section: string
    ) => {
        e.preventDefault();
        onHamburgerClick();
        goTo(section);
    };

    const handleResize = () => {
        if (window.innerWidth > 768 && isMenuOpened) {
            onHamburgerClick();
        }
    };

    const handleResizeRef = useRef(handleResize);
    useEffect(() => {
        handleResizeRef.current = handleResize;
    }, [handleResize]);

    useEffect(() => {
        const handleResize = () => handleResizeRef.current();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mobileLinks = mobileMenuLinks ? mobileMenuLinks : menuLinks;

    return (
        <header className={cn(styles.header, className)} ref={ref}>
            <nav className={cn(styles.navbar)}>
                <img
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                    onClick={onLogoClick && onLogoClick}
                />

                <div className={styles.menuContainer}>
                    <div className={styles.menu}>
                        {menuLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={`#${link.id}`}
                                className={styles.menuLink}
                                onClick={
                                    link.id === 'cases'
                                        ? handleDesktopCasesItemClick
                                        : (e) =>
                                              handleDesktopItemClick(
                                                  e,
                                                  `#${link.id}`
                                              )
                                }
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {Slot && Slot}

                    <div
                        className={`${styles.mobileMenu} ${
                            isMenuOpened ? styles.mobileMenuOpened : ''
                        }`}
                    >
                        {mobileLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={`#${link.id}`}
                                className={styles.mobileMenuLink}
                                onClick={(e) =>
                                    handleMobileMenuClick(e, `#${link.id}`)
                                }
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div
                        className={`${styles.hamburger} ${
                            isMenuOpened ? styles.hamburgerClose : ''
                        }`}
                        onClick={onHamburgerClick}
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

const Header = React.forwardRef(HeaderComponent);

export default Header;
