const firstRowLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const secondRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const thirdRowLetters = ["z", "x", "c", "v", "b", "n", "m"];
class Alphabet {
    public static getFirstRowLetters(): ReadonlyArray<string> {
        return firstRowLetters;
    }

    public static getSecondRowLetters(): ReadonlyArray<string> {
        return secondRowLetters;
    }

    public static getThirdRowLetters(): ReadonlyArray<string> {
        return thirdRowLetters;
    }

    public static letterExists(letter: string): boolean {
        return firstRowLetters.includes(letter) ||
            secondRowLetters.includes(letter) ||
            thirdRowLetters.includes(letter);
    }
}

export default Alphabet;
