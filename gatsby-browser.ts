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

    function easeInOutQuad(
        timeProgress: number,
        startValue: number,
        difference: number,
        animationDuration: number
    ) {
        timeProgress /= animationDuration;
        const slowdown = scrollUtils.customScrollEase(timeProgress);
        return difference * slowdown + startValue;
    }

    if (scrollUtils.navigateScrollEffect.enabled) {
        requestAnimationFrame(animateScroll);
    } else {
        const savedPosition = getSavedScrollPosition(location);
        window.scrollTo(...(savedPosition || [0, 0]));
    }

    return false;
};
