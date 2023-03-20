import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const scrollToSection = (
    section: string | null,
    //offset?: number,
    onComplete?: () => void,
    duration?: number
) => {
    if (section === null || document.querySelector(section) === null) return;

    const oldHash = window.location.hash;
    if (oldHash === '') {
        localStorage.setItem('currentScrollPosition', String(window.scrollY));
    }

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: duration === undefined ? 0.7 : duration,
        scrollTo: {
            y: section,
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: () => {
            window.history.pushState(null, '', section);
        },
        onComplete: onComplete,
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
            history.pushState(null, '', '/');
        },
    });
};

export const scrollTo = (value: number) => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        scrollTo: {
            y: value,
        },
        ease: 'power1.inOut',
        overwrite: true,
    });
};
