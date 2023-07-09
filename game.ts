import Board from "./board";
import GameTurn from "./gameturn";

export default class Game{
    board: Board
    gameOver: boolean
    turn: GameTurn
    started: boolean = false

    constructor(boardSize: number, turn: GameTurn, gameOver: boolean = false){
        this.board = new Board(boardSize, turn)
        this.turn = turn
        this.gameOver = gameOver
    }

    countConnectedPieces(): boolean {
        return true
    }

    start(){
        const container = document.getElementById('container')
        container?.firstElementChild?.remove()
        container?.append(this.board.element)
    }
}