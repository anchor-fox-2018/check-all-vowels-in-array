function vowelsTwo(row, col) {
    //code
    let result = [], latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', vowel = 'AIUEO',blockVowel = 0;
    //board
    for (let i = 0; i < row; i++) {
        let tempResult = [];
        for (let c = 0; c < col; c++) {
            tempResult.push(latin[Math.floor(Math.random() * 26)])
        }
        result.push(tempResult);
    }
    console.log(result);

    //find vowel
    for (let i = 0; i < result.length - 1; i++) {
        for (let c = 0; c < result[i].length - 1; c++) {
            if (vowel.indexOf(result[i][c]) !== -1 && vowel.indexOf(result[i][c+1]) !== -1 && vowel.indexOf(result[i+1][c]) !== -1 && vowel.indexOf(result[i+1][c+1]) !== -1) {
                console.log(result[i][c], result[i][c + 1], result[i+1][c+1], result[i+1][c]);
                blockVowel++;
            }
        }
    }
    return blockVowel;
}


console.log(vowelsTwo(5, 4))
// console.log(vowelsTwo(4, 2))