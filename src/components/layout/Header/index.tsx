import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import * as styles from './index.module.scss';
import { ILinks } from '../../pageSections/Hero';
import shLogo from '../../../assets/images/SH_logo.svg';

const Header: React.FC<ILinks> = ({ links }) => {
    gsap.registerPlugin(ScrollToPlugin);
    const [menuOpened, setMenuOpened] = useState(false);

    const hamburgerClickHandler = () => {
        if (menuOpened) {
            document.body.style.position = 'static';
        } else {
            document.body.style.position = 'fixed';
        }
        setMenuOpened(!menuOpened);
        console.log(menuOpened);
    };

    const mobileMenuClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const isMenuLink = target.className.includes(styles.mobileMenuLink);
        if (isMenuLink) {
            hamburgerClickHandler();
            setMenuOpened(!menuOpened);
            const targetSectionId = target.getAttribute('href');
            linkClickHandler(targetSectionId);
        }
    };
    const desktopMenuClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        const targetSectionId = (e.target as HTMLElement).getAttribute('href');
        linkClickHandler(targetSectionId);
    };
    const linkClickHandler = (section: string | null) => {
        if (section === null) return;
        gsap.to(window, {
            duration: 0.7,
            scrollTo: {
                y: section,
            },
            ease: 'power1.inOut',
            overwrite: true,
        });
    };

    const resizeHandler = () => {
        console.log('resize');
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
                    <a href={`#${links.services}`} className={styles.menuLink}>
                        Услуги
                    </a>
                    <a href={`#${links.cases}`} className={styles.menuLink}>
                        Кейсы
                    </a>
                    <a href={`#${links.aboutUs}`} className={styles.menuLink}>
                        О нас
                    </a>
                    <a href={`#${links.vacancies}`} className={styles.menuLink}>
                        Вакансии
                    </a>
                    <a href={`#${links.contacts}`} className={styles.menuLink}>
                        Контакты
                    </a>
                </div>
                <div
                    className={`${styles.mobileMenu} ${
                        menuOpened ? styles.mobileMenuOpened : ''
                    }`}
                    onClick={mobileMenuClickHandler}
                >
                    <a
                        href={`#${links.services}`}
                        className={styles.mobileMenuLink}
                    >
                        Услуги
                    </a>
                    <a
                        href={`#${links.cases}`}
                        className={styles.mobileMenuLink}
                    >
                        Кейсы
                    </a>
                    <a
                        href={`#${links.aboutUs}`}
                        className={styles.mobileMenuLink}
                    >
                        О нас
                    </a>
                    <a
                        href={`#${links.vacancies}`}
                        className={styles.mobileMenuLink}
                    >
                        Вакансии
                    </a>
                    <a
                        href={`#${links.contacts}`}
                        className={styles.mobileMenuLink}
                    >
                        Контакты
                    </a>
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
