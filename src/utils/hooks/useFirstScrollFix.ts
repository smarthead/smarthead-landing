import { useEffect } from 'react';
import { scrollToSection } from '../scroll';

function setScrollBehaviourSmooth() {
    window.document.body.style.scrollBehavior = 'smooth';
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
}

function fixBodyStyles() {
    window.document.body.style.maxHeight = 'auto';
    window.document.body.style.overflowX = 'hidden';
    window.document.body.style.overflowY = 'auto';
}

export function useFirstScrollFix() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection({
                section: hash,
                duration: 0,
                onStart: () => {
                    fixBodyStyles();
                },
                onComplete: () => {
                    setScrollBehaviourSmooth();
                },
            });
        } else {
            fixBodyStyles();
            setScrollBehaviourSmooth();
        }
    }, []);
}
