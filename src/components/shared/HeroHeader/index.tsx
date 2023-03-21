import React, { useContext, useState } from 'react';

import Header from '../Header';

import { scrollToSection } from '../../../utils/scroll';
import { ScrollPositionContext } from '../scrollPositionContext';

import * as styles from './index.module.scss';

interface HeroHeaderProps {
    menuLinks: { [key: string]: string }[];
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ menuLinks }) => {
    const savedScrollContext = useContext(ScrollPositionContext);
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

    const handleHamburgerClick = () => {
        if (isMobileMenuOpened) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
        setIsMobileMenuOpened(!isMobileMenuOpened);
    };

    const handleMobileMenuClick = (linkId: string) => {
        handleHamburgerClick();
        setIsMobileMenuOpened(!isMobileMenuOpened);
        scrollToSection({
            section: `#${linkId}`,
            scrollContext: savedScrollContext,
        });
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        scrollToSection({
            section: `#${linkId}`,
            scrollContext: savedScrollContext,
        });
    };

    return (
        <Header
            menuLinks={menuLinks}
            onDesktopMenuItemClick={handleDesktopMenuItemClick}
            onMobileMenuClick={handleMobileMenuClick}
            onHamburgerClick={handleHamburgerClick}
            isMenuOpened={isMobileMenuOpened}
            className={styles.header}
        />
    );
};

export default HeroHeader;
