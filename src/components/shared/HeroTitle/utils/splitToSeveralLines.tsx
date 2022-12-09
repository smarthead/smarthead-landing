import React from 'react';

export const splitToSeveralLines = (line: string) =>
    line.split(' ').map((word) => <div>{word}</div>);
