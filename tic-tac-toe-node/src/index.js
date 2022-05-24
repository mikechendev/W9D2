const View = require('./ttt-view.js')
const Game = require('../ttt_node/game.js')

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let canvasEl = document.querySelector('.ttt');
  let game = new Game();
  let view = new View(game, canvasEl);
  // console.log(view);
  // view.setupBoard();
});

