const INVISIBLE_HEADER_PART = 5;

export const showStickyHeader = (headerDomElem: HTMLElement, step: number) => {
    if (!headerDomElem) return;

    const styles = getComputedStyle(headerDomElem);
    const previousTopValue = parseFloat(styles.top);

    if (previousTopValue > -INVISIBLE_HEADER_PART) return;
    const currentTopValue = previousTopValue + Math.abs(step);

    if (currentTopValue > -INVISIBLE_HEADER_PART) {
        headerDomElem.style.top = `-${INVISIBLE_HEADER_PART}px`;
    } else {
        headerDomElem.style.top = `${currentTopValue}px`;
    }
};
