function randomAlphabetInArray(row,col){
    let hasil = [];
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0;i < row;i++){
        let isi = [];
        for(let j = 0;j < col;j++){
            let acak = Math.floor(Math.random()*abc.length);
            isi.push(abc[acak]);
        }
        hasil.push(isi)
    }
    return hasil    
}
var contoh = randomAlphabetInArray(15,15)
function checkVowels(contoh){
    //let vowell = 'aiueo'
    //console.log(contoh)
    let hasil = 0;
    for(let i = 0;i < contoh.length-1;i++){
        for(let j = 0;j < contoh[i].length;j++){
            if(vowellCheck(contoh[i][j]) == true && vowellCheck(contoh[i][j+1]) == true &&vowellCheck(contoh[i+1][j]) == true && vowellCheck(contoh[i+1][j+1]) == true ){
                //console.log(i,'===',j)
                hasil++
            }
        }
    }
    function vowellCheck(huruf){
        //huruf.toLowerCase()
        let vowell = 'AIUEO'
        for(let i = 0;i < vowell.length;i++){
            if(vowell[i] === huruf){
                return true
            }
        }
    }
    return hasil
}
//var contoh =[['A','X','C','Y'],['E','O','O','S'],['I','U','I','N'],['M','Y','O','E'],['P','D','A','I']];
console.log(checkVowels(contoh))