const tabs = document.getElementsByClassName("tab")
const h1 = document.querySelector("h1")
const buttons = document.getElementsByTagName("button")


tabs[0].style.display = "block"

function showTab(event, id) {
    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
        buttons[i].classList.remove("selected")
    }
    document.getElementById(id).style.display = "block"
    event.currentTarget.classList.add("selected")
    console.log(event.currentTarget)
}