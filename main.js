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
  resetGame();
}

// let cellsAroundClick = [];
// let counter = 0;
const checkSurroundingCells = ($cell) => {
  let cellsAroundClick = [];
  let counter = 0;
  const square = parseInt($cell.attr("id"));
  if ($(`#${square - 10}`).hasClass('bomb')) {
    cellsAroundClick.push((square-10));
  }
  if ($(`#${square - 9}`).hasClass('bomb')) {
    cellsAroundClick.push((square-9));
  }
  if ($(`#${square + 1}`).hasClass('bomb')) {
    cellsAroundClick.push((square+1));
  }
  if ($(`#${square + 11}`).hasClass('bomb')) {
    cellsAroundClick.push((square+11));
  }
  if ($(`#${square + 10}`).hasClass('bomb')) {
    cellsAroundClick.push((square+10));
  }
  if ($(`#${square + 9}`).hasClass('bomb')) {
    cellsAroundClick.push((square+9));
  }
  if ($(`#${square - 1}`).hasClass('bomb')) {
    cellsAroundClick.push((square-1));
  }
  if ($(`#${square - 11}`).hasClass('bomb')) {
    cellsAroundClick.push((square-11));
  }
  console.log(cellsAroundClick);

  // counter = 0;
  for (let l = 0; l < cellsAroundClick.length; l++) {
    counter++;
  }

  return $cell.text(counter);
} 

const clicking = $board.on('click', '.square', function() {
  const $cell = $(this);
  if ($cell.hasClass('bomb')) {
    $cell.addClass("showBomb");
    // $cell.append(`<img src="./bomb-img.jpg"/>`);
    return gameOver(false);
  } else {
    const dangerNumber = checkSurroundingCells($cell);
    console.log($(this));
    console.log(dangerNumber);
  }
  
})

resetGame();