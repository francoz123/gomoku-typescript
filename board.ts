import GameTurn from "./gameturn";
import Row from "./row";
import Square from "./square";

export default class Board{
    rows: Row[]
    element: HTMLDivElement
    constructor(size: number, gameTurn: GameTurn){
        this.rows = Array.from({length: size}).map((_, index) => {
            return new Row(index, gameTurn, size)
        })
        this.element = document.createElement('div')
        this.element.classList.add('board')
        this.element.append(...this.rows.map((row) => row.element))
    }
}