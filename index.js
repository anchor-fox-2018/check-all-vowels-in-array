function generateChar() {
    let generatedChar = '';
    const alphabet = "ABCDEFGHIJKLMNOPQSTUVWXYZ";
    generatedChar = generatedChar = alphabet.charAt(Math.random() * alphabet.length)
    return generatedChar;
}

function generateArray(rowlen, colLen) {
    let row = [];
    for (let i = 0; i < rowlen; i++) {
        let col = [];
        for (let j = 0; j < colLen; j++) {
            col.push(generateChar())
        }
        row.push(col);
    }
    return row;
}

console.log(generateArray(5, 4))