function animateDiv() {
    document.getElementById('animatedDiv').classList.add('animated');
    setTimeout(() => document.getElementById('animatedDiv').classList.remove('animated'), 1000);
}

function removeClass() {
    document.getElementById('text').classList.remove('red-text');
}

function toggleSize() {
    document.getElementById('resizableDiv').classList.toggle('small-div');
}

let count = 0;
function addBox() {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomColor();
    box.innerText = ++count;
    box.onclick = function() { this.remove(); };
    document.getElementById('container').appendChild(box);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}