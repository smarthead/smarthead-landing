import { isBrowser } from '../../../../utils/isBrowser';

export const calcIsMobile = (): boolean =>
    isBrowser() && window.matchMedia(`(max-width: 992px)`).matches;
