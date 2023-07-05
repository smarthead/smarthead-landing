import { useEffect } from 'react';
import { navigateScrollEffect, scrollToSection } from '../scrollUtils';

export function useFirstScrollFix() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection({
                duration: 0,
                section: hash,
                onStart: () => {
                    window.history.pushState(null, '', hash);
                },
                onComplete: () => {
                    navigateScrollEffect.toggle(true); // enable effect for gatsby navigate after initial scroll
                },
            });
        } else {
            navigateScrollEffect.toggle(true);
        }
    }, []);
}
