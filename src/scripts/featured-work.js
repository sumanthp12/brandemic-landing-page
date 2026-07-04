document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".featured-track");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    if (!track) return;

    const cards = [...track.children];

    let activeIndex = 0;
    cards[0].classList.add("active");
    updateButtons();

    function moveSlider(){

        cards.forEach(card=>{
            card.classList.remove("active");
        });

        cards[activeIndex].classList.add("active");
        requestAnimationFrame(()=>{
        });
        updateButtons();
    }

    function updateButtons(){
        prevBtn.disabled = activeIndex === 0;
        nextBtn.disabled =
            activeIndex === cards.length - 1;
    }

    nextBtn.addEventListener("click",()=>{
        if(activeIndex < cards.length-1){
            activeIndex++;
            moveSlider();
        }
    });

    prevBtn.addEventListener("click",()=>{
        if(activeIndex > 0){
            activeIndex--;
            moveSlider();
        }
    });
});