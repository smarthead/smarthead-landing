import React, { useState, useRef } from 'react';
import cn from 'classnames';

import Header from '../Header';
import ButtonLink from '../ButtonLink';

import { scrollToSection, scrollToTop } from '../../../utils/scroll';

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
        scrollToSection(`#${linkId}`);
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        scrollToSection(`#${linkId}`);
    };

    const handleButtonClick = () => {
        scrollToSection(`#${navigation.contacts}`);
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
