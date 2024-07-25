import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { SectionTitle } from '@/shared/SectionTitle';
import { Container } from '@/shared/Container';

import ArrowRightYellow from '@/assets/images/Arrow-Right-Yellow.svg';
import * as styles from './index.module.scss';

const FooterEn: React.FC<{ id?: string }> = ({ id }) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            [`.${styles.title}`, `.${styles.mail}`],
            { yPercent: gsap.utils.wrap([60, 100, 80]), autoAlpha: 0 },
            {
                scrollTrigger: {
                    trigger: `.${styles.title}`,
                },
                duration: 0.5,
                yPercent: 0,
                autoAlpha: 1,
                ease: 'power2.out',
                stagger: 0.2,
            }
        );
    }, []);
    return (
        <section id={id} className={styles.root}>
            <Container>
                <SectionTitle className={styles.title}>
                    Ready to&nbsp;bring your product
                    <br />
                    ideas to&nbsp;life?
                </SectionTitle>

                <div className={styles.content}>
                    <a
                        className={styles.mail}
                        href="mailto:hello@smarthead.digital"
                    >
                        <img
                            className={styles.mailArrow}
                            src={ArrowRightYellow}
                            alt=""
                        />
                        hello@smarthead.digital
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default FooterEn;
