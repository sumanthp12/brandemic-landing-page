document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".featured-track");
    const cards = [...document.querySelectorAll(".work-card")];

    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    if(!track) return;
    let activeIndex = 0;
    cards[0].classList.add("active");
    update();

    function update(){
        cards.forEach(card=>{
            card.classList.remove("active");
        });

        cards[activeIndex].classList.add("active");
        requestAnimationFrame(()=>{
            const activeCard = cards[activeIndex];
            const slider = document.querySelector(".featured-slider");
            const sliderWidth = slider.clientWidth;
            const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth/2;

            let translate = cardCenter - sliderWidth/2;

            const maxTranslate = track.scrollWidth - sliderWidth;
            translate = Math.max(0,translate);
            translate = Math.min(maxTranslate,translate);
            track.style.transform = `translateX(-${translate}px)`;
        });

        prevBtn.disabled =
            activeIndex===0;

        nextBtn.disabled =
            activeIndex===cards.length-1;

    }

    nextBtn.addEventListener("click",()=>{
        if(activeIndex<cards.length-1){
            activeIndex++;
            update();
        }
    });

    prevBtn.addEventListener("click",()=>{
        if(activeIndex>0){
            activeIndex--;
            update();
        }
    });

    cards.forEach((card,index)=>{
    card.addEventListener("click",()=>{
        activeIndex=index;
        update();
    });
});

window.addEventListener("resize",update);
});
