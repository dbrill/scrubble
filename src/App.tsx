import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Alphabet from './util/Alphabet';

type Props = {}
type State = {
  guesses: string[],
  maxGuessLength: number,
  maxGuesses: number,
  guessIndex: number,
}

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      guesses: Array(6).fill("", 0),
      maxGuessLength: 5,
      maxGuesses: 6,
      guessIndex: 0
    };

    this._handleKeyboardChar = this._handleKeyboardChar.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this.resetGuess = this.resetGuess.bind(this);
    this.enterGuess = this.enterGuess.bind(this);
    this.deleteChar = this.deleteChar.bind(this);
  }

  // componentWillMount deprecated in React 16.3
  componentDidMount(){
    document.addEventListener("keydown", this._handleKeyDown);
  }


  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  getCurrentGuess() {
    return this.state?.guesses ? this.state.guesses[this.state.guessIndex] : "";
  }

  addChar(newChar: string) {
    if (this.getCurrentGuess().length < this.state.maxGuessLength) {
      this.setState((prevState) => {
        let newGuesses = [...prevState.guesses];
        newGuesses[prevState.guessIndex] += newChar;
        return { guesses: newGuesses }
      });
    }
  }

  _handleKeyDown(ev: KeyboardEvent) {
    const key = ev.key;
    if (key === "Enter") {
      this.enterGuess();
    }
    else if (key === "Escape") {
      this.resetGuess();
    }
    else if (key === "Backspace") {
      this.deleteChar();
    }
    else if (Alphabet.letterExists(key)) {
      this.addChar(key);
    }
  }

  _handleKeyboardChar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.addChar((e.target as HTMLButtonElement).value);
  }

  resetGuess(_e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.getCurrentGuess().length > 0) {
      this.setState(prevState => {
        let newGuesses = [...prevState.guesses];
        newGuesses[prevState.guessIndex] = "";
        return { guesses: newGuesses }
      });
    }
  }

  enterGuess(_e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log("TODO: implement enter guess logic");
    if (this.state.guessIndex < this.state.maxGuesses - 1 &&
        this.getCurrentGuess().length === this.state.maxGuessLength) {
      this.setState(prevState => {
        return { guessIndex: prevState.guessIndex + 1 }
      });
    }
  }

  deleteChar(_e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.getCurrentGuess().length > 0) {
      this.setState(prevState => {
        let newGuesses = [...prevState.guesses];
        let oldWord = prevState.guesses[prevState.guessIndex];
        newGuesses[prevState.guessIndex] = oldWord.slice(0, oldWord.length - 1);
        return { guesses: newGuesses };
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Scrubble
        </header>
        <Board
          guesses={this.state.guesses}
          guessIndex={this.state.guessIndex}
          maxGuesses={this.state.maxGuesses}
          maxGuessLength={this.state.maxGuessLength} />
        <Keyboard
          addChar={this._handleKeyboardChar}
          resetGuess={this.resetGuess}
          enterGuess={this.enterGuess}
          deleteChar={this.deleteChar} />
      </div>
    );
  }
}

export default App;
