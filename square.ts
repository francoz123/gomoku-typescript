import GameTurn from "./gameturn"
import Piece, { PLAYER } from "./piece"

enum STATUS{
    OCCUPIED = 'OCCUPIED',
    EMPTY = 'EMPTY'
}

export default class Square{
    id: number
    status: STATUS = STATUS.EMPTY
    element: HTMLDivElement
    turn: GameTurn
    constructor(id: number, gameTurn: GameTurn) {
        this.id = id
        this.turn = gameTurn
        this.element = document.createElement('div')
        this.element.classList.add('square')
        this.element.addEventListener('click', () => {
            this.handleClick(gameTurn)
        })
    }

    get getElement(){
        return this.element
    }

    handleClick(gameTurn: GameTurn){
        if (this.isOccupied) return
        this.status = STATUS.OCCUPIED
        this.element.appendChild(new Piece(this.id, gameTurn).element)
    }

    get isOccupied(){
        return this.status === STATUS.OCCUPIED
    }
}