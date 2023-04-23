const tabs = document.getElementsByClassName("tab")
const h1 = document.querySelector("h1")
const buttons = document.getElementsByTagName("button")

// Parodo pirma taba uzkraunant
tabs[0].style.display = "block"

function showTab(event, id) {
     // Paslepia visus tabus, kai paleidziama funkcija
    for(let i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none"
        // nuimti stiliu
        buttons[i].classList.remove("selected")

}
    // rodo tik ta pagal id paleidziant funkcija
    document.getElementById(id).style.display = "block"

    // Prideda selected klase prie paspausto mygtuko
    event.currentTarget.classList.add("selected")
    console.log(event.currentTarget)
}