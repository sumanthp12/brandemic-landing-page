import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initPartner = () => {

    const section = document.querySelector(".partner-section");

    if (!section) return;

    const cards = gsap.utils.toArray(".showcase-card");

    const stack = [
            { rotation: 0, y: 0 },
            { rotation: -3, y: 0},
            { rotation: -3, y: 0 },
            { rotation: -3, y: 0 }
        ];

        cards.forEach((card, index) => {

            gsap.set(card, {
                rotation: stack[index].rotation,
                y: stack[index].y,
                zIndex: cards.length - index,
                x: 0,
                opacity: 1
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

    const next = cards[index + 1];

        tl.to(card,{
            x: direction * 1500,
            rotation:0,
            duration:0.5,
            ease:"power2.inOut"
        });

        tl.to(next,{
            rotation:0,
            y:0,
            duration:0.5,
            ease:"power2.out"
        },"<");
});




};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPartner);
} else {
    initPartner();
}