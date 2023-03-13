import React, { useRef, useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { gsap } from 'gsap';

import { CaseItemInfo, CaseItemImage } from '../../shared/CaseItem';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import * as styles from './index.module.scss';

interface ICases {
    id: string;
    data: {
        title: string;
        casesList: {
            title: string;
            description: string | string[];
            image: {
                original: { src: string };
                tablet: { src: string };
                desktop: { src: string; origin: string };
            };
        }[];
    };
}

const Cases: React.FC<ICases> = ({ id, data }) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const casesList = data.casesList;
    const casesContainer = useRef(null as HTMLElement | null);
    const casesTimeline = useRef<gsap.core.Timeline>();
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [isPinnedScroll, setIsPinnedScroll] = useState(false);

    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const casesAmount = casesList.length;

    const slideSize = 1 / (casesAmount - 1);
    const slideProgress = [...Array(casesAmount)].map(
        (_, index) => index * slideSize
    );

    const handleScrollUpdate = (progress: number) => {
        setActiveSlide(getNearestSlide(progress).index);
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

    const jumpTo = (index: number | null) => {
        if (
            casesTimeline?.current?.scrollTrigger?.progress !== undefined &&
            casesContainer.current
        ) {
            const container = casesContainer.current;
            const sectionProgress = index === null ? 1 : slideProgress[index];
            const distance =
                container.offsetHeight *
                    (casesAmount - 1) *
                    (sectionProgress -
                        casesTimeline.current.scrollTrigger.progress) +
                (index === null ? container.offsetHeight : 0);
            const duration = Math.min(0.6, Math.abs(distance / 3000));
            gsap.to(window, {
                duration: duration,
                scrollTo: {
                    y: container,
                    offsetY: -distance,
                },
                ease: 'power1.inOut',
                overwrite: true,
            });
        }
    };

    useEffect(() => {
        const container = casesContainer.current;
        if (container !== null && casesContainer.current !== null) {
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
                    setIsPinnedScroll(true);
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
                                        (x, index) => -index * 1
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
                    setIsPinnedScroll(false);
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
    }, []);

    const handleResize = () => {
        const width = window.innerWidth;
        setIsTablet(width > 640 && width <= 992);
        setIsMobile(width <= 640);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // fix navigation on the first enter to app (when cases initialize fix navigation)
    useEffect(() => {
        setTimeout(() => {
            void navigate(`/${location.hash}`);
        }, 500);
    }, []);

    return (
        <section id={id} className={`cases-sections ${styles.root}`}>
            <section className={styles.casesContainer} ref={casesContainer}>
                {casesList.map((caseObj, index) => (
                    <div className={styles.cases} key={index}>
                        <div className={styles.casesInfo}>
                            <div
                                className={`${styles.casesInfoItem} cases-info-item`}
                            >
                                <CaseItemInfo
                                    isFirst={isPinnedScroll || index === 0}
                                    sectionTitle={data.title}
                                    title={caseObj.title}
                                    description={caseObj.description}
                                />
                            </div>
                        </div>
                        <div className={styles.casesImage}>
                            <div className="cases-image-item">
                                <CaseItemImage
                                    image={
                                        isTablet
                                            ? caseObj.image.tablet.src
                                            : isMobile
                                            ? caseObj.image.original.src
                                            : caseObj.image.desktop.src
                                    }
                                    origin={
                                        !isTablet && !isMobile
                                            ? caseObj.image.desktop.origin
                                            : '50% 50%'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <div className={styles.bullets}>
                {casesList.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            jumpTo(index);
                        }}
                        className={`${styles.buttonBullet} ${
                            index === activeSlide
                                ? styles.buttonBulletActive
                                : ''
                        }`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default Cases;
