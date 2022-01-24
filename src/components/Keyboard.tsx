import { MouseEventHandler } from "react";

type ButtonFunction = MouseEventHandler<HTMLButtonElement>;
type Props = {
    addChar: ButtonFunction,
    resetGuess: ButtonFunction,
    enterGuess: ButtonFunction,
    deleteChar: ButtonFunction,
}

const firstRowLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const secondRowLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const thirdRowLetters = ["z", "x", "c", "v", "b", "n", "m"];

function firstRow(props: Props) {
    return firstRowLetters.map((char, i) =>
        <button key={i} onClick={props.addChar} value={char}>{char}</button>);
}

function secondRow(props: Props) {
    return secondRowLetters.map((char, i) =>
        <button key={i} onClick={props.addChar} value={char}>{char}</button>);
}

function thirdRow(props: Props) {
    return thirdRowLetters.map((char, i) =>
        <button key={i} onClick={props.addChar} value={char}>{char}</button>);
}


function Keyboard(props: Props) {
    console.log(firstRow(props));
    return (<div className="keyboard">
        <div className="letters">
            <div className="first-row">
                {firstRow(props)}
            </div>
            <div className="second-row">
                {secondRow(props)}
            </div>
            <div className="third-row">
                {thirdRow(props)}
            </div>
        </div>
        <div className="actions">
            <button value="backspace" onClick={props.deleteChar}>del</button>
            <button value="reset" onClick={props.resetGuess}>reset</button>
            <button value="enter" onClick={props.enterGuess}>enter</button>
        </div>
    </div>
    );
}

export default Keyboard;
