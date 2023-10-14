let title = document.getElementById("title")
console.log(title)

let shubham = document.getElementById("shubham")
console.log(shubham)

let vaishu = document.getElementsByClassName("para")
console.log(vaishu)

let button = document.getElementById("vaishu")

button.addEventListener("click", whiteModeHandler)

function whiteModeHandler() {
    if (document.body.style.backgroundColor == "white") {
        button.innerText = "Light Mode"
        document.body.style.backgroundColor = "black"
    }
    else {
        button.innerText = "Dark Mode"
        document.body.style.backgroundColor = "white"
    }
}
