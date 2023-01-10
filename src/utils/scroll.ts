import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const scrollToSection = (
    section: string | null,
    offset?: number,
    duration?: number
) => {
    if (section === null || document.querySelector(section) === null) return;

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: duration === undefined ? 0.7 : duration,
        scrollTo: {
            y: section,
            offsetY: offset ? -2 + offset : -2, // scroll to section doesn't work properly on iOS, need more space to avoid gaps
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: () => {
            window.location.hash = section;
        },
    });
};

export const scrollToTop = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        scrollTo: {
            y: 0,
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: () => {
            history.replaceState(null, '', ' ');
        },
    });
};
