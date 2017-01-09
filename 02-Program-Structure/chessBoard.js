function getHashBySize(size) {
  let hashSize = '';
  for (let i = 1; i <= size; i++) {
    hashSize += '# ';
  }
  return hashSize;
}

function chessBoard(size) {
  let chessBoard = getHashBySize(size);
    for (let i = 1; i<= size; i++) {
      if (i % 2 == 0) {
        console.log(chessBoard);
      } else {
        console.log(' '+chessBoard);
      }
    }
}

chessBoard(8);