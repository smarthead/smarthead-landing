import { useEffect } from 'react';
import { scrollToSection } from '../scroll';

export function useFirstScrollFix() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection({
                section: hash,
            });
        }
    }, []);
}
