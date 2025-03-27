const caja = document.getElementById("caja");

function cambiarColor() {
    caja.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

caja.addEventListener("mouseenter", cambiarColor);
caja.addEventListener("mouseleave", cambiarColor);