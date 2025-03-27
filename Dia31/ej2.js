function cambiarColor(boton) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    boton.style.backgroundColor = randomColor;
}