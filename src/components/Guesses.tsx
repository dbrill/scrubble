import {Component} from 'react';

type Props = {
    currentGuess: String,
};

type State = {
    currGuessIndex: Number,
}

class Guesses extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {currGuessIndex: 0};
    }

    render() {
        return (
            <div>
                <h1> Guesses are gonna go here! </h1>
                <h2> Current Guess: {this.props.currentGuess} </h2>
                <h2> You've guessed {this.state.currGuessIndex} time{this.state.currGuessIndex === 1 ? "" : "s"}</h2>
            </div>
        );
    }
}

export default Guesses;
