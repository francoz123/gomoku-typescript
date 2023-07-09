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
            this.handleClick(this.game)
        })
    }

    get getElement(){
        return this.element
    }

    handleClick(game: Game){
        if(game.gameOver) return
        if (this.isOccupied) return
        this.status = STATUS.OCCUPIED
        this.piece = new Piece(this.id, game)
        this.element.appendChild(this.piece.getElement)
        let count = this.game.countConnectedPieces(this.rowNunber, this.id)
        game.checkBoard()
        if (count == 5) {
            game.nextTurn()
            const info = document.getElementById('info')
            info?.textContent? info.textContent = game.turn + " wins" : " "
        }else if(game.gameOver){
            game.nextTurn()
            const info = document.getElementById('info')
            info?.textContent? info.textContent = "Draw" : " "
        }
    }

    get isOccupied(){
        return this.status === STATUS.OCCUPIED
    }
}