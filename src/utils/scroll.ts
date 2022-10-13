import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

interface IScrollDurationArgs {
    section: string | null;
    duration?: number;
    onComplete?: () => void;
}

export const scrollToSection = ({ section, duration, onComplete }: IScrollDurationArgs) => {
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
        onComplete: onComplete ? onComplete : undefined,
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
