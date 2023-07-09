import Board from "./board";
import GameTurn from "./gameturn";
import { PLAYER } from "./piece";

export default class Game{
    board: Board
    gameOver: boolean
    turn: PLAYER
    started: boolean = false

    constructor(boardSize: number, turn: PLAYER, gameOver: boolean = false){
        this.turn = turn
        this.gameOver = gameOver
        this.board = new Board(boardSize, this)
    }

    countConnectedPieces(): number {
        return 1
    }

    start(){
        const container = document.getElementById('container')
        container?.firstElementChild?.remove()
        container?.append(this.board.element)
    }

    nextTurn(){
        this.turn = this.turn == PLAYER.BLACK ? PLAYER.WHITE : PLAYER.BLACK
    }
}