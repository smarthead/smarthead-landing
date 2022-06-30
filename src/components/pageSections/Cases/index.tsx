import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';
import { casesList } from './casesList';
import { CaseItemInfo, CaseItemImage } from '../../shared/CaseItem';

const Cases: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    const casesContainer = useRef(null as HTMLElement | null);

    useEffect(() => {
        const container = casesContainer.current;
        if (container !== null) {
            ScrollTrigger.matchMedia({
                '(min-width: 992px)': function () {
                    const caseItemsImages = Array.from(
                        container?.querySelectorAll('.case-item-image')
                    );
                    const caseItemsInfo = Array.from(
                        container?.querySelectorAll('.case-item-info')
                    );
                    const casesInfos = container?.querySelector(
                        '.cases-infos'
                    ) as HTMLElement | null;

                    const tl = gsap.timeline();

                    tl.to(
                        caseItemsImages,
                        {
                            xPercent: -100 * (caseItemsImages.length - 1),
                            ease: 'none',
                        },
                        0
                    );

                    tl.to(
                        caseItemsInfo,
                        {
                            yPercent: -100 * (caseItemsInfo.length - 1),
                            ease: 'none',
                        },
                        0
                    );

                    ScrollTrigger.create({
                        trigger: '.cases-sections',
                        pin: true,
                        scrub: 1,
                        snap: {
                            snapTo: 1 / (caseItemsImages.length - 1),
                            delay: 0.2,
                            directional: false,
                            duration: 0.5,
                        },
                        end: () => `+=${casesInfos?.offsetHeight}`,
                        animation: tl,
                    });
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
