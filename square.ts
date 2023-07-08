import GameTurn from "./gameturn"
import Piece, { PLAYER } from "./piece"

enum STATUS{
    OCCUPIED = 'OCCUPIED',
    EMPTY = 'EMPTY'
}

export default class Square{
    id: number
    status: STATUS
    element: HTMLDivElement
    turn: GameTurn
    constructor(id: number, gameTurn: GameTurn) {
        this.id = id
        this.status = STATUS.EMPTY
        this.turn = gameTurn
        this.element = document.createElement('div')
        this.element.classList.add('square')
    }

    get getElement(){
        return this.element
    }

    handleClick(gameTurn: GameTurn){
        if (this.status === STATUS.OCCUPIED) return
        this.status = STATUS.OCCUPIED
        this.element.appendChild(new Piece(this.id, gameTurn).getElement)
    }

    get isOccupied(){
        return this.status === STATUS.OCCUPIED
    }
}