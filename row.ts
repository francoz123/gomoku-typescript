import Square from "./square";

export default class Row {
    id: number
    squares: Square[]
    element: HTMLDivElement
  
    constructor(id: number, numberOfSquares: number = 5, occupiedSquares: number[] = []) {
      this.id = id
      this.squares = Array.from({ length:  numberOfSquares}).map((_, index) => {
        const squareId = numberOfSquares * id + index
        return new Square(squareId)
      })
      this.element = document.createElement('div')
      this.element.classList.add('row')
      this.element.append(...this.squares.map((square) => square.element))
    }
  
    get selectedSeatsId() {
      return this.squares.filter((square) => square.isOccupied).map((square) => square.id)
    }
  }