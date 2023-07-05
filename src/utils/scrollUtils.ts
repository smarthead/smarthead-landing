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
        duration: duration !== undefined ? duration : 0.7,
        scrollTo: {
            y: section,
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: onStart,
        onComplete: onComplete,
    });
};

export const scrollToTop = () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: 0.7,
        scrollTo: {
            y: 0,
        },
        ease: 'power1.inOut',
        overwrite: true,
    });
};

export const navigateScrollEffect = {
    enabled: false, // it has to be initially false for the first correct scrolling to /#somehash
    toggle(value: boolean) {
        this.enabled = value;
    },
};
