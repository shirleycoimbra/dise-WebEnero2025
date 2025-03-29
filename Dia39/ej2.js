let p=document.querySelector("p")
    fetch:("https://api.tutiempo.net/json/?lan=es&apid=aCTXazqqaa4M3vy&lid=46017")
    .then(data => data.json())
    .then(data => {
        let text = '';
        text += 'Temperatura: $(data.temperatura_actual)C· <br>';
        text += 'Humedad: $(data.humedad) %';
        p.innerHTML = text;
    })
