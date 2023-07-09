import Game from "./game";
import GameTurn from "./gameturn";
import Square from "./square";

export default class Row {
    id: number
    squares: Square[]
    element: HTMLDivElement
    game: Game
    constructor(id: number, game: Game, numberOfSquares: number = 5, occupiedSquares: number[] = []) {
      this.id = id
      this.game = game
      this.squares = Array.from({ length:  numberOfSquares}).map((_, index) => {
        const squareId = index
        return new Square(squareId, id, game)
      })
      this.element = document.createElement('div')
      this.element.classList.add('row')
      this.element.append(...this.squares.map((square) => square.element))
    }
  
    get selectedSeatsId() {
      return this.squares.filter((square) => square.isOccupied).map((square) => square.id)
    }
  }