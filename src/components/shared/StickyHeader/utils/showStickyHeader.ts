import { getTranslateValues } from '../../../../utils/getTranslateValues';
import { INVISIBLE_HEADER_PART } from '../constants';

export const showStickyHeader = (headerDomElem: HTMLElement, step: number) => {
    if (!headerDomElem) return;

    const previousTranslateYValue =
        getTranslateValues(headerDomElem).translateY;

    if (previousTranslateYValue > -INVISIBLE_HEADER_PART) return;
    const currentTranslateYValue = previousTranslateYValue + Math.abs(step);

    headerDomElem.style.opacity = '1';
    if (currentTranslateYValue > INVISIBLE_HEADER_PART * -1) {
        headerDomElem.style.transform = `translateY(-${INVISIBLE_HEADER_PART}px)`;
    } else {
        headerDomElem.style.transform = `translateY(${currentTranslateYValue}px)`;
    }
};
