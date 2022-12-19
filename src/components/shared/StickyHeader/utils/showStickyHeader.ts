import { SCROLL_STEP, SLOWING_COEFFICIENT } from '../constants';

export const showStickyHeader = (
    headerDomElem: HTMLElement,
    step: number = SCROLL_STEP
) => {
    if (!headerDomElem) return;

    const styles = getComputedStyle(headerDomElem);
    const previousTopValue = parseFloat(styles.top);

    if (previousTopValue > 0) return;
    const currentTopValue =
        previousTopValue + Math.abs(step) * SLOWING_COEFFICIENT;

    if (currentTopValue > 0) {
        headerDomElem.style.top = `0px`;
    } else {
        headerDomElem.style.top = `${currentTopValue.toFixed(1)}px`;
    }
};
