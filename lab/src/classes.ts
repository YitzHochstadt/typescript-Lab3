export abstract class Player{
    name:string;
    winCount: number = 0;
    constructor(name:string){
        this.name = name;
    }
    abstract pickSymbol():string;
}
export class RandomPlayer extends Player{
    constructor(name:string){
        super(name);
    }
    pickSymbol():string{
        let symbols:string[] = ["rock", "paper", "scissors"];
        return symbols[Math.floor(Math.random() * symbols.length)]
    }
}
export class ConsistentPlayer extends Player{
    symbol:string;
    constructor(name:string, symbol:string){
        super(name);
        this.symbol = symbol;
    }
    pickSymbol():string{
        return this.symbol;
    }
}