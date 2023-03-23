import { useEffect } from 'react';
import { scrollToSection } from '../scrollUtils';

function setScrollBehaviourSmooth() {
    window.document.body.style.scrollBehavior = 'smooth';
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
}

export function useFirstScrollFix() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection({
                section: hash,
                onStart: () => {
                    window.history.pushState(null, '', hash);
                },
                onComplete: () => {
                    setScrollBehaviourSmooth();
                },
            });
        } else {
            setScrollBehaviourSmooth();
        }
    }, []);
}
