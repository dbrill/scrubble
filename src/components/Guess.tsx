import { Component } from 'react';
import Letter from './Letter';
import Evaluation from '../util/Evaluation';

type Props = {
    isSealed: boolean,
    guess: string,
    guessNumber: number,
    maxGuessLength: number,
}

type State = {}

class Guess extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    letters() {
        let letters = [];
        for (let i = 0; i < this.props.maxGuessLength; i++) {
            letters.push(
                <Letter
                    key={"letter-" + this.props.guessNumber.toString() + "-" + i.toString()}
                    evaluation={Evaluation.ABSENT}
                    letter={this.props.guess[i] || ""}/>
            )
        }
        return letters;
    }

    render() {
        return (
            <div className="guess" style={guessStyle}>
                {this.letters()}
            </div>
        );
    }
}

export default Guess;

const guessStyle = {
    display: "flex"
}
