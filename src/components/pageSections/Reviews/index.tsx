import React, { useRef, useEffect, useState } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import * as styles from './index.module.scss';
import { reviewsList } from './reviewsList';
import ReviewItem from '../../shared/ReviewItem';

import arrowBackward from '../../../assets/images/Arrow-Backward.svg';
import arrowForward from '../../../assets/images/Arrow-Forward.svg';

const Reviews: React.FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollTimeline = useRef<gsap.core.Timeline>();
    const reviewsAmount = reviewsList.length;

    const slideSize = 1 / (reviewsAmount - 1);
    const slideProgress = [...Array(reviewsAmount)].map(
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

    const jumpTo = (index: number) => {
        if (scrollTimeline.current?.scrollTrigger) {
            const start = scrollTimeline.current.scrollTrigger.start;
            const end = scrollTimeline.current.scrollTrigger.end;

            gsap.to(`.${styles.reviewsScrollContainer}`, {
                duration: 0.5,
                scrollTo: {
                    x: Math.ceil(start + (end - start) * slideProgress[index]),
                },
                ease: 'power1.inOut',
                overwrite: true,
            });
        }
    };

    const forwardHandle = () => {
        if (activeSlide > reviewsAmount - 1) return;
        jumpTo(activeSlide + 1);
    };
    const backwardHandle = () => {
        if (activeSlide < 1) return;
        jumpTo(activeSlide - 1);
    };

    useEffect(() => {
        scrollTimeline.current = gsap.timeline({
            scrollTrigger: {
                scroller: `.${styles.reviewsScrollContainer}`,

                horizontal: true,
                snap: {
                    snapTo: 1 / (reviewsAmount - 1),
                    duration: 0.5,
                    delay: 0.2,
                    directional: false,
                    ease: 'power1.inOut',
                },
                onUpdate: (self) => {
                    // console.log(self.progress);
                    handleScrollUpdate(self.progress);
                },
            },
        });
    }, []);
    return (
        <section className={styles.root}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Our clients about us</h1>
                    <div className={styles.navigation}>
                        <button
                            className={`${styles.backwardButton} ${
                                activeSlide < 1 && styles.buttonHidden
                            }`}
                            onClick={() => {
                                backwardHandle();
                            }}
                        >
                            <img
                                className={styles.backwardButtonImg}
                                src={arrowBackward}
                                alt="Backward"
                            />
                        </button>
                        <button
                            className={`${styles.forwardButton} ${
                                activeSlide > reviewsAmount - 2 &&
                                styles.buttonHidden
                            }`}
                            onClick={() => {
                                forwardHandle();
                            }}
                        >
                            <img
                                className={styles.forwardButtonImg}
                                src={arrowForward}
                                alt="Forward"
                            />
                        </button>
                    </div>
                </div>

                <section className={styles.reviewsContainer}>
                    <div className={styles.reviewsScrollContainer}>
                        <div className={styles.reviewsScroll}>
                            {reviewsList.map((review, index) => (
                                <ReviewItem
                                    className="review-item"
                                    isActive={index <= activeSlide}
                                    key={`review-${index}`}
                                    photo={review.photo}
                                    name={review.name}
                                    text={review.text}
                                    position={review.position}
                                />
                            ))}
                        </div>
                    </div>
                    <div
                        className={`${
                            activeSlide > 0 && styles.backwardClickArea
                        }`}
                        onClick={backwardHandle}
                    ></div>
                </section>
                <div className={styles.bullets}>
                    {reviewsList.map((_, index) => (
                        <button
                            key={`bullet-${index}`}
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
            </div>
        </section>
    );
};

export default Reviews;
