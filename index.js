function board(jumlahRow, jumlahCol) {
  let alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  let result = [];
  let inside = '';

  for (var i = 0; i < jumlahRow; i++) {
    result.push([]);
    for (var j = 0; j < jumlahCol; j++) {
      inside = alphabet.charAt(Math.random() * alphabet.length);
      result[i].push(inside);
    }
  }
  return result;
}

console.log(board(5, 4));
