document.getElementById("btnClick").addEventListener("click", () => {
    alert("Hiciste click!");
});

document.getElementById("campoTexto").addEventListener("input", (event) => {
    console.log("Texto ingresado: " + event.target.value);
});

document.getElementById("miDiv").addEventListener("dblclick", () => {
    miDiv.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});