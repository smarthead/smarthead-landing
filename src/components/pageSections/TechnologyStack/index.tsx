import React from 'react';
import cn from 'classnames';

import { Section } from '@/shared/Section';
import { Container } from '@/shared/Container';

import * as styles from './index.module.scss';

const techTags = [
    {
        label: 'React',
        borderColor: 'Orange',
    },
    {
        label: 'Node.js',
        borderColor: 'Orange',
    },
    {
        label: 'Tailwind CSS',
        borderColor: 'Orange',
    },
    {
        label: ' Node.js',
        borderColor: 'Blue',
    },
    {
        label: '.NET',
        borderColor: 'Blue',
    },
    {
        label: 'Kubernetes',
        borderColor: 'Blue',
    },
    {
        label: 'Swift',
        borderColor: 'Purple',
    },
    {
        label: 'Kotlin',
        borderColor: 'Purple',
    },
    {
        label: 'Flutter',
        borderColor: 'Purple',
    },
];

const TechnologyStack: React.FC<{ id?: string }> = ({ id }) => {
    console.log({ styles });
    return (
        <Section id={id} className={cn(styles.root)}>
            <Container>
                <p className={styles.text}>
                    Выбираем стек под задачу, но&nbsp;Node.js, .NET, React
                    и&nbsp;Next.js&nbsp;— наши проверенные инструменты.
                </p>
                <p className={styles.text}>
                    Используем современный подход с&nbsp;серверным фронтендом:
                    Server Components и&nbsp;Server Actions.
                </p>
                <p className={styles.text}>
                    Строим архитектуру под реальность проекта:
                    от&nbsp;компактных docker-конфигураций до&nbsp;полноценной
                    облачной инфраструктуры.
                </p>

                <div className={styles.tags}>
                    {techTags.map((tag, index) => (
                        <div
                            key={'techTag_' + index}
                            className={cn(
                                styles.tag,
                                styles[`tag${tag.borderColor}`]
                            )}
                        >
                            {tag.label}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default TechnologyStack;
