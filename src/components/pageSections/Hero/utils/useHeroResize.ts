import { useEffect, useRef } from 'react';

export function useHeroResize(
    handleHeroScreenHeight: (height: number) => void
) {
    const heroSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (heroSectionRef.current?.offsetHeight) {
                handleHeroScreenHeight(heroSectionRef.current?.offsetHeight);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return heroSectionRef;
}
