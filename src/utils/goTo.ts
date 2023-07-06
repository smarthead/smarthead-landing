import { scrollToSection } from './scrollUtils';
import { navigate } from 'gatsby';

export function goTo(section: string) {
    // else hash will be pushed in history on each click and scrolling through cases will be broken
    if (window.location.hash === section) {
        scrollToSection({
            section: section,
        });
    } else {
        // else site won't be scrolled to the saved position (when go back to root with browser back button)
        void navigate(section);
    }
}
