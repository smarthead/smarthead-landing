import { gsap } from 'gsap';
import { useEffect } from 'react';
import { invalidate } from '../../../../utils/animation';

const h1Line1Class = '.hero-h1-line1';
const h1Line2Class = '.hero-h1-line2';
const h1Line3Class = '.hero-h1-line3';

const buttonClass = '.hero-button';
const subtextClass = '.hero-subtext';

let revealTimeline = gsap.timeline({ paused: true });

const createTimeline = () => {
    const headline =
        window.innerWidth > 480
            ? [h1Line1Class, h1Line2Class, h1Line3Class]
            : [h1Line1Class, h1Line2Class, h1Line3Class];

    revealTimeline.fromTo(
        headline,
        { yPercent: 100, autoAlpha: 0 },

        {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
        },
        0.2
    );
    const order = window.innerWidth > 992 ? 0.1 : -0.1;
    revealTimeline.fromTo(
        [buttonClass, subtextClass],
        { yPercent: 100, autoAlpha: 0 },

        {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: order,
            ease: 'power2.out',
        },
        0.7
    );
};

export function useHeroAnimation(startCondition: boolean, onStart: () => void) {
    useEffect(() => {
        if (startCondition) {
            Promise.resolve()
                .then(() => {
                    revealTimeline.play(0);
                    invalidate(createTimeline, revealTimeline);
                })
                .then(() => {
                    onStart();
                });
        }
    }, [startCondition, onStart]);

    return {
        h1Line1Class: h1Line1Class.slice(1),
        h1Line2Class: h1Line2Class.slice(1),
        h1Line3Class: h1Line3Class.slice(1),
        buttonClass: buttonClass.slice(1),
        subtextClass: subtextClass.slice(1),
    };
}
