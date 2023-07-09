import Game from "./game";
import GameTurn from "./gameturn";
import Row from "./row";
import Square from "./square";

export default class Board{
    rows: Row[]
    element: HTMLDivElement
    constructor(size: number, game: Game){
        this.rows = Array.from({length: size}).map((_, index) => {
            return new Row(index, game, size)
        })
        this.element = document.createElement('div')
        this.element.classList.add('board')
        this.element.append(...this.rows.map((row) => row.element))
    }
}