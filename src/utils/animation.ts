export function invalidate(
    createMaster: () => void,
    timeline: gsap.core.Timeline
) {
    console.log('invalidating');
    // timeline.pause();
    const position = timeline.time();
    timeline.clear();
    createMaster();
    timeline.time(position);
    // timeline.play();
}
