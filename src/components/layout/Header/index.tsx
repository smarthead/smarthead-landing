import React, { useState } from 'react';
import * as styles from './index.module.scss';

import shLogo from '../../../assets/images/SH_logo.svg';
import { style } from '@mui/system';

interface IHeaderProps {
    title?: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const hamburgerClickHandler = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    const mobileMenuClickHandler = (e) => {
        setMenuOpen(!menuOpen);
        console.log(e);
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <img
                    src={shLogo}
                    alt="SmartHead Logo"
                    className={styles.logo}
                />

                <div className={styles.menu}>
                    <a href="#" className={styles.menuLink}>
                        Услуги
                    </a>
                    <a href="#" className={styles.menuLink}>
                        Кейсы
                    </a>
                    <a href="#join-us" className={styles.menuLink}>
                        О нас
                    </a>
                    <a href="#" className={styles.menuLink}>
                        Вакансии
                    </a>
                    <a href="#" className={styles.menuLink}>
                        Контакты
                    </a>
                </div>
                <div
                    className={`${styles.mobileMenu} ${
                        menuOpen ? styles.mobileMenuOpened : ''
                    }`}
                    onClick={mobileMenuClickHandler}
                >
                    <a href="#" className={styles.mobileMenuLink}>
                        Услуги
                    </a>
                    <a href="#" className={styles.mobileMenuLink}>
                        Кейсы
                    </a>
                    <a href="#" className={styles.mobileMenuLink}>
                        О нас
                    </a>
                    <a href="#" className={styles.mobileMenuLink}>
                        Вакансии
                    </a>
                    <a href="#" className={styles.mobileMenuLink}>
                        Контакты
                    </a>
                </div>

                <div
                    className={`${styles.hamburger} ${
                        menuOpen ? styles.hamburgerClose : ''
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
