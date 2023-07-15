import { InferencePriority } from "typescript";
import Board from "./board";
import { PLAYER } from "./piece";

/**
 * The Game class is used to manage game play and checking legal moves.
 * It also provides methods to detect a win or a draw, and to switch turns between players.
 */
type Color = PLAYER | null | undefined

export default class Game{
    board: Board
    boardSize: number
    gameOver: boolean
    turn: PLAYER
    started: boolean = false

    /**
     * Constructor to initialize the board and other variables
     * @param boardSize 
     * @param turn 
     * @param gameOver 
     */
    constructor(boardSize: number, turn: PLAYER, gameOver: boolean = false){
        this.boardSize = boardSize
        this.turn = turn
        this.gameOver = gameOver
        this.board = new Board(boardSize, this)
    }

    // This method starts the game
    start(){
        const container = document.getElementById('container')
        container?.firstElementChild?.remove() // Removes the form
        container?.append(this.board.element)
        // Adds a div to display game information
        const info = document.createElement('div')
        info.classList.add('info')
        info.id = "info"

        const p = document.createElement('p')
        p.id = 'message'
        p.textContent = this.turn + " to play"
        // Reset button
        const resetButton = document.createElement('button')
        resetButton.textContent = "Reset"
        // Add reset action to the reset button
        resetButton.addEventListener('click', () => {
            const rows = this.board.rows
            for (let i=0; i<this.boardSize; i++) {
                for (let j=0; j<this.boardSize; j++) {
                    const square = rows[i].squares[j]
                    if (square.isOccupied) {
                        square.getElement.firstChild?.remove()
                        square.setStatus(0)
                    }
                }
            }
            this.gameOver = false
            p.textContent = this.turn + " to play"
        })

        info.append(p)
        info.append(resetButton)

        container?.append(info)
    }
    // Used to switch turns between players
    nextTurn(){
        this.turn = this.turn == PLAYER.BLACK ? PLAYER.WHITE : PLAYER.BLACK
    } 
    /**
     * Checks if a player has connected fives pieces in a row
     * @param yCoord 
     * @param xCoord 
     * @returns number
     */
    countConnectedPieces(yCoord:number, xCoord:number): number {
        let count = 1;
        let rows = this.board.rows
        let color: Color = rows[yCoord].squares[xCoord].piece?.color
        // Counts in all possible directions
        for (let dy = -1; dy <= 1; dy++) { // (-1, -1), (-1, 1) etc
            for (let dx = -1; dx <= 1; dx++) {
                let currernCount = 1

                if (dx == 0 && dy == 0) continue // Skips start location
                let x = xCoord + dx
                var y = yCoord + dy

                if (!this.isValidSquare(x, y)) continue

                let square = rows[y].squares[x]

                if (square.isOccupied && square.piece?.color === color){
                    currernCount++
                    let x1 = x + dx
                    let y1 = y + dy

                    if (!this.isValidSquare(x1, y1)) continue

                    square = rows[y1].squares[x1]
                    
                    while (square.isOccupied && color === square.piece?.color) {
                        currernCount++
                        x1 += dx
                        y1 += dy
                        if (this.isValidSquare(x1, y1)) square = rows[y1].squares[x1]
                        else break
                    }
    
                    count = currernCount
                    if (count == 5) {
                        this.gameOver = true
                        return count
                    }
                    
                }
            }
        }
        return count
    } 

    isValidSquare(x: number, y:number): boolean{
        return (x >=0 && x<=this.boardSize && y>=0 && y<this.boardSize)
    }

    /**
     * Used to check for draws i.e. the board is full and no player connected five pieces
     * @returns boolean
     */
    checkBoard(): boolean {
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++) {
                if(!this.board.rows[i].squares[j].isOccupied) return false
            }
        }
        this.gameOver = true
        return true
    }
}