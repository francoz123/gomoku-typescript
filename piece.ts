import GameTurn from "./gameturn"

export enum PLAYER{
    BLACK = "BLACK",
    WHITE = "WHITE"
}

export default class Piece{
    id: number
    element: HTMLDivElement

    constructor(id: number, gameTurn: GameTurn) {
        this.id = id
        this.element = document.createElement('div')
        this.element.classList.add('piece')
        this.element.classList.add(gameTurn.turn == PLAYER.BLACK ? 'black' : 'white')
        gameTurn.nextTurn()
    }

    get getElement(){
        return this.element
    }

    handleClick(){

    }
}