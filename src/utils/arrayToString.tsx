import React, { Fragment } from 'react';
export function arrayToString(input: string | string[]) {
    return typeof input === 'string'
        ? nonBreakHandler(input)
        : input.map((line, index) => (
              <Fragment key={index}>
                  {nonBreakHandler(line)} {index < input.length - 1 && <br />}
              </Fragment>
          ));
}

const nonBreakHandler = (str: string) => str.replaceAll('&nbsp;', '\u00a0');
