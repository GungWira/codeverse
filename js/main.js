
// NAVBAR
const nav = document.querySelector("nav")
const mobileSideNav = document.querySelector(".navSideMobile")
const navMenuList = document.querySelectorAll(".navSideMobile .container .bodySide a")
const closeBtnMobileNav = document.querySelector(".navSideMobile .container .headSide button")
const closeBtnMobileNavImg = document.querySelector(".navSideMobile .container .headSide button img")

nav.addEventListener("click", (e) => {
    if(e.target.classList.contains("hamMenu") || e.target.classList.contains("hamImg")){
        mobileSideNav.style.left = '0%'
        setTimeout(() => {
            mobileSideNav.style.backgroundColor = "#1d1d1da5"
        }, 300);
        navMenuList.forEach((list, index) => {
            setTimeout(() => {
                list.style.transform = 'translateX(0px)'
            }, 300 + 50 * index);
        })
    }
})

mobileSideNav.addEventListener("click", (e) => {
    if(e.target.classList.contains("canClose") || e.target == closeBtnMobileNav || e.target == closeBtnMobileNavImg){
        mobileSideNav.style.backgroundColor = "transparent"
        setTimeout(() => {
            mobileSideNav.style.left = '-110%'
        }, 300);
        setTimeout(() => {
            navMenuList.forEach((list) => {
                list.style.transform = 'translateX(-10px)'
            })
        }, 600);
    }
})



// CARD
const cards = document.querySelectorAll(".cardDesign")
cards.forEach((card) => {
    card.addEventListener("click", function () {
        if(this.classList.contains("ct")){
            document.location.href = "certificate.detail.html"
        }else if(this.classList.contains("bc")){
            document.location.href = "bootcamp.detail.html"
        }else{
            document.location.href = "course.detail.html"
        }
    })
})

// SEARCH
const searchBars = document.querySelectorAll(".searchbar input")
searchBars.forEach((bar) => {
    bar.addEventListener("keypress", (e) => {
        if(e.key == "Enter"){
            document.location.href = "search.html"
        }
    })
})

// SIGN
const signBtn = document.querySelector("nav .container .account button.sign")
signBtn.addEventListener("click", () => {
    document.location.href = "signin.html"
})

// BOT CHAT
const botChat = document.querySelector(".chatbot")
const botChatClose = document.querySelector(".chatbot .close")
const botChatTrigger = document.querySelector(".botTrigger")

botChatTrigger.addEventListener("click", () => {
    botChat.style.bottom = '24px'
})
botChatClose.addEventListener("click", () => {
    botChat.style.bottom = '-624px'
})
