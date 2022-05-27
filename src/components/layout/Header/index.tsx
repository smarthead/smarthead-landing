import React from 'react';
import * as styles from './index.module.scss';
import shLogo from '../../../assets/images/SH_logo.svg';

interface IHeaderProps {
    title?: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => (
    <header className={styles.root}>
        <nav className={styles.navbar}>
            <img src={shLogo} alt="SmartHead Logo" className={styles.logo} />

            <div className={styles.menu}>
                <a href="#" className={styles.menuLink}>
                    Услуги
                </a>
                <a href="#" className={styles.menuLink}>
                    Кейсы
                </a>
                <a href="#" className={styles.menuLink}>
                    О нас
                </a>
                <a href="#" className={styles.menuLink}>
                    Вакансии
                </a>
                <a href="#" className={styles.menuLink}>
                    Контакты
                </a>
            </div>
        </nav>
    </header>
);

export default Header;
