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

    const skipScrollFunction = () => {
        if (casesTimeline.current && casesContainer.current) {
            const container = casesContainer.current;
            const distance =
                container.offsetHeight *
                    casesList.length *
                    (1 - casesTimeline.current.progress()) +
                container.offsetHeight;

            gsap.to(window, {
                duration: distance / 3000,
                scrollTo: {
                    y: container,
                    offsetY: -distance,
                },
            });
        }
    };
    useEffect(() => {
        const container = casesContainer.current;
        if (container !== null) {
            const caseItemsImages = gsap.utils.toArray(
                container.querySelectorAll('.case-item-image')
            );

            const caseItemsInfo = gsap.utils.toArray(
                container.querySelectorAll('.case-item-info')
            );

            const casesInfos = container.querySelector('.cases-infos');

            ScrollTrigger.matchMedia({
                '(min-width: 992px)': function () {
                    casesTimeline.current = gsap
                        .timeline({
                            scrollTrigger: {
                                trigger: '.cases-sections',
                                pin: true,
                                scrub: 0.5,
                                snap: {
                                    snapTo: 1 / (caseItemsImages?.length - 1),
                                    delay: 0.1,
                                    directional: false,
                                    duration: 0.5,
                                },
                                end: () => `+=${casesInfos?.offsetHeight}`,
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
    }, []);

    return (
        <section className={`cases-sections ${styles.root}`}>
            <section className={styles.casesContainer} ref={casesContainer}>
                <div className={`cases-infos ${styles.caseInfo}`}>
                    {casesList.map((x, index) => (
                        <CaseItemInfo
                            key={index}
                            title={x.title}
                            description={x.description}
                            onSkip={() => {
                                skipScrollFunction();
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
        </section>
    );
};

export default Cases;
