import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const scrollToSection = (section: string | null, duration?: number) => {
    gsap.registerPlugin(ScrollToPlugin);
    if (section === null || document.querySelector(section) === null) return;
    gsap.to(window, {
        duration: duration === undefined ? 0.7 : duration,
        scrollTo: {
            y: section,
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
