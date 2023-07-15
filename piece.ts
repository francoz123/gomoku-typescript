import Game from "./game"

// Represents a player
export enum PLAYER{
    BLACK = "Black",
    WHITE = "White"
}

type Color = PLAYER | null

/**
 * Models a piece to be placed on the board
 */
export default class Piece{
    id: number
    element: HTMLDivElement
    color: Color = null

    /**
     * Constructor to initialize id
     * @param id  
     * @param game - a Game object to represent the game state
     */
    constructor(id: number, game: Game) {
        this.id = id
        this.color = game.turn
        this.element = document.createElement('div')
        this.element.classList.add('piece')
        this.element.classList.add(game.turn == PLAYER.BLACK ? 'black' : 'white')
        // Change turn to the next player
        game.nextTurn()
        const info = document.getElementById('message')
        info?.textContent? info.textContent = game.turn + " to play" : " "
    }

    get getElement(){
        return this.element
    }
}