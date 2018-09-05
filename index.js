function board(jumlahRow, jumlahCol) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = [];
  let inside = '';

  for (var i = 0; i < jumlahRow; i++) {
    result.push([]);
    for (var j = 0; j < jumlahCol; j++) {
      inside = alphabet.charAt(Math.random() * alphabet.length);
      result[i].push(inside);
    }
  }
  console.log(result);

  let vowels = 'AIUEO';
  let count = 0;
  for (var i = 0; i < result.length - 1; i++) {
    for (var j = 0; j < result[i].length - 1; j++) {
      if (vowels.includes(result[i][j]) === true && vowels.includes(result[i][j+1]) === true && vowels.includes(result[i+1][j]) === true && vowels.includes(result[i+1][j+1]) === true) {
        //console.log('ada');
        count++;
      }
    }
  }
  //debugger;
  return count;
}

console.log(board(5, 4));
