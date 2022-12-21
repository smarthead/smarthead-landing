import React, { useState, useRef } from 'react';
import cn from 'classnames';

import ButtonLink from '../ButtonLink';
import { scrollToSection, scrollToTop } from '../../../utils/scroll';
import { useStickyHeader } from './utils';
import { navigation } from '../navigation';
import { hideStickyHeader } from './utils';

import * as styles from './index.module.scss';

import Header from '../Header';

interface IHeader {
    menuLinks: { [key: string]: string }[];
    buttonText: string;
    heroSectionHeight: number | null;
}

const StickyHeader: React.FC<IHeader> = ({
    menuLinks,
    buttonText,
    heroSectionHeight,
}) => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
    const savedScrollYRef = useRef<number>(0);

    const handleHamburgerClick = () => {
        if (isMobileMenuOpened) {
            document.body.style.position = 'static';
            scrollTo(0, savedScrollYRef.current);
        } else {
            savedScrollYRef.current = window.scrollY;
            document.body.style.position = 'fixed';
        }
        setIsMobileMenuOpened(!isMobileMenuOpened);
    };

    const handleMobileMenuClick = (linkId: string) => {
        setIsScrollBehaviorDisabled(true);

        handleHamburgerClick();
        setIsMobileMenuOpened(!isMobileMenuOpened);
        scrollToSection(`#${linkId}`);
    };

    const handleDesktopMenuItemClick = (linkId: string) => {
        setIsScrollBehaviorDisabled(true);

        scrollToSection(`#${linkId}`);
    };

    const handleButtonClick = () => {
        setIsScrollBehaviorDisabled(true);

        scrollToSection(`#${navigation.contacts}`);
    };

    const headerRef = useRef<HTMLElement>(null);

    const { setIsScrollBehaviorDisabled } = useStickyHeader({
        firstScreenHeight: heroSectionHeight,
        headerDomElem: headerRef.current,
        isMenuOpened: isMobileMenuOpened,
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
            onLogoClick={handleLogoClick}
            onDesktopMenuItemClick={handleDesktopMenuItemClick}
            onMobileMenuClick={handleMobileMenuClick}
            onHamburgerClick={handleHamburgerClick}
            isMenuOpened={isMobileMenuOpened}
            Slot={
                <ButtonLink
                    className={styles.menuButton}
                    type="yellow"
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
