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
    console.log(row);
    return row;
}

function checkElementIsVowel(char) {
    const vowels = "AIUEO";
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === char) {
            return true;
        }
    }
}

function checkBlockForVowels(block) {
    let vowelBlock = [];
    let count = 0;
    for (let i = 0; i < block.length - 1; i++) {
        for (let j = 0; j < block[i].length; j++) {
            if (checkElementIsVowel(block[i][j]) === true
                && checkElementIsVowel(block[i][j + 1]) === true
                && checkElementIsVowel(block[i + 1][j]) === true
                && checkElementIsVowel(block[i + 1][j + 1]) === true) {
                count++;
            }
        }
    }
    return count;
}
//generateArray(5, 4)
console.log(checkBlockForVowels([
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']]));