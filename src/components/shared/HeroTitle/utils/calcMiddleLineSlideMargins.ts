import * as styles from '../index.module.scss';

const middleLineSlidesDictionary = {
    ru: [
        styles.smallOffsetRight,
        styles.middleOffsetRight,
        styles.center,
        styles.center,
        styles.bigOffsetRight,
    ],
    en: [
        styles.right,
        styles.hugeOffsetRight,
        styles.hugeOffsetRight2,
        styles.hugeOffsetRight,
        styles.right,
    ],
};

interface CalcMiddleSlideMarginsArgs {
    index: number;
    isMobileView: boolean;
    isEnglish?: boolean;
}

export const calcMiddleLineSlideMargins = ({
    index,
    isMobileView,
    isEnglish,
}: CalcMiddleSlideMarginsArgs) => {
    if (isMobileView) return '';

    if (isEnglish) {
        return middleLineSlidesDictionary.en[index];
    } else {
        return middleLineSlidesDictionary.ru[index];
    }
};
