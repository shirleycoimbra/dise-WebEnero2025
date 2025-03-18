function mostrar(){
    const text =  document.getElementById("text").value;
    console.log(text);
    const p = document.getElementById("resultado");
    p.innerHTML= text;
}   