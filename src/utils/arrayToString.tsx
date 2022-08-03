import React, { Fragment } from 'react';
export function arrayToString(array: string[]) {
    return array.map((line, index) => (
        <Fragment key={index}>
            {line.replaceAll('&nbsp;', '\u00a0')}{' '}
            {index < array.length && <br />}
        </Fragment>
    ));
}
