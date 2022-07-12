import React from 'react';
import * as styles from './index.module.scss';
import Card from '../../shared/Card';
import podcastCover from '../../../assets/images/podcast_cover.jpg';
import instagramCover from '../../../assets/images/instagram_cover.jpg';
import telegramCover from '../../../assets/images/telegram_cover.jpg';
import { links } from '../../shared/links';

const Acquaintance: React.FC<{ id?: string }> = ({ id }) => (
    <section id={id} className={styles.root}>
        <div className="container">
            <h2 className={styles.headline}>Познакомьтесь с нами поближе</h2>
            <div className={styles.cards}>
                <Card
                    image={podcastCover}
                    description="Подкаст о технологиях, менеджменте и саморазвитии"
                    buttonText="ПОСЛУШАТЬ"
                    link={links.podcast}
                />
                <Card
                    image={instagramCover}
                    description="Инстаграм о нашей жизни в офисе и за его пределами"
                    buttonText="ПОСМОТРЕТЬ"
                    link={links.instagram}
                />
                <Card
                    image={telegramCover}
                    description="Телеграм-канал, где собраны
                    наши лучшие практики"
                    buttonText="ПОЧИТАТЬ"
                    link={links.telegram}
                />
            </div>
        </div>
    </section>
);

export default Acquaintance;
