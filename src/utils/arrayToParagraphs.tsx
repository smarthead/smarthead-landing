import React, { Fragment } from 'react';
export function arrayToParagraphs(input: string | string[]) {
    return typeof input === 'string' ? (
        <p>{nonBreakHandler(input)}</p>
    ) : (
        input.map((paragraph, index) => (
            <Fragment key={index}>
                <p>{nonBreakHandler(paragraph)}</p>
            </Fragment>
        ))
    );
}

const nonBreakHandler = (str: string) => str.replaceAll('&nbsp;', '\u00a0');
