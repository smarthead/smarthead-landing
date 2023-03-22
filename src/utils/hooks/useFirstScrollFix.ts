import { useEffect } from 'react';
import { scrollToSection } from '../scroll';

export function useFirstScrollFix() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 0) {
            scrollToSection({
                section: hash,
                duration: 0,
                onComplete: () => {
                    window.document.body.style.scrollBehavior = 'smooth';
                    document.getElementsByTagName(
                        'html'
                    )[0].style.scrollBehavior = 'smooth';
                },
            });
        } else {
            window.document.body.style.scrollBehavior = 'smooth';
            document.getElementsByTagName('html')[0].style.scrollBehavior =
                'smooth';
        }
    }, []);
}
