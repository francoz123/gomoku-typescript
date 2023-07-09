import Game from "./game"
import GameTurn from "./gameturn"
import Piece, { PLAYER } from "./piece"

enum STATUS{
    OCCUPIED = 'OCCUPIED',
    EMPTY = 'EMPTY'
}

type playerPiece = Piece | null

export default class Square{
    id: number
    rowNunber: number
    status: STATUS = STATUS.EMPTY
    element: HTMLDivElement
    game: Game
    piece: playerPiece = null

    constructor(id: number, rowNumber: number, game: Game) {
        this.id = id
        this.rowNunber =rowNumber
        this.game = game
        this.element = document.createElement('div')
        this.element.classList.add('square')
        this.element.addEventListener('click', () => {
            this.handleClick(game)
        })
    }

    get getElement(){
        return this.element
    }

    handleClick(game: Game){
        if (this.isOccupied) return
        this.status = STATUS.OCCUPIED
        this.piece = new Piece(this.id, game)
        this.element.appendChild(this.piece.getElement)
        //alert(this.rowNunber + " " + this.piece.id)
    }

    get isOccupied(){
        return this.status === STATUS.OCCUPIED
    }
}