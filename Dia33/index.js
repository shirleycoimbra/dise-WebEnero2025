for (let i = 0; i < 4; i++) {
    document.write('<tr>');
    for (let j = 0; j < 4; j++) {
        document.write(`<td id="cell-${i}-${j}">${i * 4 + j + 1}</td>`);
    }
    document.write('</tr>');
}