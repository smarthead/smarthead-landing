import { isBrowser } from './isBrowser';

export function checkIsMobileView() {
    return isBrowser() && window.matchMedia(`(max-width: 992px)`).matches;
}
