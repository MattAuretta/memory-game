import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import CharcterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    clicked: [],
    score: 0,
    gameMessage: ""
  }

  componentDidMount(){
    this.setState({
      gameMessage: "Click an image to begin!"
    })
  }

  handleClick = (event) => {
    this.setState({
      clicked: [...this.state.clicked, event.target.alt]
    })
    if (this.state.clicked.includes(event.target.alt)) {
      this.setState({
        gameMessage: "You guessed incorrectly!",
        score: 0
      })
    } else {
      this.setState({
        gameMessage: "You guessed correctly!",
        score: this.state.score + 1
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          gameMessage={this.state.gameMessage}
          score={this.state.score}
        />
        <Jumbotron />
        {characters.map(character => (
          <CharcterCard
            key={character.id}
            name={character.name}
            image={character.image}
            handleClick={this.handleClick}
          ></CharcterCard>
        ))}
      </Wrapper>
    );
  }
}

export default App;
