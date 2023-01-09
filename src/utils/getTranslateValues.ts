export function getTranslateValues(elem: HTMLElement) {
    const styles = getComputedStyle(elem);
    const matrix = new WebKitCSSMatrix(styles.transform);

    const translateX = matrix.m41;
    const translateY = matrix.m42;

    return {
        translateX,
        translateY,
    };
}
