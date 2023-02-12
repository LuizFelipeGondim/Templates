const checkbox = document.getElementById("switch-checkbox")
const textColor = "#374151"

const title = document.querySelector(".main-title")
const svgs = document.querySelectorAll(".list__switch-svg")
const list = document.querySelectorAll(".list__link")

function setDarkMode() {
    document.body.style.backgroundColor = "#16161d";
    title.style.color = "#ffffff"

    list.forEach( (item) => {
        item.style.color = "#ffffff"
        item.style.borderColor = "#ffffff"
    })

    svgs.forEach( (item) => {
        item.style.fill = "#67686b"
    })

    localStorage.setItem("@dark-mode", "enabled")
}

function setLightMode() {
    document.body.style.backgroundColor = "#e5e7eb";
    title.style.color = textColor

    list.forEach( (item) => {
        item.style.color = textColor
        item.style.borderColor = textColor
    })

    svgs.forEach( (item) => {
        item.style.fill = "#000000"
    })

    localStorage.removeItem("@dark-mode")
}

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        setDarkMode()
    } else {
        setLightMode()
    }
})

if (localStorage.getItem("@dark-mode") === "enabled") {
    checkbox.checked = true;
    setDarkMode()
}