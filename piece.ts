import Game from "./game"
import GameTurn from "./gameturn"

export enum PLAYER{
    BLACK = "Black",
    WHITE = "White"
}
type Color = PLAYER | null

export default class Piece{
    id: number
    element: HTMLDivElement
    color: Color = null
    constructor(id: number, game: Game) {
        this.id = id
        this.color = game.turn
        this.element = document.createElement('div')
        this.element.classList.add('piece')
        this.element.classList.add(game.turn == PLAYER.BLACK ? 'black' : 'white')
        game.nextTurn()
        const info = document.getElementById('message')
        info?.textContent? info.textContent = game.turn + " to play" : " "
    }

    get getElement(){
        return this.element
    }

    handleClick(){

    }
}