import React, { Component, MouseEventHandler } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Guesses from './components/Guesses';
import Keyboard from './components/Keyboard';
import { isPropertySignature } from 'typescript';

type Props = {}
type State = {
  currentGuess: String,
  maxGuessLength: Number,
}

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      currentGuess: "",
      maxGuessLength: 6,
    };

    this.addChar = this.addChar.bind(this);
    this.resetGuess = this.resetGuess.bind(this);
    this.enterGuess = this.enterGuess.bind(this);
    this.deleteChar = this.deleteChar.bind(this);
  }

  componentDidMount() {
    console.log("Mounted!");
  }

  addChar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    let { currentGuess, maxGuessLength } = this.state;

    if (currentGuess.length < maxGuessLength) {
      const newChar = (e.target as HTMLButtonElement).value;
      this.setState(prevState => ({
        currentGuess: prevState.currentGuess + newChar,
      }), () => console.log(`new state: ${this.state.currentGuess}`));
    }
  }

  resetGuess(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.state.currentGuess.length > 0) {
      this.setState({
        currentGuess: ""
      }, () => console.log("Guess Cleared!"));
    }
  }

  enterGuess(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log("TODO: implement enter guess logic");
  }

  deleteChar(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (this.state.currentGuess.length > 0) {
      this.setState(prevState => ({
        currentGuess: prevState.currentGuess.slice(0, prevState.currentGuess.length - 1)
      }), () => console.log(`new state: ${this.state.currentGuess}`));
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Guesses currentGuess={this.state.currentGuess} />
          <img src={logo} className="App-logo" alt="logo" />
          <Keyboard
          addChar={this.addChar}
          resetGuess={this.resetGuess}
          enterGuess={this.enterGuess}
          deleteChar={this.deleteChar} />
        </header>
      </div>
    );
  }
}

export default App;
