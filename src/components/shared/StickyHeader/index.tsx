import React, { useState, useRef } from 'react';
import cn from 'classnames';

import Header from '../Header';
import ButtonLink from '../ButtonLink';

import { scrollToTop } from '../../../utils/scroll';
import { scrollToSectionFromStickyHeaderMenu } from './utils/scrollToSectionFromStickyHeaderMenu';

import { useStickyHeader } from './utils';
import { navigation } from '../navigation';
import { hideStickyHeader } from './utils';

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
        setIsScrollBehaviorDisabled(true);

        handleHamburgerClick();
        setIsMobileMenuOpened(!isMobileMenuOpened);
        scrollToSectionFromStickyHeaderMenu(`#${linkId}`, headerRef.current);
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        setIsScrollBehaviorDisabled(true);

        scrollToSectionFromStickyHeaderMenu(`#${linkId}`, headerRef.current);
    };

    const handleButtonClick = () => {
        setIsScrollBehaviorDisabled(true);

        scrollToSectionFromStickyHeaderMenu(
            `#${navigation.contacts}`,
            headerRef.current
        );
    };

    const headerRef = useRef<HTMLElement>(null);

    const { setIsScrollBehaviorDisabled } = useStickyHeader({
        firstScreenHeight: heroSectionHeight,
        headerDomElem: headerRef.current,
        isMobileMenuOpened,
    });

    const handleLogoClick = () => {
        const headerDomElem = headerRef.current;
        if (headerDomElem) {
            const headerHeight = parseFloat(
                getComputedStyle(headerDomElem).height
            );
            hideStickyHeader(headerDomElem, headerHeight);
            setIsScrollBehaviorDisabled(true);
        }

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
