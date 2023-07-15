import Game from "./game";
import Square from "./square";

/**
 * Models a row of suares on the board
 */
export default class Row {
    id: number
    squares: Square[]
    element: HTMLDivElement
    game: Game

    /**
     * Constructo to initialize id and create squares
     * @param id 
     * @param game 
     * @param numberOfSquares 
     * @param occupiedSquares 
     */
    constructor(id: number, game: Game, numberOfSquares: number = 5) {
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