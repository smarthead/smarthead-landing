export const hideStickyHeader = (headerDomElem: HTMLElement, step: number) => {
    if (!headerDomElem) return;

    const styles = getComputedStyle(headerDomElem);
    const previousTopValue = parseFloat(styles.top);

    const headerHeight = parseFloat(styles.height);

    if (previousTopValue < headerHeight * -1) return;
    const currentTopValue = previousTopValue - Math.abs(step);

    if (currentTopValue < headerHeight * -1) {
        headerDomElem.style.top = `-${headerHeight}px`;
    } else {
        headerDomElem.style.top = `${currentTopValue}px`;
    }
};
