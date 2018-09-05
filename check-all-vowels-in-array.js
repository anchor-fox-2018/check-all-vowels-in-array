
//Release 0 (Jika ingin test case dengan huruf vokal semua, ganti capitalAlphabet dengan hanya huruf vokal AIUEO)
function generateBoard(row, col){
    let capitalAlphabet = 'AIUEOABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let output = []

    for(let i = 0; i < row; i++){
        let arrCol = [];
        for(let j = 0; j < col; j++){
            arrCol.push(capitalAlphabet.charAt(Math.floor(Math.random() * capitalAlphabet.length)));
        }
        output.push(arrCol)
    }
    return output;
}

// console.log(generateBoard(5,4));

//Release 1 
const input = generateBoard(5, 4);
function howManyVowelBlock(row, col){
    let counter = 0;
    // console.log(input);
    // let checkBlock;
    for(let i = 0; i < row-1; i++){
        for(let j = 0; j < col-1; j++){
            if(checkBlock !== undefined){
                 var checkBlock = '';
            }
            // let checkBlock = '';
            var checkBlock = input[i][j]+input[i][j+1]+input[i+1][j]+input[i+1][j+1];
            if(checkAllVowels(checkBlock) == true){
                counter++
            }
            debugger;
            // console.log(checkBlock);
        }
    }
    let output = [input, counter]
    return output;
}

console.log(howManyVowelBlock(5,4));

function checkAllVowels(str){
    let vocals = ['A', 'I', 'U', 'E', 'O'];
    let tampung = [];
    for (let i = 0; i < str.length; i++){
        let j = 0;
        while(j < vocals.length){
            if(str[i] == vocals[j]){
                tampung.push(1);
            }
            j++;
        }
    }

    let jumlah = 0;
    for(let k = 0; k < tampung.length; k++){
        jumlah += tampung[k];
    }
    if(jumlah / str.length == 1){
        return true
    } else {
        return false
    }
    
}


