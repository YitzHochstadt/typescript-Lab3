import configPrompt from 'prompt-sync';
import { Player, ConsistentPlayer, RandomPlayer } from "./lab/src/classes";
import { displayHeroes, playAndPickWinner } from "./lab/src/function";

const prompt = configPrompt({sigint: true});

let heroes:Player[] = [
    new RandomPlayer("Dude"),
    new ConsistentPlayer("The Dude", "rock"),
    new ConsistentPlayer("El Dudarino", "paper"),
    new ConsistentPlayer("Another Dude", "scissors")
];
let villains:Player[] = [
    new ConsistentPlayer("Thing1", "scissors"),
    new RandomPlayer("Thing2"),
    new ConsistentPlayer("Thing3", "paper"),
    new RandomPlayer("Thing4"),
    new ConsistentPlayer("Thing5", "rock"),
    new RandomPlayer("Thing6"),
];

for (let villain of villains){
    console.log(`You are battling ${villain.name}`)
    displayHeroes(heroes);
    let pickedHeroName:string = prompt("Which Dude will fight for you? ");
    let pickedHero = heroes.find(hero => hero.name === pickedHeroName);
    if (pickedHero === undefined){
        console.log("Not a valid name");
        break;
    }
    playAndPickWinner(pickedHero, villain);
    if (playAndPickWinner(pickedHero, villain) === pickedHero){
        console.log("Winner winner chicken dinner!")
        pickedHero.winCount++;
    } else if (playAndPickWinner(pickedHero, villain) === villain){
        console.log("Don't quit you're day job kid.")
    } else {
        console.log("Ties are worse than losses don't get too excited");
    }
}
let totalWinCount:number = 0;
for (let hero of heroes){
    totalWinCount += hero.winCount;
}
console.log(totalWinCount);
displayHeroes(heroes);