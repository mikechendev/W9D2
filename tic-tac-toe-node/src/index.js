const View = require('./ttt-view.js')
const Game = require('../ttt_node/game.js')

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const canvasEl = document.getElementById('ttt');
  const game = new Game();
  const view = new View(game);
  view.setupBoard();
});

