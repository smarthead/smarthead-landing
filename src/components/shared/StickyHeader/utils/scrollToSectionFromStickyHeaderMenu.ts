import { getElemHeight } from '../../../../utils/getElemHeight';
import { INVISIBLE_HEADER_PART } from '../constants';
import { scrollToSection } from '../../../../utils/scroll';

export function scrollToSectionFromStickyHeaderMenu(
    section: string | null,
    headerDomElem: Element | null,
    duration?: number
): void {
    if (!section || !document.querySelector(section)) return;

    if (!headerDomElem) return;
    const headerHeight = getElemHeight(headerDomElem);

    const currentOffset = Math.floor(headerHeight - INVISIBLE_HEADER_PART);

    scrollToSection(section, currentOffset, duration);
}
