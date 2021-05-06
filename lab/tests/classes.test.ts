import { Player, RandomPlayer, ConsistentPlayer } from "../src/classes"
import { playAndPickWinner } from "../src/function";
describe("RandomPlayer", () => {
    test("name is set by constructor", () => {
        let randomPlayer: RandomPlayer = new RandomPlayer("Charles");
        expect(randomPlayer.name).toBe("Charles");
    });
    test("winCount starts at 0", () => {
        let randomPlayer: RandomPlayer = new RandomPlayer("Charles");
        expect(randomPlayer.winCount).toBe(0);
    });
});
describe("ConsistentPlayer", () => {
    test("name and symbol are set by constructor", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Charles", "paper");
        expect(consistentPlayer.name).toBe("Charles");
        expect(consistentPlayer.symbol).toBe("paper");
    });
    test("name and symbol are set by constructor", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Stan", "rock");
        expect(consistentPlayer.name).toBe("Stan");
        expect(consistentPlayer.symbol).toBe("rock");
    });
    test("name and symbol are set by constructor", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Tim", "scissors");
        expect(consistentPlayer.name).toBe("Tim");
        expect(consistentPlayer.symbol).toBe("scissors");
    });
    test("winCount starts at 0", () => {
        let consistentPlayer: ConsistentPlayer = new ConsistentPlayer("Charles", "paper");
        expect(consistentPlayer.winCount).toBe(0);
    });
});
describe("playAndPickWinner Function", () => {
    test("rock vs rock", () => {
        let hero: Player = new ConsistentPlayer("Stan", "rock")
        let villain: Player = new ConsistentPlayer("Johnny", "rock")
        expect(playAndPickWinner(hero, villain)).toBe(null);
    });
    test("rock vs paper", () => {
        let hero: Player = new ConsistentPlayer("Stan", "rock")
        let villain: Player = new ConsistentPlayer("Charles", "paper")
        expect(playAndPickWinner(hero, villain)).toBe(villain);
    });
    test("rock vs scissor", () => {
        let hero: Player = new ConsistentPlayer("Stan", "rock")
        let villain: Player = new ConsistentPlayer("Tim", "scissors")
        expect(playAndPickWinner(hero, villain)).toBe(hero);
    });
    test("paper vs paper", () => {
        let hero: Player = new ConsistentPlayer("Charles", "paper")
        let villain: Player = new ConsistentPlayer("Johnny", "paper")
        expect(playAndPickWinner(hero, villain)).toBe(null);
    });
    test("paper vs rock", () => {
        let hero: Player = new ConsistentPlayer("Charles", "paper")
        let villain: Player = new ConsistentPlayer("Stan", "rock")
        expect(playAndPickWinner(hero, villain)).toBe(hero);
    });
    test("paper vs scissor", () => {
        let hero: Player = new ConsistentPlayer("Charles", "paper")
        let villain: Player = new ConsistentPlayer("Tim", "scissors")
        expect(playAndPickWinner(hero, villain)).toBe(villain);
    });
    test("scissors vs scissors", () => {
        let hero: Player = new ConsistentPlayer("Tim", "scissors")
        let villain: Player = new ConsistentPlayer("Johnny", "scissors")
        expect(playAndPickWinner(hero, villain)).toBe(null);
    });
    test("scissors vs paper", () => {
        let hero: Player = new ConsistentPlayer("Tim", "scissors")
        let villain: Player = new ConsistentPlayer("Charles", "paper")
        expect(playAndPickWinner(hero, villain)).toBe(hero);
    });
    test("scissors vs rock", () => {
        let hero: Player = new ConsistentPlayer("Tim", "scissors")
        let villain: Player = new ConsistentPlayer("Stan", "rock")
        expect(playAndPickWinner(hero, villain)).toBe(villain);
    });
});