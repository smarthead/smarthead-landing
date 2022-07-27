export function invalidate(
    createMaster: () => void,
    timeline: gsap.core.Timeline
) {
    const position = timeline.time();
    timeline.clear();
    createMaster();
    timeline.time(position);
}
