const API_KEY_TMDB = "xx";
function buscarPeliculas() {
    let query = document.getElementById("buscar").value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${xx}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            data.results.forEach(pelicula => {
                html += `<p><strong>${pelicula.title}</strong> (${pelicula.release_date})</p>`;
            });
            document.getElementById("resultados").innerHTML = html;
        })
        .catch(error => console.log("Error en la búsqueda", error));
}