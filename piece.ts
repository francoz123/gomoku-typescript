export enum PLAYER{
    BLACK = "BLACK",
    WHITE = "WHITE"
}

export default class Piece{
    id: number
    element: HTMLDivElement

    constructor(id: number, player: PLAYER) {
        this.id = id
        this.element = document.createElement('div')
        this.element.classList.add('piece')
        this.element.classList.add(player == PLAYER.BLACK ? 'black' : 'white')
    }

    get getElement(){
        return this.element
    }

    handleClick(){

    }
}