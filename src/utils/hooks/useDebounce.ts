import { debounce } from 'lodash';
import { useRef } from 'react';

export const useDebounce = <T extends (...args: any) => any>(
    callback: T,
    debounceTimer: number,
) => {
    const savedDebounce = useRef(debounce(callback, debounceTimer));

    return savedDebounce?.current;
};
