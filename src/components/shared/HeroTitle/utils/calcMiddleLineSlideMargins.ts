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
        styles.center,
        styles.center,
        styles.bigOffsetLeft,
        styles.center,
        styles.center,
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
