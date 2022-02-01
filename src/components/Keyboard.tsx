import { MouseEventHandler } from "react";
import "../styles/Keyboard.css";
import Alphabet from "../util/Alphabet";

type ButtonFunction = MouseEventHandler<HTMLButtonElement>;
type Props = {
    addChar: ButtonFunction,
    resetGuess: ButtonFunction,
    enterGuess: ButtonFunction,
    deleteChar: ButtonFunction,
}

// TODO: This is sloppy I could've done this in a single function rather than 3...
function firstRow(props: Props) {
    return Alphabet.getFirstRowLetters().map((char, i) =>
        <button className="key" key={i} onClick={props.addChar} value={char}>{char}</button>);
}

function secondRow(props: Props) {
    return Alphabet.getSecondRowLetters().map((char, i) =>
        <button className="key" key={i} onClick={props.addChar} value={char}>{char}</button>);
}

function thirdRow(props: Props) {
    return Alphabet.getThirdRowLetters().map((char, i) =>
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
                <button className="action key" value="backspace" onClick={props.deleteChar}>del</button>
                <button className="action key" value="reset" onClick={props.resetGuess}>reset</button>
                {thirdRow(props)}
                <button className="action key" value="enter" onClick={props.enterGuess}>enter</button>
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
