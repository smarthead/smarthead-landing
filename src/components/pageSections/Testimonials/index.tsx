import React, { useState } from 'react';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper';

import ReviewItem from '../../shared/ReviewItem';
import { SectionTitle } from '../../shared/SectionTitle';
import { Section } from '../../shared/Section';

import arrowBackward from '../../../assets/images/Arrow-Backward.svg';
import arrowForward from '../../../assets/images/Arrow-Forward.svg';
import { checkIsMobileView } from '../../../utils/checkIsMobileVIew';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';
import * as styles from './index.module.scss';

interface TestimonialsContentItem {
    photo: any;
    name: string;
    position: string;
    text: string[];
}

interface TestimonialsData {
    title: string;
    content: TestimonialsContentItem[];
}

interface ReviewsProps {
    data: TestimonialsData;
    id: string;
    isEnglish?: boolean;
}

const Testimonials: React.FC<ReviewsProps> = ({ data, id, isEnglish }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const [swiper, setSwiper] = useState<any>(null);

    const slideTo = (index: number) => swiper.slideTo(index);
    const reviewsAmount = data.content.length;

    const forwardHandle = () => {
        if (activeSlide > reviewsAmount - 1) return;
        slideTo(activeSlide + 1);
    };
    const backwardHandle = () => {
        if (activeSlide < 1) return;
        slideTo(activeSlide - 1);
    };

    const isMobile = checkIsMobileView();
    const gapBetweenSlides = isMobile ? 50 : 120;

    return (
        <Section id={id} withoutContainer>
            <div className={styles.header}>
                {/*TODO: add Slot to SectionTitle */}
                <SectionTitle className={styles.title} color={'black'}>
                    {data.title}
                </SectionTitle>

                <div className={`${styles.bullets} ${styles.bulletsMobile}`}>
                    {data.content.map((_, index) => (
                        <button
                            key={`bullet-mobile-${index}`}
                            onClick={() => {
                                slideTo(index);
                            }}
                            className={`${styles.buttonBullet} ${
                                index === activeSlide
                                    ? styles.buttonBulletActive
                                    : ''
                            }`}
                        ></button>
                    ))}
                </div>

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
                            styles.buttonDisabled
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

            <section
                className={cn(styles.reviewsContainer, {
                    [styles.reviewsContainerEn]: isEnglish,
                })}
            >
                <Swiper
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                        setActiveSlide(swiper.activeIndex);
                    }}
                    spaceBetween={gapBetweenSlides}
                    //simulateTouch={false}
                    slidesPerView={'auto'}
                    className={styles.swiper}
                    modules={[Mousewheel]}
                    cssMode={true}
                    mousewheel={true}
                    onActiveIndexChange={(swiper) => {
                        setActiveSlide(swiper.activeIndex);
                    }}
                >
                    {data.content.map((review, index) => (
                        <SwiperSlide
                            key={`review-${index}`}
                            className={styles.swiperSlide}
                            onClick={() => {
                                if (activeSlide === index) return;
                                slideTo(index);
                            }}
                        >
                            <ReviewItem
                                className="review-item"
                                isActive={index <= activeSlide}
                                photo={review.photo}
                                name={review.name}
                                text={review.text}
                                position={review.position}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    className={`${
                        activeSlide > 0 ? styles.backwardClickArea : ''
                    }`}
                    onClick={backwardHandle}
                ></div>
            </section>
            <div className={styles.bullets}>
                {data.content.map((_, index) => (
                    <button
                        key={`bullet-${index}`}
                        onClick={() => {
                            slideTo(index);
                        }}
                        className={`${styles.buttonBullet} ${
                            index === activeSlide
                                ? styles.buttonBulletActive
                                : ''
                        }`}
                    ></button>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
