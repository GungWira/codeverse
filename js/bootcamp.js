window.addEventListener("DOMContentLoaded", () => {
    const allHeroCards = document.querySelectorAll(".hero .cardDesign")
    let cardWidth = allHeroCards[0].getBoundingClientRect().width + 12

    allHeroCards.forEach((card) => {
        card.style.transform = "translateX(-"+ cardWidth +"px)"
    })

    let count = 1

    setInterval(() => {
        count++
        if(count != 6){
            allHeroCards.forEach((card) => {
                card.style.transform = "translateX(-"+ cardWidth * count +"px)"
                if(count == 5){
                    setTimeout(() => {
                        card.style.transition = "0s"
                        card.style.transform = "translateX(-"+ cardWidth +"px)"
                        setTimeout(() => {
                            card.style.transition = ".4s ease-in-out"
                            count = 1
                        }, 1000);
                    }, 1000);
                }
            })
        }
    }, 2500);
})