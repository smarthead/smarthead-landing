import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { checkIsMobileView } from './checkIsMobileVIew';

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

    const targetOffset = section
        ? document.querySelector(section)?.getBoundingClientRect().top
        : document.querySelector('body')?.getBoundingClientRect().top;

    if (!targetOffset) return;
    const smartDuration = calcScrollAnimationDuration(targetOffset);

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: duration !== undefined ? duration : smartDuration / 1000,
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
    const targetOffset = document
        .querySelector('body')
        ?.getBoundingClientRect().top;
    if (!targetOffset) return;
    const smartDuration = calcScrollAnimationDuration(targetOffset);

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: smartDuration / 1000,
        scrollTo: {
            y: 0,
        },
        ease: 'power1.inOut',
        overwrite: true,
    });
};

export function calcScrollAnimationDuration(targetOffset: number) {
    const absTargetOffset = Math.abs(targetOffset);
    const deviceDividerCoefficient = checkIsMobileView() ? 4 : 6;

    return Math.max(absTargetOffset / deviceDividerCoefficient, 800);
}

export const navigateScrollEffect = {
    enabled: false, // it has to be initially false for the first correct scrolling to /#somehash
    toggle(value: boolean) {
        this.enabled = value;
    },
};
