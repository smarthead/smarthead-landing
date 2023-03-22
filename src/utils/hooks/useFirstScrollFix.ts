import { useEffect } from 'react';
import { scrollToSection } from '../scroll';

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
                duration: 0,
                onComplete: () => {
                    setScrollBehaviourSmooth();
                },
            });
        } else {
            setScrollBehaviourSmooth();
        }
    }, []);
}
