const $board = $('#board');

const makeBoard = (squares) => {
  // empty: Remove all child nodes of the set of matched elements from the DOM.
  $board.empty();
  for(let i = 0; i < squares; i++) {
    const $square = $(`<div class="square" id="${i}"></div>`)
    if (Math.random() < 0.1) {
      $square.addClass('bomb');
    }
    $board.append($square);
  }

  // for (let i = 0; i < rows; i++) {
  //   const $row = $(`<div class = "row" id = "${i}"></div>`);
  //   for (let j = 0; j < columns; j++) {
  //     const $column = $(`<div class = "column hidden" value = "${j}"></div>`);
  //     if (Math.random() < 0.1) {
  //       $column.addClass('bomb');
  //     }
  //     $row.append($column);
  //   }
  //   $board.append($row);
  // }
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
let counter = 0;
const checkSurroundingCells = ($cell) => {
  let cellsAroundClick = [];
  const square = parseInt($cell.attr("id"));
  // console.log('help');
  if ($(`#${square - 10}`).hasClass('bomb')) {
    cellsAroundClick.push((square-10));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square - 9}`).hasClass('bomb')) {
    cellsAroundClick.push((square-9));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square + 1}`).hasClass('bomb')) {
    cellsAroundClick.push((square+1));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square + 11}`).hasClass('bomb')) {
    cellsAroundClick.push((square+11));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square + 10}`).hasClass('bomb')) {
    cellsAroundClick.push((square+10));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square + 9}`).hasClass('bomb')) {
    cellsAroundClick.push((square+9));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square - 1}`).hasClass('bomb')) {
    cellsAroundClick.push((square-1));
    // console.log(cellsAroundClick);
  }
  if ($(`#${square - 11}`).hasClass('bomb')) {
    cellsAroundClick.push((square-11));
    // console.log(cellsAroundClick);
  }
  console.log(cellsAroundClick);

  // counter = 0;
  for (let l = 0; l < cellsAroundClick.length; l++) {
    counter++;
  }

  
  // if ($cell.eq(square).hasClass('bomb')) {
  //   alert('bomb to the right!');
  // }
  // get the cell.value
  // look at cell[row][value]
  // look at cell[row][value + 1]
  // look at cell[row][value - 1]

  // look at cell[row + 1][value]
  // look at cell[row + 1][value + 1]
  // look at cell[row + 1][value - 1]

  // look at cell[row - 1][value]
  // look at cell[row - 1][value + 1]
  // look at cell[row - 1][value - 1]
  return $cell.text(counter);
} 

const clicking = $board.on('click', '.square', function() {
  const $cell = $(this);
  if ($cell.hasClass('bomb')) {
    return gameOver(false);
  } else {
    const dangerNumber = checkSurroundingCells($cell);
    console.log($(this));
    console.log(dangerNumber);
  }
  
  
})

resetGame();