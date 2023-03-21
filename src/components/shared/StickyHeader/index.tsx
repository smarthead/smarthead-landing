import React, { useState, useRef, useContext } from 'react';
import cn from 'classnames';

import Header from '../Header';
import ButtonLink from '../ButtonLink';

import { scrollToSection, scrollToTop } from '../../../utils/scroll';
import { ScrollPositionContext } from '../scrollPositionContext';

import { useStickyHeader } from './utils';
import { navigation } from '../navigation';

import * as styles from './index.module.scss';

interface StickyHeaderProps {
    menuLinks: { [key: string]: string }[];
    mobileMenuLinks?: { [key: string]: string }[];
    buttonText: string;
    heroSectionHeight: number | null;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({
    menuLinks,
    mobileMenuLinks,
    buttonText,
    heroSectionHeight,
}) => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    const savedScrollContext = useContext(ScrollPositionContext);

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
        scrollToSection(`#${linkId}`, savedScrollContext);
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        scrollToSection(`#${linkId}`, savedScrollContext);
    };

    const handleButtonClick = () => {
        scrollToSection(`#${navigation.contacts}`, savedScrollContext);
    };

    const headerRef = useRef<HTMLElement>(null);

    useStickyHeader({
        firstScreenHeight: heroSectionHeight,
        headerDomElem: headerRef.current,
        isMobileMenuOpened,
    });

    const handleLogoClick = () => {
        scrollToTop();
    };

    return (
        <Header
            ref={headerRef}
            menuLinks={menuLinks}
            mobileMenuLinks={mobileMenuLinks}
            onLogoClick={handleLogoClick}
            onDesktopMenuItemClick={handleDesktopMenuItemClick}
            onMobileMenuClick={handleMobileMenuClick}
            onHamburgerClick={handleHamburgerClick}
            isMenuOpened={isMobileMenuOpened}
            Slot={
                <ButtonLink
                    className={styles.menuButton}
                    text={buttonText}
                    link={`#${navigation.contacts}`}
                    clickHandler={handleButtonClick}
                />
            }
            className={cn(styles.header, 'container')}
        />
    );
};

export default StickyHeader;
