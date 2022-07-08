import React, { useRef, useEffect, useState } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import * as styles from './index.module.scss';
import { casesList } from './casesList';
import { CaseItemInfo, CaseItemImage } from '../../shared/CaseItem';

const Cases: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const casesContainer = useRef(null as HTMLElement | null);
    const casesTimeline = useRef<gsap.core.Timeline>();
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [pinnedScroll, setPinnedScroll] = useState(true);

    const resize = () => {
        if (window.innerWidth <= 992) {
            setPinnedScroll(false);
        } else {
            setPinnedScroll(true);
        }
    };
    useEffect(() => {
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

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
                    casesAmount *
                    (sectionProgress -
                        casesTimeline.current.scrollTrigger.progress) +
                (index === null ? container.offsetHeight : 0);

            gsap.to(window, {
                duration: Math.abs(distance / 3000),
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
            const caseItemsImages = gsap.utils.toArray(
                container.querySelectorAll('.case-item-image')
            );

            const caseItemsInfo = gsap.utils.toArray(
                container.querySelectorAll('.case-item-info')
            );

            ScrollTrigger.matchMedia({
                '(min-width: 993px)': function () {
                    casesTimeline.current = gsap
                        .timeline({
                            scrollTrigger: {
                                trigger: '.cases-sections',
                                pin: true,
                                scrub: 0.5,
                                snap: {
                                    snapTo: 1 / (casesAmount - 1),
                                    delay: 0.1,
                                    directional: false,
                                    duration: 0.5,
                                },
                                onUpdate: (self) => {
                                    handleScrollUpdate(self.progress);
                                },
                                end: () =>
                                    `+=${container.offsetHeight * casesAmount}`,
                            },
                        })
                        .to(
                            caseItemsImages,
                            {
                                xPercent: -100 * (caseItemsImages.length - 1),
                                ease: 'none',
                            },
                            0
                        )
                        .to(
                            caseItemsInfo,
                            {
                                yPercent: -100 * (caseItemsInfo.length - 1),
                                ease: 'none',
                            },
                            0
                        );
                },
            });
        }
    }, [pinnedScroll]);

    return (
        <section className={`cases-sections ${styles.root}`}>
            {pinnedScroll ? (
                <section className={styles.casesContainer} ref={casesContainer}>
                    <div
                        className={`cases-infos ${styles.caseInfo}`}
                        style={{ height: 100 * casesAmount + 'vh' }}
                    >
                        {casesList.map((x, index) => (
                            <CaseItemInfo
                                key={index}
                                title={x.title}
                                description={x.description}
                                onSkip={() => {
                                    jumpTo(null);
                                }}
                            />
                        ))}
                    </div>

                    <div className={`cases-images ${styles.caseImage}`}>
                        {casesList.map((x, index) => (
                            <CaseItemImage key={index} image={x.image} />
                        ))}
                    </div>
                </section>
            ) : (
                <></>
            )}

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
