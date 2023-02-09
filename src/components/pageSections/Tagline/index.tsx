import React from 'react';
import { navigation } from '../../shared/navigation';
import * as styles from './index.module.scss';
import ButtonLink from '../../shared/ButtonLink';

// todo: delete if it is useless
const Tagline: React.FC = () => (
    <section className={styles.root}>
        <div className="container">
            <div className={styles.content}>
                <h3 className={styles.title}>Сделаем мир лучше вместе?</h3>
                <ButtonLink
                    withIcon
                    color="black"
                    text="ДА!"
                    link={`#${navigation.contacts}`}
                />
            </div>
        </div>
    </section>
);

export default Tagline;
