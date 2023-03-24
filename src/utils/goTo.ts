import { scrollToSection } from './scrollUtils';
import { navigate } from 'gatsby';

export function goTo(section: string) {
    if (window.location.hash === section) {
        scrollToSection({
            section: section,
        });
    } else {
        void navigate(section);
    }
}
