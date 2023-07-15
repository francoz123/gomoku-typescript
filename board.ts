import Game from "./game";
import Row from "./row";

/**
 * This class is used to model a playing board.
 * It does this by generating rows of div elements.
 */
export default class Board{
    rows: Row[]
    element: HTMLDivElement
    /**
     * Constructor to initialize number of rows.
     * @param size - number of rows to be generated
     * @param game - a Game object that handles game state
     */
    constructor(size: number, game: Game){
        this.rows = Array.from({length: size}).map((_, index) => {
            return new Row(index, game, size)
        })
        this.element = document.createElement('div')
        this.element.classList.add('board')
        this.element.append(...this.rows.map((row) => row.element))
    }
}