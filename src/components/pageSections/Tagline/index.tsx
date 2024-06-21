import React from 'react';
import { navigation } from '../../shared/navigation';
import ButtonLink from '../../shared/ButtonLink';

import * as styles from './index.module.scss';

// todo: delete if it is useless
const Tagline: React.FC = () => (
    <section className={styles.root}>
        <div className={styles.content}>
            <h3 className={styles.title}>Сделаем мир лучше вместе?</h3>
            <ButtonLink
                withIcon
                color="black"
                text="ДА!"
                link={`#${navigation.contacts}`}
            />
        </div>
    </section>
);

export default Tagline;
