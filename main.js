const $board = $('#board'); 

const makeBoard = (squares) => {
  // empty: Remove all child nodes of the set of matched elements from the DOM.
  $board.empty();
  for(let i = 0; i < squares; i++) {
    const $square = $(`<div class="square" id="${i}"></div>`);
    if (Math.random() < 0.1) {
      $square.addClass('bomb');
    }
    $board.append($square);
  }

}

const resetGame = () => {
  makeBoard(100);
}


const gameOver = (hasWon) => {
  let message = '';
  if (hasWon) {
    message = 'All Clear!'
  } else {
    message = 'BOOM!! Game Over';
  }
  alert(message);
  // resetGame();
}

const checkSurroundingCells = ($cell) => {
  const square = parseInt($cell.attr("id"));
  let cellsToCheck = [(square-10), (square-9), (square+1), (square+11), (square+10), (square+9), (square-1), (square-11)];
  // console.log(cellsToCheck);
  let cellsAroundClick = [];

  // const square = parseInt($cell.attr("id"));
  for (let a = 0; a < cellsToCheck.length; a++) {
    if ($(`#${cellsToCheck[a]}`).hasClass('bomb')) {
      // console.log(`${a}`);
      cellsAroundClick.push(a);
    }
  }
  // console.log(cellsAroundClick);

  return $cell.text(cellsAroundClick.length);
} 

const clicking = $board.on('click', '.square', function() {
  const $cell = $(this);
  if ($cell.hasClass('bomb')) {
    $(".bomb").addClass("showBomb");
    gameOver(false);
  } else {
    const dangerNumber = checkSurroundingCells($cell);
  }
  
})

resetGame();