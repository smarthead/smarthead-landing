const scrollUtils = require('./src/utils/scrollUtils');

exports.shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }: any) => {
    const { location } = routerProps;
    const hash = location && location.hash;

    const targetOffset = hash
        ? document.querySelector(hash).getBoundingClientRect().top
        : getSavedScrollPosition(location)[1] - window.scrollY;
    const startOffset = window.scrollY;
    const change = targetOffset;

    const duration = 1000;
    const startTime = performance.now();

    function animateScroll() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        window.scrollTo(
            0,
            easeInOutQuad(elapsed, startOffset, change, duration)
        );

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d;
        const slowdownFactor = 4;
        const slowdownT = 1 - Math.pow(1 - t, slowdownFactor);
        return c * slowdownT + b;
    }

    if (scrollUtils.navigateScrollEffect.enabled) {
        requestAnimationFrame(animateScroll);
    } else {
        const savedPosition = getSavedScrollPosition(location);
        window.scrollTo(...(savedPosition || [0, 0]));
    }

    return false;
};
