import React, { useState, useRef } from 'react';
import { navigate } from 'gatsby';
import cn from 'classnames';

import Header from '../Header';
import ButtonLink from '../ButtonLink';

import { useStickyHeader } from './utils';
import { scrollToSection } from '../../../utils/scrollToSection';

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

    const handleMobileMenuClick = () => {
        handleHamburgerClick();
    };

    const headerRef = useRef<HTMLElement>(null);

    useStickyHeader({
        firstScreenHeight: heroSectionHeight,
        headerDomElem: headerRef.current,
        isMobileMenuOpened,
    });

    const handleLogoClick = () => {
        void navigate('/');
    };

    const handleButtonClick = (target: string) => {
        if (window.location.hash === target) {
            scrollToSection({
                section: target,
            });
        } else {
            void navigate(target);
        }
    };

    return (
        <Header
            ref={headerRef}
            menuLinks={menuLinks}
            mobileMenuLinks={mobileMenuLinks}
            onLogoClick={handleLogoClick}
            onMobileMenuClick={handleMobileMenuClick}
            onHamburgerClick={handleHamburgerClick}
            isMenuOpened={isMobileMenuOpened}
            Slot={
                <ButtonLink
                    className={styles.menuButton}
                    text={buttonText}
                    link={`#${navigation.contacts}`}
                    onClick={() => handleButtonClick(`#${navigation.contacts}`)}
                />
            }
            className={cn(styles.header, 'container')}
        />
    );
};

export default StickyHeader;
