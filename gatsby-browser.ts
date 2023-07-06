const scrollUtils = require('./src/utils/scrollUtils');

exports.shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }: any) => {
    const { location } = routerProps;
    const hash = location && location.hash;

    const targetOffset = hash
        ? document.querySelector(hash).getBoundingClientRect().top
        : getSavedScrollPosition(location)[1] - window.scrollY;
    const startOffset = window.scrollY;
    const change = targetOffset;

    const duration = scrollUtils.calcScrollAnimationDuration(targetOffset);
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
        currentTime: number,
        start: number,
        difference: number,
        duration: number
    ) {
        currentTime /= duration / 2;
        if (currentTime < 1)
            return (difference / 2) * currentTime * currentTime + start;
        currentTime--;
        return (
            (-difference / 2) * (currentTime * (currentTime - 2) - 1) + start
        );
    }

    if (scrollUtils.navigateScrollEffect.enabled) {
        requestAnimationFrame(animateScroll);
    } else {
        const savedPosition = getSavedScrollPosition(location);
        window.scrollTo(...(savedPosition || [0, 0]));
    }

    return false;
};
