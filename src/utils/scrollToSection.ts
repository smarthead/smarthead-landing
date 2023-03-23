import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

interface ScrollToSectionArgs {
    section: string | null;
    duration?: number;
    onStart?: () => void;
    onComplete?: () => void;
}

export const scrollToSection = ({
    section,
    duration,
    onStart,
    onComplete,
}: ScrollToSectionArgs) => {
    if (section === null || document.querySelector(section) === null) return;

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: duration ? duration : 0,
        scrollTo: {
            y: section,
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: onStart,
        onComplete: onComplete,
    });
};
