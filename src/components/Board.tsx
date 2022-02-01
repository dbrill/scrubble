import { Component } from 'react';
import Guess from './Guess';

type Props = {
    guesses: string[],
    guessIndex: number,
    maxGuesses: number,
    maxGuessLength: number,
};

class Board extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = { currGuessIndex: 0 };
    }

    getCurrentGuess() {
        return this.props.guesses[this.props.guessIndex];
    }

    guesses() {
        let guesses = [];
        for (let i = 0; i < this.props.maxGuesses; i++) {
            guesses.push(<Guess
                key={"guess-" + i.toString()}
                isSealed={false}
                guess={this.props.guesses[i]}
                guessNumber={i}
                maxGuessLength={this.props.maxGuessLength}/>)
        }
        return guesses;
    }
    render() {
        return (
            <div className="board" style={boardStyle}>
                {this.guesses()}
                {/* <div> Current Guess: {this.getCurrentGuess()} </div>
                <div> You've guessed {this.props.guessIndex} time{this.props.guessIndex === 1 ? "" : "s"}</div> */}
            </div>
        );
    }
}

export default Board;

const boardStyle = {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1",
    overflow: "hidden",
}
