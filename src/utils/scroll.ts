import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { UseSavedScrollPositionReturnedValue } from './hooks/useCustomHashChangeHandler';

interface ScrollToSectionArgs {
    section: string | null;
    scrollContext?: UseSavedScrollPositionReturnedValue | null;
    onStart?: () => void;
    onComplete?: () => void;
    duration?: number;
}

export const scrollToSection = ({
    section,
    scrollContext,
    onStart,
    onComplete,
    duration,
}: ScrollToSectionArgs) => {
    if (section === null || document.querySelector(section) === null) return;

    if (scrollContext) {
        const oldHash = window.location.hash;
        if (oldHash === '') {
            scrollContext.setScrollPosition(window.scrollY);
        }
    }

    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        duration: duration ? duration : 0.7,
        scrollTo: {
            y: section,
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: onStart
            ? onStart
            : () => {
                  window.history.pushState(null, '', section);
              },
        onComplete: onComplete,
    });
};

interface ScrollToTopArgs {
    onStart?: () => void;
}

export const scrollToTop = (args?: ScrollToTopArgs) => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(window, {
        scrollTo: {
            y: 0,
        },
        ease: 'power1.inOut',
        overwrite: true,
        onStart: args?.onStart
            ? args?.onStart
            : () => {
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
