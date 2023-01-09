import { getTranslateValues } from '../../../../utils/getTranslateValues';

export const hideStickyHeader = (headerDomElem: HTMLElement, step: number) => {
    if (!headerDomElem) return;

    const previousTranslateYValue =
        getTranslateValues(headerDomElem).translateY;

    const styles = getComputedStyle(headerDomElem);
    const headerHeight = parseFloat(styles.height);

    if (previousTranslateYValue < headerHeight * -1) return;
    const currentTranslateYValue = previousTranslateYValue - Math.abs(step);

    if (currentTranslateYValue < headerHeight * -1) {
        headerDomElem.style.transform = `translateY(-${headerHeight}px)`;
    } else {
        headerDomElem.style.transform = `translateY(${currentTranslateYValue}px)`;
    }
};
