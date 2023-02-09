import React, { ForwardRefRenderFunction, useEffect } from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';

interface HeaderProps {
    menuLinks: { [key: string]: string }[];
    mobileMenuLinks?: { [key: string]: string }[];
    Slot?: React.ReactElement;
    onLogoClick?: () => void;
    onDesktopMenuItemClick?: () => void;
    onMobileMenuClick?: () => void;
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
        onDesktopMenuItemClick,
        onMobileMenuClick,
        onHamburgerClick,
        isMenuOpened,
        className,
    },
    ref
) => {
    const resizeHandler = () => {
        if (window.innerWidth > 768 && isMenuOpened) {
            onHamburgerClick();
        }
    };

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    });

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
                                to={`#${link.id}`}
                                key={link.id}
                                className={styles.menuLink}
                                onClick={onDesktopMenuItemClick}
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
                                to={`#${link.anchor}`}
                                key={link.id}
                                className={styles.mobileMenuLink}
                                onClick={onMobileMenuClick}
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
