function chessBoard() {
  let chessBoard = '# # # # # # # #';
    for (let i = 1; i<= 8; i++) {
      if (i % 2 == 0) {
        console.log(chessBoard);
      } else {
        console.log(' '+chessBoard);
      }
    }
}

chessBoard();