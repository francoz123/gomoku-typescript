import { InferencePriority } from "typescript";
import Board from "./board";
import GameTurn from "./gameturn";
import { PLAYER } from "./piece";

type Color = PLAYER | null | undefined

export default class Game{
    board: Board
    boardSize: number
    gameOver: boolean
    turn: PLAYER
    started: boolean = false

    constructor(boardSize: number, turn: PLAYER, gameOver: boolean = false){
        this.boardSize = boardSize
        this.turn = turn
        this.gameOver = gameOver
        this.board = new Board(boardSize, this)
    }

    start(){
        const container = document.getElementById('container')
        container?.firstElementChild?.remove()
        container?.append(this.board.element)

        const info = document.createElement('div')
        info.classList.add('info')
        info.id = "info"
        info.textContent = this.turn + " to play"
        container?.append(info)
    }

    nextTurn(){
        this.turn = this.turn == PLAYER.BLACK ? PLAYER.WHITE : PLAYER.BLACK
    } 
    
    countConnectedPieces(yCoord:number, xCoord:number): number {
        let count = 1;
        let rows = this.board.rows
        let color: Color = rows[yCoord].squares[xCoord].piece?.color
        for (let dy = -1; dy <= 1; dy++) { // (-1, -1), (-1, 1) etc
            for (let dx = -1; dx <= 1; dx++) {
                let currernCount = 1
                if (dx == 0 && dy == 0) continue
                let x = xCoord + dx
                var y = yCoord + dy
                if (!this.isValidSquare(x, y)) continue
                let square = rows[y].squares[x]
                if (square.isOccupied && square.piece?.color === color){
                    //if (!(square.piece?.color === color)) continue
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