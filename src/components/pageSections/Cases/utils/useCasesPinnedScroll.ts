import React, { useRef, useState } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export interface UseCasesPinnedScrollReturnValue {
    activeSlide: number;
    casesContainerRef: React.MutableRefObject<HTMLElement | null>;
    jumpToCase: (index: number | null) => void;
    handlePinnedScrollEffect: () => void;
    isTitleShown: boolean;
}

export function useCasesPinnedScroll(
    casesAmount: number
): UseCasesPinnedScrollReturnValue {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [isTitleShown, setIsTitleShown] = useState(false);

    const casesContainerRef = useRef(null as HTMLElement | null);
    const casesTimeline = useRef<gsap.core.Timeline>();

    const slideSize = 1 / (casesAmount - 1);
    const slideProgress = [...Array(casesAmount)].map(
        (_, index) => index * slideSize
    );

    const jumpToCase = (index: number | null) => {
        if (
            casesTimeline?.current?.scrollTrigger?.progress !== undefined &&
            casesContainerRef.current
        ) {
            const container = casesContainerRef.current;
            const sectionProgress = index === null ? 1 : slideProgress[index];
            const distance =
                container.offsetHeight *
                    (casesAmount - 1) *
                    (sectionProgress -
                        casesTimeline.current.scrollTrigger.progress) +
                (index === null ? container.offsetHeight : 0);

            gsap.to(window, {
                duration: 0.7,
                scrollTo: {
                    y: container,
                    offsetY: -distance,
                },
                ease: 'power1.inOut',
                overwrite: true,
            });
        }
    };

    const getNearestSlide = (
        progress: number
    ): { progress: number; index: number } => {
        return slideProgress.reduce(
            (prev, curr, index) =>
                Math.abs(curr - progress) < Math.abs(prev.progress - progress)
                    ? { progress: curr, index: index }
                    : prev,
            { progress: 0, index: 0 }
        );
    };

    const handleScrollUpdate = (progress: number) => {
        setActiveSlide(getNearestSlide(progress).index);
    };

    const handlePinnedScrollEffect = () => {
        const container = casesContainerRef.current;
        if (container !== null && casesContainerRef.current !== null) {
            const casesInfoItems = gsap.utils.toArray(
                container.querySelectorAll('.cases-info-item')
            );
            const casesImagesItems = gsap.utils.toArray(
                container.querySelectorAll('.cases-image-item')
            );
            const transformArrayStart = [...Array(casesAmount)].map(
                (_, index) => index * 100
            );

            const transformArrayEnd = [...transformArrayStart]
                .reverse()
                .map((position) => -position);

            ScrollTrigger.matchMedia({
                '(min-width: 993px)': function () {
                    setIsTitleShown(true);
                    casesTimeline.current = gsap
                        .timeline({
                            scrollTrigger: {
                                trigger: '.cases-sections',
                                pin: true,
                                scrub: 0,

                                onUpdate: (self) => {
                                    handleScrollUpdate(self.progress);
                                },
                                end: () =>
                                    `+=${
                                        container.offsetHeight *
                                        (casesAmount - 1)
                                    }`,
                            },
                        })
                        .fromTo(
                            casesInfoItems,
                            { yPercent: gsap.utils.wrap(transformArrayStart) },

                            {
                                yPercent: gsap.utils.wrap(transformArrayEnd),
                                ease: 'none',
                            },
                            0
                        )
                        .fromTo(
                            casesImagesItems,
                            {
                                xPercent: gsap.utils.wrap(transformArrayStart),
                                x: gsap.utils.wrap(
                                    [...transformArrayStart].map(
                                        (x, index) => -index
                                    )
                                ),
                            },
                            {
                                xPercent: gsap.utils.wrap(transformArrayEnd),
                                ease: 'none',
                            },
                            0
                        );
                },
                '(max-width: 992px)': function () {
                    setIsTitleShown(false);
                    casesTimeline.current = gsap
                        .timeline()
                        .fromTo(
                            casesInfoItems,
                            { yPercent: 0 },
                            { yPercent: 0 },
                            0
                        )
                        .fromTo(
                            casesImagesItems,
                            { xPercent: 0 },
                            { xPercent: 0 },
                            0
                        );
                },
            });
        }
    };

    return {
        activeSlide,
        casesContainerRef,
        jumpToCase,
        handlePinnedScrollEffect,
        isTitleShown,
    };
}
