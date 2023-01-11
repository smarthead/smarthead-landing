import { useState } from 'react';
import * as styles from '../index.module.scss';

export interface ColorSet {
    upper: string;
    middle: string;
    lower: string;
    id: number;
}

const colorChangingSequence: ColorSet[] = [
    {
        upper: styles.white,
        middle: styles.white,
        lower: styles.purple,
        id: 1,
    },
    {
        upper: styles.cream,
        middle: styles.white,
        lower: styles.white,
        id: 2,
    },
    {
        upper: styles.white,
        middle: styles.orange,
        lower: styles.white,
        id: 3,
    },
    {
        upper: styles.white,
        middle: styles.white,
        lower: styles.blue,
        id: 4,
    },
    {
        upper: styles.purple,
        middle: styles.white,
        lower: styles.white,
        id: 5,
    },
    {
        upper: styles.white,
        middle: styles.cream,
        lower: styles.white,
        id: 6,
    },
    {
        upper: styles.white,
        middle: styles.white,
        lower: styles.orange,
        id: 7,
    },
    {
        upper: styles.blue,
        middle: styles.white,
        lower: styles.white,
        id: 8,
    },
    {
        upper: styles.white,
        middle: styles.purple,
        lower: styles.white,
        id: 9,
    },
    {
        upper: styles.white,
        middle: styles.white,
        lower: styles.cream,
        id: 10,
    },
    {
        upper: styles.orange,
        middle: styles.white,
        lower: styles.white,
        id: 11,
    },
    {
        upper: styles.white,
        middle: styles.blue,
        lower: styles.white,
        id: 12,
    },
    {
        upper: styles.white,
        middle: styles.white,
        lower: styles.purple,
        id: 13,
    },
    {
        upper: styles.cream,
        middle: styles.white,
        lower: styles.white,
        id: 14,
    },
    {
        upper: styles.white,
        middle: styles.orange,
        lower: styles.white,
        id: 15,
    },
];

export function useSlidesColors() {
    const [slidesColors, setSlideColors] = useState(colorChangingSequence[0]);
    const changeSlidesColors = () => {
        if (slidesColors.id >= colorChangingSequence.length) {
            setSlideColors(colorChangingSequence[0]);
        } else {
            setSlideColors(colorChangingSequence[slidesColors.id]);
        }
    };

    return {
        slidesColors,
        changeSlidesColors,
    };
}
