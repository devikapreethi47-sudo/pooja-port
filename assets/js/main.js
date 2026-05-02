// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Hero animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

    tl.from(".nav-links a", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
    })
    .from(".hero h1", {
        y: 100,
        opacity: 0,
    }, "-=0.5")
    .from(".hero p", {
        y: 50,
        opacity: 0,
    }, "-=0.8")
    .from(".hero-btns", {
        y: 50,
        opacity: 0,
    }, "-=0.8")
    .from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1.5
    }, "-=1.2");

    // Reveal animations on scroll
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });
});
