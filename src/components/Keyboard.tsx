import { MouseEventHandler } from "react";
import "../styles/Keyboard.css";

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

// TODO: This is sloppy I could've done this in a single function rather than 3...
function firstRow(props: Props) {
    return firstRowLetters.map((char, i) =>
        <button className="key" key={i} onClick={props.addChar} value={char}>{char}</button>);
}

function secondRow(props: Props) {
    return secondRowLetters.map((char, i) =>
        <button className="key" key={i} onClick={props.addChar} value={char}>{char}</button>);
}

function thirdRow(props: Props) {
    return thirdRowLetters.map((char, i) =>
        <button className="key" key={i} onClick={props.addChar} value={char}>{char}</button>);
}


function Keyboard(props: Props) {
    return (<div className="keyboard" style={keyboardStyle}>
        <div className="letters">
            <div className="row first-row">
                {firstRow(props)}
            </div>
            <div className="row second-row">
                {secondRow(props)}
            </div>
            <div className="row third-row">
                <button className="key" value="backspace" onClick={props.deleteChar}>del</button>
                <button className="key" value="reset" onClick={props.resetGuess}>reset</button>
                {thirdRow(props)}
                <button className="key" value="enter" onClick={props.enterGuess}>enter</button>
            </div>
        </div>
    </div>
    );
}

export default Keyboard;

const keyboardStyle = {
    height: "100%",
    userSelect: "none" as const,
}
