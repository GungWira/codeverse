window.addEventListener("DOMContentLoaded", () => {

    const selectionItems = document.querySelectorAll(".trending .container .headSide .selectionTrending .itemSelection")
    const boxSelections = document.querySelectorAll(".trending .container .bodySide .coverTrend")

    selectionItems.forEach((item) => {
        item.addEventListener("click", function() {
            document.querySelector(".trending .container .headSide .selectionTrending .itemSelection.active")?.classList.remove("active")
            document.querySelector(".trending .container .bodySide .coverTrend.active")?.classList.add("transition-hide")

                setTimeout(() => {
                    document.querySelector(".trending .container .bodySide .coverTrend.active")?.classList.remove("active")
                        
                            let kind = this.classList[1]

                            if(kind == "fe"){
                                boxSelections[0].classList.add('transition-hide')
                                boxSelections[0].classList.add('active')
                            }else if(kind == "be"){
                                boxSelections[1].classList.add('transition-hide')
                                boxSelections[1].classList.add('active')
                            }else if(kind == "md"){
                                boxSelections[2].classList.add('transition-hide')
                                boxSelections[2].classList.add('active')
                            }else if(kind == "bc"){
                                boxSelections[3].classList.add('transition-hide')
                                boxSelections[3].classList.add('active')
                            }else{
                                boxSelections[4].classList.add('transition-hide')
                                boxSelections[4].classList.add('active')
                            }
                            setTimeout(() => {
                                if(kind == "fe"){
                                    boxSelections[0].classList.remove('transition-hide')
                                }else if(kind == "be"){
                                    boxSelections[1].classList.remove('transition-hide')
                                }else if(kind == "md"){
                                    boxSelections[2].classList.remove('transition-hide')
                                }else if(kind == "bc"){
                                    boxSelections[3].classList.remove('transition-hide')
                                }else{
                                    boxSelections[4].classList.remove('transition-hide')
                                }
                                document.querySelector(".trending .container .bodySide .coverTrend.active")?.classList.remove("transition-hide")
                            }, 400);
                }, 400);
            this.classList.add("active")
        })
    })

    const categoryCards = document.querySelectorAll(".category .container .bodySide .itemCategory")
    categoryCards.forEach((card) => {
        card.addEventListener("click", () => {
            document.location.href = "category.html"
        })
    })

    const pathCards = document.querySelectorAll(".learnPath .container .bodySide .leftSide .item .footItem p")
    pathCards.forEach((card) => {
        card.addEventListener("click", () => {
            document.location.href = "learnPath.html"
        })
    })

    const categoryItem = document.querySelectorAll(".learnPath .container .bodySide .leftSide .item");

    categoryItem.forEach((card) => {
        card.addEventListener('click', function() {
            // Menghapus class 'active' dari item yang sudah aktif
            document.querySelector(".learnPath .container .bodySide .leftSide .item.active")?.classList.remove('active');
            
            // Menambahkan class 'active' ke item yang diklik
            this.classList.add('active');
        });
    });
})