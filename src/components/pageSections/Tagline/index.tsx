import React from 'react';
import * as styles from './index.module.scss';
import ButtonLink from '../../shared/ButtonLink';

const Tagline: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <div className={styles.content}>
                <h2 className={styles.title}>Сделаем мир лучше вместе?</h2>
                <ButtonLink type="black" text="ДА!" link="#" />
            </div>
        </div>
    </section>
);

export default Tagline;
