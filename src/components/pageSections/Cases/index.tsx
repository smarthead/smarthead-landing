import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import * as styles from './index.module.scss';

const Cases: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);

    const casesContainer = useRef(null as HTMLElement | null);

    useEffect(() => {
        const container = casesContainer.current;
        if (container !== null) {
            ScrollTrigger.matchMedia({
                '(min-width: 992px)': function () {
                    const caseItems = container?.querySelectorAll('.case-item');
                    // ScrollTrigger (this automatically gets killed when the breakpoint no longer matches...
                    gsap.to(caseItems, {
                        xPercent: -100 * (caseItems.length - 1),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: container,
                            pin: true,
                            scrub: 1,
                            snap: 1 / (caseItems.length - 1),
                            // base vertical scrolling on how wide the container is so it feels more natural.
                            end: '+=3500',
                        },
                    });
                },
            });
        }
    }, []);

    return (
        <section className={styles.root}>
            {/* <div className="container"></div> */}
            <section className={styles.casesContainer} ref={casesContainer}>
                <section
                    className={`case-item ${styles.sectionTemp}`}
                ></section>
                <section
                    className={`case-item ${styles.sectionTemp}`}
                ></section>
                <section
                    className={`case-item ${styles.sectionTemp}`}
                ></section>
                <section
                    className={`case-item ${styles.sectionTemp}`}
                ></section>
                <section
                    className={`case-item ${styles.sectionTemp}`}
                ></section>
            </section>
        </section>
    );
};

export default Cases;
