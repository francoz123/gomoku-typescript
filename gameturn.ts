import { PLAYER } from "./piece";

export default class GameTurn{
    turn: PLAYER

    constructor(turn: PLAYER){
        this.turn = turn
    }

    nextTurn(){
        this.turn = this.turn == PLAYER.BLACK ? PLAYER.WHITE : PLAYER.BLACK
    }
}