const eventos = [
    { nombre: "click", descripcion: "Se dispara cuando se hace clic en un elemento." },
    { nombre: "dblclick", descripcion: "Se dispara cuando se hace doble clic en un elemento." },
    { nombre: "mouseover", descripcion: "Se dispara cuando el cursor pasa sobre un elemento." },
    { nombre: "mouseout", descripcion: "Se dispara cuando el cursor sale de un elemento." },
    { nombre: "mousemove", descripcion: "Se dispara cuando el ratón se mueve dentro de un elemento." },
    { nombre: "keydown", descripcion: "Se dispara cuando se presiona una tecla." },
    { nombre: "keyup", descripcion: "Se dispara cuando se suelta una tecla." },
    { nombre: "keypress", descripcion: "Se dispara cuando se presiona y mantiene una tecla." },
    { nombre: "focus", descripcion: "Se dispara cuando un input recibe el foco." },
    { nombre: "blur", descripcion: "Se dispara cuando un input pierde el foco." },
    { nombre: "change", descripcion: "Se dispara cuando el valor de un input cambia." },
    { nombre: "submit", descripcion: "Se dispara cuando se envía un formulario." },
    { nombre: "scroll", descripcion: "Se dispara cuando se desplaza la página." },
    { nombre: "resize", descripcion: "Se dispara cuando se cambia el tamaño de la ventana." },
    { nombre: "load", descripcion: "Se dispara cuando la página ha terminado de cargar." }
];

const contenedor = document.getElementById("eventos");
eventos.forEach(evento => {
    let div = document.createElement("div");
    div.classList.add("evento");
    div.innerHTML = `<strong>${evento.nombre}:</strong> ${evento.descripcion}`;
    contenedor.appendChild(div);
});