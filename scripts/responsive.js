let count = 0
function showMenu() {
    if (count == 0) {
        console.log(count)
        document.getElementById("menu").classList.add("responsive")
        count = 1;
    }

    else {
        document.getElementById("menu").classList.remove("responsive")
        count = 0;
    }
}

if (window.innerWidth > 500) {
    document.getElementById("menu").classList.remove("responsive")
}