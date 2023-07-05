const navigateScrollEffect =
    require('./src/utils/scrollUtils').navigateScrollEffect;

exports.shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }: any) => {
    const { location } = routerProps;
    const hash = location && location.hash;

    const targetOffset = hash
        ? document.querySelector(hash).getBoundingClientRect().top
        : document.querySelector('body')?.getBoundingClientRect().top;
    const startOffset = window.scrollY;
    const change = targetOffset;

    const duration = 1000; // Duration of the animation in milliseconds

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
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    if (navigateScrollEffect.enabled) {
        requestAnimationFrame(animateScroll);
    } else {
        const savedPosition = getSavedScrollPosition(location);
        window.scrollTo(...(savedPosition || [0, 0]));
    }

    return false;
};
