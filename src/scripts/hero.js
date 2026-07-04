import gsap from "gsap";

window.addEventListener("load", () => {

    gsap.from(".hero-word",{
    x:-40,
    opacity:0,
    filter:"blur(6px)",
    duration:0.9,
    stagger:0.08,
    ease:"power4.out"
});

});