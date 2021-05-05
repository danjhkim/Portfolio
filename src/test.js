gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".panels",
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.1, max: 0.1 }
        },
        end: () => "+=" + document.querySelector(".panels").offsetWidth
    }
});