function cambiarColores() {
    document.querySelectorAll(".cuadrado").forEach(div => {
        div.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
}