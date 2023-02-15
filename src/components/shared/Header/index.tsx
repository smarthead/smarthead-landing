import React, { ForwardRefRenderFunction, useContext, useEffect } from 'react';
import cn from 'classnames';
import { Link, navigate } from 'gatsby';
import { CasesScrollContext } from '../../pageSections/Cases/utils/context';

import shLogo from '../../../assets/images/SmartHead-Logo.svg';
import * as styles from './index.module.scss';

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
    const casesContext = useContext(CasesScrollContext);

    const resizeHandler = () => {
        if (window.innerWidth > 768 && isMenuOpened) {
            onHamburgerClick();
        }
    };

    const onDesktopCasesItemClick = async (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        void navigate('/#cases');
        setTimeout(() => casesContext?.jumpToCase(0), 100);
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
                                key={link.id}
                                to={`#${link.id}`}
                                className={styles.menuLink}
                                onClick={
                                    link.id === 'cases'
                                        ? onDesktopCasesItemClick
                                        : undefined
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
