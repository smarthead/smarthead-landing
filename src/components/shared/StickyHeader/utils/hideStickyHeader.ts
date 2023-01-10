import { getTranslateValues } from '../../../../utils/getTranslateValues';
import { getElemHeight } from '../../../../utils/getElemHeight';

export const hideStickyHeader = (headerDomElem: HTMLElement, step: number) => {
    if (!headerDomElem) return;

    const previousTranslateYValue =
        getTranslateValues(headerDomElem).translateY;

    const headerHeight = getElemHeight(headerDomElem);

    if (previousTranslateYValue < headerHeight * -1) return;
    const currentTranslateYValue = previousTranslateYValue - Math.abs(step);

    if (currentTranslateYValue < headerHeight * -1) {
        headerDomElem.style.transform = `translateY(-${headerHeight}px)`;
    } else {
        headerDomElem.style.transform = `translateY(${currentTranslateYValue}px)`;
    }
};
