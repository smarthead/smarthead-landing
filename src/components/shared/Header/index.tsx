import React, { ForwardRefRenderFunction } from 'react';
import cn from 'classnames';

import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';

interface HeaderProps {
    menuLinks: { [key: string]: string }[];
    Slot?: React.ReactElement;
    onLogoClick?: () => void;
    onDesktopMenuItemClick: (linkId: string) => void;
    onMobileMenuClick: (e: React.MouseEvent) => void;
    onHamburgerClick: () => void;
    isMenuOpened: boolean;
    className?: string;
}

const HeaderComponent: ForwardRefRenderFunction<HTMLElement, HeaderProps> = (
    {
        menuLinks,
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
                    {Slot && Slot}

                    <div className={styles.menu}>
                        {menuLinks.map((link) => (
                            <a
                                key={link.id}
                                className={styles.menuLink}
                                onClick={() => onDesktopMenuItemClick(link.id)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div
                        className={`${styles.mobileMenu} ${
                            isMenuOpened ? styles.mobileMenuOpened : ''
                        }`}
                        onClick={onMobileMenuClick}
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
