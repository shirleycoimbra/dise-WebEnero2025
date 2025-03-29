function cargarContenido(archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => document.getElementById("contenido").innerHTML = data)
        .catch(error => console.log("Error al cargar contenido", error));
}