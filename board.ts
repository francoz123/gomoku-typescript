import Row from "./row";

export default class board{
    id: number
    rows: Row[]
     constructor(id: number, size: number){
        this.id = id
        this.rows = Array.from({length: size})
     }
}