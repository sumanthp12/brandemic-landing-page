import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPartner = () => {

    const section = document.querySelector(".partner-section");

    if (!section) return;

    const cards = gsap.utils.toArray(".showcase-card");

    cards.forEach((card, index) => {

        gsap.set(card, {
            rotation: index * 2 - 3,
            y: index * 20,
            zIndex: cards.length - index
        });

    });

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=1200",
            pin: true,
            scrub: 0.5,
            markers: false
        }

    });

   cards.forEach((card, index) => {

    if (index === cards.length - 1) return;

    const direction = index % 2 === 0 ? -1 : 1;

    tl.to(card, {
        x: direction * 1200,
        rotation: direction * 15,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut"
    });
});




};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPartner);
} else {
    initPartner();
}