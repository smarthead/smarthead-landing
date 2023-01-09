export function getElemHeight(elem: Element): number {
    const styles = getComputedStyle(elem);
    return parseFloat(styles.height);
}
