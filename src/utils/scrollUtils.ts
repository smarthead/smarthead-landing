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
        duration: duration !== undefined ? duration : 1,
        scrollTo: {
            y: section,
        },
        ease: customScrollEase,
        overwrite: true,
        onStart: onStart,
        onComplete: onComplete,
    });
};

export const scrollToTop = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: 1,
        scrollTo: {
            y: 0,
        },
        ease: customScrollEase,
        overwrite: true,
    });
};

export const navigateScrollEffect = {
    enabled: false, // it has to be initially false for the first correct scrolling to /#somehash
    toggle(value: boolean) {
        this.enabled = value;
    },
};

export function customScrollEase(progress: number) {
    const slowdownFactor = 6;
    return 1 - Math.pow(1 - progress, slowdownFactor);
}
