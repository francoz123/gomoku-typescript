import Game from "./game"
import Piece, { PLAYER } from "./piece"

enum STATUS{
    OCCUPIED = 'OCCUPIED',
    EMPTY = 'EMPTY'
}

type playerPiece = Piece | null

/**
 * Models a square on the board.
 * provides methods to check if a square is occupied, and also to sets the status 
 */
export default class Square{
    id: number
    rowNunber: number
    status: STATUS = STATUS.EMPTY
    element: HTMLDivElement
    game: Game
    piece: playerPiece = null

    /**
     * Constructors to initialize id and rowNumber
     * @param id identifies this square in the row
     * @param rowNumber the row number where this square resides
     * @param game a Game object representing the game state
     */
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

    // Returns the div element for this square
    get getElement(){
        return this.element
    }

    /**
     *Called when this square is clicked
     * @param game 
     * @returns 
     */
    handleClick(game: Game){
        if(game.gameOver) return
        if (this.isOccupied) return
        this.status = STATUS.OCCUPIED
        const currentTurn = game.turn
        this.piece = new Piece(this.id, game)
        this.element.appendChild(this.piece.getElement)
        // Count pieces for current player
        let count = this.game.countConnectedPieces(this.rowNunber, this.id)
        game.checkBoard() // Check for draw
        if (count == 5) {
            const info = document.getElementById('message')
            info?.textContent? info.textContent = currentTurn + " wins" : " "
        }else if(game.gameOver){
            const info = document.getElementById('message')
            info?.textContent? info.textContent = "Draw" : " "
        }
    }

    /**
     * Sets the status for this square
     * 0 -> empty
     * 1+ -> occupied
     * @param value number 
     */
    setStatus(value: number){
        this.status = value == 0 ? STATUS.EMPTY : STATUS.OCCUPIED
    }

    // Retruns the occupied status of this square
    get isOccupied(){
        return this.status === STATUS.OCCUPIED
    }
}