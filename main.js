const $board = $('#board');

const makeBoard = (rows, columns) => {
  // empty: Remove all child nodes of the set of matched elements from the DOM.
  $board.empty();
  for (let i = 0; i < rows; i++) {
    const $row = $(`<div class = "row" id = "${i}"></div>`);
    for (let j = 0; j < columns; j++) {
      const $column = $(`<div class = "column hidden" value = "${j}"></div>`);
      if (Math.random() < 0.1) {
        $column.addClass('bomb');
      }
      $row.append($column);
    }
    $board.append($row);
  }
}

const resetGame = () => {
  makeBoard(10, 10);
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


const checkSurroundingCells = ($cell) => {
  const column = $cell.attr("value");
  const row = $cell.parent().attr("id");
  console.log(column, row);
  $()

  if ($cell.hasClass('bomb')) {
    alert('bomb to the right!');
  }
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

}

const clicking = $board.on('click', '.column.hidden', function() {
  const $cell = $(this);
  if ($cell.hasClass('bomb')) {
    return gameOver(false);
  } else {
    const dangerNumber = checkSurroundingCells($cell);
    console.log($(this));
  }
  
  
})

resetGame();