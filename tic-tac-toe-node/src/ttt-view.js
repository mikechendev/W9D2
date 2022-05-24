const Game = require("../ttt_node/game")

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;

    this.setupBoard();
    //this.bindEvents();
  }

  setupBoard() {
    const ourGrid = this.game.board.grid;
    let ul = document.createElement("ul");
    for (let i = 0; i < ourGrid.length; i++) {
      for (let j = 0; j < ourGrid[0].length; j++) {
        let li = document.createElement("li");
        ul.appendChild(li);
      }
    }
    this.el.appendChild(ul);

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
