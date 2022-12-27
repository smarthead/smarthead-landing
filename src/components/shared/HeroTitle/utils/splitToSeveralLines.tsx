import React from 'react';

export const splitToSeveralLines = (line: string) => {
    let wordsArr;
    const isWordWithDash = line.includes('-');
    if (isWordWithDash) {
        wordsArr = line.split('-');
    } else {
        wordsArr = line.split(' ');
    }

    return wordsArr.map((word, i) => (
        <div>
            {word}
            {isWordWithDash && i === 0 && '-'}
        </div>
    ));
};
