import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth <= 768) {

    const cards = gsap.utils.toArray(".service-card");

    function setActive(activeCard) {

        cards.forEach(card => {
            card.classList.remove("active");
        });

        activeCard.classList.add("active");
    }

    cards.forEach(card => {

        ScrollTrigger.create({
            trigger: card,
            start: "top 55%",
            end: "bottom 55%",

            onEnter: () => setActive(card),
            onEnterBack: () => setActive(card)
        });

    });

    if(cards.length){
        setActive(cards[0]);
    }

}