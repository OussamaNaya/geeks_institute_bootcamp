const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[6,4,2]
];

let board;
let player;
let ai;
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const levelSelect = document.getElementById("level");

function chooseSymbol(symbol) {
  player = symbol;
  ai = symbol === "X" ? "O" : "X";
  startGame();
}

function startGame() {
  board = Array.from(Array(9).keys());
  gameOver = false;
  message.textContent = "";
  restartBtn.style.display = "none";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.addEventListener("click", handleTurn, { once: true });
  });
}

function handleTurn(e) {
  const id = e.target.id;

  if (!gameOver) {
    turn(id, player);
    if (!checkWin(board, player) && !checkTie()) {
      setTimeout(computerTurn, 500);
    }
  }
}

function turn(id, symbol) {
  board[id] = symbol;
  document.getElementById(id).textContent = symbol;

  if (checkWin(board, symbol)) {
    endGame(symbol);
  }
}

function computerTurn() {
  let move;

  if (levelSelect.value === "easy") {
    move = randomMove();
  } else {
    move = smartMove();
  }

  turn(move, ai);
  checkTie();
}

// EASY MODE
function randomMove() {
  const empty = board.filter(x => typeof x === "number");
  return empty[Math.floor(Math.random() * empty.length)];
}

// HARD MODE (block player)
function smartMove() {
  // try to block player
  for (let combo of winCombos) {
    let values = combo.map(i => board[i]);

    if (values.filter(v => v === player).length === 2 &&
        values.includes(typeof values.find(v => typeof v === "number"))) {

      return combo.find(i => typeof board[i] === "number");
    }
  }

  return randomMove();
}

// CHECK WIN
function checkWin(board, symbol) {
  return winCombos.some(combo =>
    combo.every(i => board[i] === symbol)
  );
}

// TIE GAME
function checkTie() {
  if (board.filter(x => typeof x === "number").length === 0) {
    message.textContent = "🤝 Tie Game!";
    gameOver = true;
    restartBtn.style.display = "block";
    return true;
  }
  return false;
}

// END GAME
function endGame(winner) {
  message.textContent = winner === player ? "🎉 You Win!" : "💻 Computer Wins!";
  gameOver = true;
  restartBtn.style.display = "block";
}