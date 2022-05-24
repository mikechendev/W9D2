const Game = require("../ttt_node/game")

class View {
  constructor(game, el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    const $ul = $("<ul>");

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let $li = $("<li>");
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
    // const ourGrid = this.game.board.grid;
    // const ul = document.createElement("ul");
    // const li = document.createElement("li");
    // for (let i = 0; i < ourGrid.length; i++) {
    //   for (let j = 0; j < ourGrid[0].length; j++) {
    //     // 
    //   }
    // }
  }
  
  bindEvents() {
    this.$el.on("click", "li", (event =. {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }))
  }

  handleClick(e) {}

  makeMove($square) {}

}

module.exports = View;
