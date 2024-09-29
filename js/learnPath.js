const mobileTrigger = document.querySelector(".mobileTrigger")
const mobileTriggerBtn = document.querySelector(".mobileTrigger button")
const progresFixed = document.querySelector(".contents .container .bodySide .userProgress")
const closeProgresFixed = document.querySelector(".contents .container .bodySide .userProgress .topSide img")

mobileTriggerBtn.addEventListener("click", () => {
    mobileTrigger.style.bottom = "-110%"
    progresFixed.style.bottom = "0%"
})
closeProgresFixed.addEventListener("click", () => {
    mobileTrigger.style.bottom = "0%"
    progresFixed.style.bottom = "-110%"
})